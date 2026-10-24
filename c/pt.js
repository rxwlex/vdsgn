// Переход между страницами (по мотивам artemiilebedev.com):
//   уход — блоки страницы по очереди гаснут, приподнимаются и размываются, сверху — размытая вуаль и белый покров;
//   приход — новая страница проявляется из размытия, блоки сверху вниз встают на место.
// Десктоп и телефон (на телефоне размытие слабее и без размытия фона), без «уменьшить движение».
// Подключается в <head> обычным <script>.
(() => {
  const KEY = "pt-enter";
  const EXIT = 520, ENTER = 950, Y_OUT = -14, Y_IN = 22;
  const touch = matchMedia("(hover: none) and (pointer: coarse)").matches || innerWidth < 768;
  const BLUR = touch ? 6 : 14;              // на телефоне размытие дорогое — делаем мягче
  const BACKDROP = !touch;                  // размытие фона под вуалью — только десктоп
  const BG = "#fff";
  const EASE_IN = "cubic-bezier(.55, 0, 1, .45)";    // power2.in
  const EASE_OUT = "cubic-bezier(.16, 1, .3, 1)";     // expo.out
  // шапка, низ, курсор, переключатели — не анимируются
  const CHROME = ".header, .footer, .cursor, .credit, .vswitch, .loader, .lb, .preview, script, style";

  const enabled = () => !matchMedia("(prefers-reduced-motion: reduce)").matches;

  // стили: белый экран до старта прихода + слои покрова
  const css = document.createElement("style");
  css.textContent = `
    html.pt-pending::before { content: ""; position: fixed; inset: 0; z-index: 900; background: ${BG}; pointer-events: none; }
    html.pt-pending, html.pt-exit { overflow: hidden !important; }
    .pt-layer { position: fixed; inset: 0; z-index: 900; pointer-events: none; }
    .pt-veil { background: rgba(255, 255, 255, .35); opacity: 0; }
    .pt-cover { background: ${BG}; opacity: 0; }`;
  document.head.appendChild(css);

  let pending = false;
  try { pending = !!sessionStorage.getItem(KEY) && enabled(); } catch {}
  if (pending) document.documentElement.classList.add("pt-pending");
  window.PT = { entering: pending };

  // блоки страницы, которые двигаются: дети <main> (если в main одна обёртка — её дети),
  // плюс [data-pt] вне main (лента на телефоне) — её видимые на экране карточки по очереди
  const onScreen = (el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.height > 0; };
  const layers = () => {
    const out = [];
    document.querySelectorAll("[data-pt]").forEach((box) => {
      if (box.getClientRects().length) [...box.children].filter(onScreen).forEach((el) => out.push(el));
    });
    if (out.length) return out;
    const main = document.querySelector("main");
    if (main) {
      let kids = [...main.children];
      if (kids.length === 1 && kids[0].children.length > 1) kids = [...kids[0].children];
      kids.forEach((el) => { if (!el.matches(CHROME) && el.getClientRects().length) out.push(el); });
    }
    return out.length ? out : main ? [main] : [];
  };
  const layer = (cls) => {
    const el = document.createElement("div");
    el.className = `pt-layer ${cls}`;
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    return el;
  };

  // ---------- Приход ----------
  const enter = () => {
    if (!pending) return;
    try { sessionStorage.removeItem(KEY); } catch {}
    const els = layers();
    const veil = layer("pt-veil"), cover = layer("pt-cover");
    cover.style.opacity = 1;
    veil.style.cssText = BACKDROP ? `opacity:.42;backdrop-filter:blur(${BLUR}px);-webkit-backdrop-filter:blur(${BLUR}px)` : "opacity:.42";
    els.forEach((el) => { el.style.opacity = 0; el.style.transform = `translate3d(0, ${Y_IN}px, 0)`; el.style.filter = `blur(${BLUR}px)`; });
    if (!location.hash) scrollTo(0, 0); // с #slug страница сама прокручена к нужной карточке
    let anims = [], cleaned = false;
    const clean = () => {
      if (cleaned) return; cleaned = true;
      document.documentElement.classList.remove("pt-pending");
      els.forEach((el) => { el.style.opacity = el.style.transform = el.style.filter = ""; });
      anims.forEach((a) => a.cancel());
      veil.remove(); cover.remove();
    };
    // страховка: если кадры не идут (вкладка в фоне), всё равно показать страницу
    setTimeout(clean, ENTER + 1500);
    requestAnimationFrame(() => {
      if (cleaned) return;
      document.documentElement.classList.remove("pt-pending");
      cover.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: "cubic-bezier(.25, .46, .45, .94)", fill: "forwards" });
      veil.animate(BACKDROP ? [{ opacity: .42, backdropFilter: `blur(${BLUR}px)` }, { opacity: 0, backdropFilter: "blur(0px)" }] : [{ opacity: .42 }, { opacity: 0 }],
        { duration: ENTER * .85, delay: 60, easing: "cubic-bezier(.25, .46, .45, .94)", fill: "forwards" });
      anims = els.map((el, i) => el.animate(
        [{ opacity: 0, transform: `translate3d(0, ${Y_IN}px, 0)`, filter: `blur(${BLUR}px)` },
         { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0px)" }],
        { duration: ENTER, delay: 40 + i * 40, easing: EASE_OUT, fill: "forwards" }));
      Promise.all(anims.map((a) => a.finished)).catch(() => {}).then(clean);
    });
  };

  // ---------- Уход ----------
  let busy = false;
  const go = (url) => {
    const nav = typeof url === "function" ? url : () => { location.href = url; };
    if (busy) return;
    if (!enabled()) { nav(); return; }
    busy = true;
    try { sessionStorage.setItem(KEY, "1"); } catch {}
    document.documentElement.classList.add("pt-exit");
    const els = layers();
    const veil = layer("pt-veil"), cover = layer("pt-cover");
    const n = els.length;
    els.forEach((el, i) => el.animate(
      [{ opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0px)" },
       { opacity: 0, transform: `translate3d(0, ${Y_OUT}px, 0)`, filter: `blur(${BLUR}px)` }],
      { duration: EXIT, delay: (n - 1 - i) * 30, easing: EASE_IN, fill: "forwards" }));       // снизу вверх
    veil.animate(BACKDROP ? [{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: .65, backdropFilter: `blur(${BLUR}px)` }] : [{ opacity: 0 }, { opacity: .65 }],
      { duration: EXIT * .7, delay: EXIT * .18, easing: "cubic-bezier(.45, 0, .55, 1)", fill: "forwards" });
    // переходим по концу анимации; страховка — если вкладка в фоне и анимации стоят
    let done = false;
    const leave = () => { if (!done) { done = true; nav(); } };
    cover.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, delay: EXIT * .72, easing: EASE_IN, fill: "forwards" })
      .finished.then(leave);
    setTimeout(leave, EXIT + 600);
  };
  window.PT.go = go;

  // внутренние ссылки — через переход
  const internal = (a) => {
    if (!a || !a.href || a.target === "_blank" || a.hasAttribute("download") || a.closest("[data-no-pt]")) return false;
    const href = a.getAttribute("href") || "";
    if (!href || href.startsWith("#")) return false;
    try {
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return false;
      if (u.pathname === location.pathname && u.search === location.search) return false;
      return true;
    } catch { return false; }
  };
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a");
    if (!internal(a) || !enabled()) return;
    e.preventDefault();
    go(a.href);
  });

  // вернулись кнопкой «назад» из bfcache — снять следы ухода
  addEventListener("pageshow", (e) => {
    if (!e.persisted) return;
    busy = false;
    document.documentElement.classList.remove("pt-exit", "pt-pending");
    document.querySelectorAll(".pt-layer").forEach((el) => el.remove());
    layers().forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    // пришли «назад» из другой страницы с переходом — проиграть приход и здесь
    try { pending = !!sessionStorage.getItem(KEY) && enabled(); } catch {}
    enter();
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enter); else enter();
})();
