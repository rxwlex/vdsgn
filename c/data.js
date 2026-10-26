// Общие данные проектов для варианта C.
// Картинки проектов лежат в works/media.
// about — из Notion (кейсы); у остальных — ЧЕРНОВОЙ; role — ЧЕРНОВОЙ, заменить реальным (у Ghost уже свой about).
(() => {
  // ЧЕРНОВЫЕ тексты для проектов без описания — заменить реальными
  const DRAFT_ABOUT = "Draft: a short project description — the task, the context and what was done. Two or three sentences on how the visual system solves the brand’s problem.";
  const DRAFT_ABOUT_RU = "Черновик: короткое описание проекта — задача, контекст и что было сделано. Два-три предложения о том, как визуальная система решает задачу бренда";

  // Русские описания кейсов (по Notion)
  const ABOUT_RU = {
    yango: "Годовой отчёт для Yango Group — международной технологической экосистемы Яндекса, работающей в 30+ странах\n\nЗадача: систематизировать большое количество разных данных (макроэкономические показатели, продуктовые метрики юнитов, ESG-отчётность) в единый годовой отчёт",
    ghost: "Сайт для Ghost — маркет-мейкера, который помогает крипто-командам запускать токены",
    "afi-tower": "Интерфейс touch-панели для офиса продаж AFI Tower — жилого комплекса в формате «город в одном здании», где покупаешь квартиру, а живёшь как в отеле. Панель даёт информацию по всем объектам комплекса и показывает преимущества покупки квартиры\n\nСоставил портреты покупателей и jobs-to-be-done, спроектировал связку из двух экранов, где планшет управляет видеостеной, собрал масштабируемую дизайн-систему и motion guide для разработки",
    mess: "Мобильный криптокошелёк для хранения активов, переводов и обмена токенов\n\nЦель: снизить порог входа в Web3 и сделать приложение простым, как необанк, сохранив весь функционал DeFi",
    etalon: "Годовой и ESG-отчёт для группы «Эталон» — одного из крупнейших федеральных девелоперов России",
    msa: "Корпоративный сайт для MSA — одного из крупнейших поставщиков металлопроката в России. Создал B2B-платформу для закупщиков",
    sberbank: "Годовой отчёт для Сбербанка. Один из вариантов проекта на тендер",
    seligdar: "Презентация «Селигдара», крупного холдинга по добыче золота и олова, для Дня инвестора на Московской бирже\n\nТяжёлые финансовые показатели и стратегию перевёл в понятный современный визуал. Самой сложной частью стала карта активов: все месторождения, фабрики и объёмы запасов требовалось аккуратно уместить на слайдах",
    rostelecom: "Годовой отчёт для «Ростелекома» — крупнейшего в России провайдера цифровых услуг и решений",
    web3: "Подборка небольших проектов для крипто-команд: мобильные интерфейсы, концепты и визуал для Web3-продуктов",
    onesty: "Социальное приложение на базе ИИ с двумя режимами — дейтинг и деловой нетворкинг\n\nГлавный вызов: логично объединить оба сценария и сделать так, чтобы длинные тесты совместимости не утомляли. Развёл режимы по цвету, оставил привычные свайпы и карточки, геймифицировал тесты наглядной шкалой мэтча и задизайнил анимации переходов и свайпов",
  };

  const M = (f) => `../media/${f}`;

  // Галереи кейсов — строки сверху вниз, как в Figma:
  //   { wide: src }                      — во всю ширину, 16:9
  //   { strip: src, ratio: "w / h" }     — во всю ширину, своя пропорция (узкие полосы)
  //   { pair: [tall, fill] }             — вертикальный 4:5 слева + кадр справа той же высоты
  //   { pair: [fill, tall], rev: true }  — то же, зеркально
  // Если галереи нет — страница собирает её из обложки.
  const GALLERIES = {
    // первая строка (01-grid) — hero проекта
    // Yango 3: страницы отчёта во всю ширину, каждая в своей пропорции
    yango: [
      { strip: M("yango3/01.webp"), ratio: "3200 / 2434" },
      { strip: M("yango3/02.webp"), ratio: "3200 / 6033" },
      { strip: M("yango3/03.webp"), ratio: "3200 / 2337" },
      { strip: M("yango3/04.webp"), ratio: "3200 / 2226" },
      { strip: M("yango3/05.webp"), ratio: "3200 / 4523" },
      { strip: M("yango3/06.webp"), ratio: "3200 / 2157" },
      { strip: M("yango3/07.webp"), ratio: "3200 / 6046" },
      { strip: M("yango3/08.webp"), ratio: "3200 / 6977" },
      { strip: M("yango3/09.webp"), ratio: "3200 / 7096" },
    ],
    // прежняя версия Yango (папка Yango2) — project.html?p=yango&v=old
    "yango-old": [
      { strip: M("yango2/01.webp"), ratio: "3200 / 2434" },
      { strip: M("yango2/02.webp"), ratio: "3200 / 1166" },
      { strip: M("yango2/03.webp"), ratio: "3200 / 2144" },
      { strip: M("yango2/04.webp"), ratio: "3200 / 3238" },
      { strip: M("yango2/05.webp"), ratio: "3200 / 2375" },
      { strip: M("yango2/06.webp"), ratio: "3200 / 2225" },
      { strip: M("yango2/07.webp"), ratio: "3200 / 3383" },
      { strip: M("yango2/08.webp"), ratio: "3200 / 2157" },
      { strip: M("yango2/09.webp"), ratio: "3200 / 3059" },
      { strip: M("yango2/10.webp"), ratio: "3200 / 2221" },
      { strip: M("yango2/11.webp"), ratio: "3200 / 2482" },
      { strip: M("yango2/12.webp"), ratio: "3200 / 2035" },
      { strip: M("yango2/13.webp"), ratio: "3200 / 2128" },
      { strip: M("yango2/14.webp"), ratio: "3200 / 2655" },
      { strip: M("yango2/15.webp"), ratio: "3200 / 2503" },
      { strip: M("yango2/16.webp"), ratio: "3200 / 2021" },
    ],
    // Mess из Figma (Case): кадры во всю ширину
    mess: [
      { strip: M("mess2/01.webp"), ratio: "3200 / 4517" },
      { strip: M("mess2/02.webp"), ratio: "3200 / 1800" },
      { strip: M("mess2/03.webp"), ratio: "3200 / 1806" },
      { strip: M("mess2/04.webp"), ratio: "3200 / 1806" },
      { strip: M("mess2/05.webp"), ratio: "3200 / 1806" },
      { strip: M("mess2/06.webp"), ratio: "3200 / 4380" },
      { strip: M("mess2/07.webp"), ratio: "3200 / 2400" },
      { strip: M("mess2/08.webp"), ratio: "3200 / 2682" },
    ],
    // прежняя версия Mess — project.html?p=mess&v=old
    "mess-old": [
      { pair: [M("mess/03-icon.webp"), M("mess/06-device.webp")] },
      { wide: M("mess/02-screens.webp") },
      { pair: [M("mess/04-homescreen.webp"), M("mess/07-balance.webp")] },
      { pair: [M("mess/05-passcode.webp"), M("mess/08-recovery.webp")] },
    ],
    // AFI Tower: кадры во всю ширину
    "afi-tower": [
      { strip: M("afi/01-hero.webp"), ratio: "3200 / 1800" },   // обложка с главной
      { strip: M("afi2/02.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/03.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/04.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/05.webp"), ratio: "3200 / 2161" },
      { strip: M("afi2/06.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/07.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/08.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/09.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/10.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/11.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/12.webp"), ratio: "3200 / 2156" },
      { strip: M("afi2/13.webp"), ratio: "3200 / 2157" },
      { strip: M("afi2/14.webp"), ratio: "3200 / 2157" },
    ],
    // прежняя версия AFI Tower — project.html?p=afi-tower&v=old
    "afi-tower-old": [
      { pair: [M("afi/02-smart-home.webp"), M("afi/03-logo.webp")] },
      { wide: M("afi/04-plan.webp") },
      { pair: [M("afi/05-type.webp"), M("afi/06-tower.webp")] },
      { wide: M("afi/07-circles.webp") },
      { pair: [M("afi/08-duo.webp"), M("afi/09-be-smart.webp")] },
      { wide: M("afi/10-facade.webp") },
      { pair: [M("afi/11-so-high.webp"), M("afi/12-women.webp")] },
      { wide: M("afi/13-terrace.webp") },
      { pair: [M("afi/14-red.webp"), M("afi/15-screens.webp")] },
      { wide: M("afi/16-menu.webp") },
    ],
    // Etalon из Figma (Case): страницы отчёта во всю ширину
    etalon: [
      { strip: M("etalon2/01.webp"), ratio: "2560 / 2292" },
      { strip: M("etalon2/02.webp"), ratio: "2560 / 1900" },
      { strip: M("etalon2/03.webp"), ratio: "2560 / 2895" },
      { strip: M("etalon2/04.webp"), ratio: "2560 / 2720" },
      { strip: M("etalon2/05.webp"), ratio: "2560 / 1900" },
      { strip: M("etalon2/06.webp"), ratio: "2560 / 2212" },
      { strip: M("etalon2/07.webp"), ratio: "2560 / 2842" },
      { strip: M("etalon2/08.webp"), ratio: "2560 / 1900" },
      { strip: M("etalon2/09.webp"), ratio: "2560 / 2398" },
      { strip: M("etalon2/10.webp"), ratio: "2560 / 2863" },
      { strip: M("etalon2/11.webp"), ratio: "2560 / 2172" },
      { strip: M("etalon2/12.webp"), ratio: "2560 / 1900" },
      { strip: M("etalon2/13.webp"), ratio: "2560 / 2888" },
      { strip: M("etalon2/14.webp"), ratio: "2560 / 2078" },
      { strip: M("etalon2/15.webp"), ratio: "2560 / 1901" },
      { strip: M("etalon2/16.webp"), ratio: "2560 / 2640" },
      { strip: M("etalon2/17.webp"), ratio: "2560 / 1902" },
      { strip: M("etalon2/18.webp"), ratio: "2560 / 1900" },
      { strip: M("etalon2/19.webp"), ratio: "2560 / 2669" },
      { strip: M("etalon2/20.webp"), ratio: "2560 / 2501" },
      { strip: M("etalon2/21.webp"), ratio: "2560 / 1992" },
      { strip: M("etalon2/22.webp"), ratio: "2560 / 2630" },
    ],
    // прежняя версия Etalon — project.html?p=etalon&v=old
    "etalon-old": [
      { wide: M("etalon/02-marina.webp") },
      { pair: [M("etalon/03-building.webp"), M("etalon/04-131.webp")] },
      { wide: M("etalon/05-indicators.webp") },
      { pair: [M("etalon/06-federal.webp"), M("etalon/07-street.webp")] },
      { wide: M("etalon/08-team.webp") },
      { pair: [M("etalon/09-night.webp"), M("etalon/10-chart.webp")] },
      { wide: M("etalon/11-results.webp") },
    ],
    // Sberbank из Figma: кадры отчёта во всю ширину (06 ещё не выгружен — лимит Figma)
    sberbank: [
      { strip: M("sber2/01.webp"), ratio: "3200 / 2352" },
      { strip: M("sber2/02.webp"), ratio: "3200 / 1102" },
      { strip: M("sber2/03.webp"), ratio: "3200 / 1671" },
      { strip: M("sber2/04.webp"), ratio: "3200 / 3760" },
      { strip: M("sber2/05.webp"), ratio: "3200 / 2362" },
      { strip: M("sber2/07.webp"), ratio: "3200 / 2659" },
      { strip: M("sber2/08.webp"), ratio: "3200 / 2319" },
      { strip: M("sber2/09.webp"), ratio: "3200 / 2948" },
      { strip: M("sber2/10.webp"), ratio: "3200 / 2191" },
      { strip: M("sber2/11.webp"), ratio: "3200 / 1516" },
    ],
    // прежняя версия Sberbank — project.html?p=sberbank&v=old
    "sberbank-old": [
      { pair: [M("sber/02-text.webp"), M("sber/03-fan.webp")] },
      { wide: M("sber/04-esg.webp") },
      { pair: [M("sber/05-spiral.webp"), M("sber/06-park.webp")] },
      { wide: M("sber/07-dashboard.webp") },
      { pair: [M("sber/08-twist.webp"), M("sber/09-chart.webp")] },
      { wide: M("sber/10-charts.webp") },
      { pair: [M("sber/11-graphs.webp"), M("sber/12-light.webp")] },
      { wide: M("sber/13-page.webp") },
    ],
    // MSA из Figma: кадры сайта во всю ширину
    msa: [
      { strip: M("msa2/01.webp"), ratio: "3200 / 2392" },
      { strip: M("msa2/02.webp"), ratio: "3200 / 1917" },
      { strip: M("msa2/03.webp"), ratio: "3200 / 3071" },
      { strip: M("msa2/04.webp"), ratio: "3200 / 1466" },
      { strip: M("msa2/05.webp"), ratio: "3200 / 1789" },
      { strip: M("msa2/06.webp"), ratio: "3200 / 3111" },
      { strip: M("msa2/07.webp"), ratio: "3200 / 1580" },
      { strip: M("msa2/08.webp"), ratio: "3200 / 2669" },
      { strip: M("msa2/09.webp"), ratio: "3200 / 1580" },
      { strip: M("msa2/10.webp"), ratio: "3200 / 2669" },
      { strip: M("msa2/11.webp"), ratio: "3200 / 2103" },
    ],
    // прежняя версия MSA — project.html?p=msa&v=old
    "msa-old": [
      { pair: [M("msa/02-logo.webp"), M("msa/03-welder.webp")] },
      { wide: M("msa/04-dial.webp") },
      { pair: [M("msa/05-sparks.webp"), M("msa/06-sphere.webp")] },
      { wide: M("msa/07-mask.webp") },
      { pair: [M("msa/08-phone.webp"), M("msa/09-furnace.webp")] },
      { wide: M("msa/10-grinder.webp") },
      { pair: [M("msa/11-type.webp"), M("msa/12-menu.webp")] },
      { wide: M("msa/13-map.webp") },
    ],
    // кадры 3162×1973 / 3200×1973 — своя пропорция, чтобы не обрезать
    web3: [
      { strip: M("web3/02-logo.webp"), ratio: "3162 / 1973" },
      { strip: M("web3/03-phone.webp"), ratio: "3162 / 1973" },
      { strip: M("web3/04-flower.webp"), ratio: "3200 / 1973" },
      { strip: M("web3/05-mark.webp"), ratio: "3200 / 1973" },
      { strip: M("web3/06-glow.webp"), ratio: "3162 / 1973" },
      { strip: M("web3/07-orb.webp"), ratio: "3162 / 1973" },
      { strip: M("web3/08-gradient.webp"), ratio: "3162 / 1973" },
    ],
    // Seligdar и Onesty из Figma (Case): кадры во всю ширину
    seligdar: [
      { strip: M("seligdar2/01.webp"), ratio: "2560 / 2275" },
      { strip: M("seligdar2/02.webp"), ratio: "2560 / 1392" },
      { strip: M("seligdar2/03.webp"), ratio: "2560 / 1712" },
      { strip: M("seligdar2/04.webp"), ratio: "2560 / 1818" },
      { strip: M("seligdar2/05.webp"), ratio: "2560 / 1834" },
      { strip: M("seligdar2/06.webp"), ratio: "2560 / 1816" },
      { strip: M("seligdar2/07.webp"), ratio: "2560 / 1907" },
      { strip: M("seligdar2/08.webp"), ratio: "2560 / 1825" },
      { strip: M("seligdar2/09.webp"), ratio: "2560 / 1477" },
    ],
    "seligdar-old": [
      { wide: M("seligdar/02-innovative.webp") },
      { wide: M("seligdar/03-revenue.webp") },
      { strip: M("seligdar/04-site.webp"), ratio: "3200 / 2292" },
      { wide: M("seligdar/05-map.webp") },
      { wide: M("seligdar/06-au.webp") },
      { wide: M("seligdar/07-holding.webp") },
    ],
    onesty: [
      { strip: M("onesty2/01.webp"), ratio: "2560 / 1893" },
      { strip: M("onesty2/02.webp"), ratio: "2560 / 1672" },
      { strip: M("onesty2/03.webp"), ratio: "2560 / 2449" },
      { strip: M("onesty2/04.webp"), ratio: "2560 / 2374" },
      { strip: M("onesty2/05.webp"), ratio: "2560 / 1879" },
      { strip: M("onesty2/06.webp"), ratio: "2560 / 2353" },
      { strip: M("onesty2/07.webp"), ratio: "2560 / 2337" },
      { strip: M("onesty2/08.webp"), ratio: "2560 / 1981" },
      { strip: M("onesty2/09.webp"), ratio: "2560 / 2067" },
      { strip: M("onesty2/10.webp"), ratio: "2560 / 1228" },
    ],
    "onesty-old": [
      { pair: [M("onesty/02-cards.webp"), M("onesty/03-login.webp")] },
      { strip: M("onesty/04-call.webp"), ratio: "3200 / 3061" },
      { wide: M("onesty/05-verify.webp") },
      { pair: [M("onesty/06-portrait.webp"), M("onesty/07-chats.webp")] },
      { wide: M("onesty/08-screens.webp") },
      { pair: [M("onesty/09-collage.webp"), M("onesty/10-booking.webp")] },
      { wide: M("onesty/11-profile.webp") },
    ],
    // Ghost из Figma (Case): кадры во всю ширину
    // Rostelecom из Figma (Case): страницы отчёта во всю ширину
    rostelecom: [
      { strip: M("rostelecom2/01.webp"), ratio: "2560 / 2722" },
      { strip: M("rostelecom2/02.webp"), ratio: "2560 / 1900" },
      { strip: M("rostelecom2/03.webp"), ratio: "2560 / 2411" },
      { strip: M("rostelecom2/04.webp"), ratio: "2560 / 2652" },
      { strip: M("rostelecom2/05.webp"), ratio: "2560 / 2221" },
      { strip: M("rostelecom2/06.webp"), ratio: "2560 / 2241" },
      { strip: M("rostelecom2/07.webp"), ratio: "2560 / 1900" },
      { strip: M("rostelecom2/08.webp"), ratio: "2560 / 2688" },
      { strip: M("rostelecom2/09.webp"), ratio: "2560 / 2569" },
      { strip: M("rostelecom2/10.webp"), ratio: "2560 / 2201" },
      { strip: M("rostelecom2/11.webp"), ratio: "2560 / 2463" },
      { strip: M("rostelecom2/12.webp"), ratio: "2560 / 2848" },
      { strip: M("rostelecom2/13.webp"), ratio: "2560 / 2590" },
      { strip: M("rostelecom2/14.webp"), ratio: "2560 / 2366" },
      { strip: M("rostelecom2/15.webp"), ratio: "2560 / 1971" },
      { strip: M("rostelecom2/16.webp"), ratio: "2560 / 2484" },
      { strip: M("rostelecom2/17.webp"), ratio: "2560 / 1949" },
      { strip: M("rostelecom2/18.webp"), ratio: "2560 / 2898" },
      { strip: M("rostelecom2/19.webp"), ratio: "2560 / 2196" },
      { strip: M("rostelecom2/20.webp"), ratio: "2560 / 2329" },
      { strip: M("rostelecom2/21.webp"), ratio: "2560 / 1918" },
    ],
    ghost: [
      { strip: M("ghost4/01.webp"), ratio: "3200 / 1800" },
      { strip: M("ghost4/02.webp"), ratio: "3200 / 2014" },
      { strip: M("ghost4/03.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost4/04.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost4/05.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost4/06.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost4/07.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost4/08.webp"), ratio: "3200 / 2006" },
      { strip: M("ghost4/09.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost4/10.webp"), ratio: "3200 / 4013" },
      { strip: M("ghost4/11.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost4/12.webp"), ratio: "3200 / 2006" },
      { strip: M("ghost4/13.webp"), ratio: "3200 / 2006" },
    ],
    // прежняя версия Ghost — project.html?p=ghost&v=old
    "ghost-old": [
      { strip: M("ghost3/01.webp"), ratio: "3200 / 1800" },
      { strip: M("ghost3/02.webp"), ratio: "3200 / 1419" },
      { strip: M("ghost3/03.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost3/04.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost3/05.webp"), ratio: "3200 / 2400" },
      { strip: M("ghost3/06.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost3/07.webp"), ratio: "3200 / 2083" },
      { strip: M("ghost3/08.webp"), ratio: "3200 / 5160" },
      { strip: M("ghost3/09.webp"), ratio: "3200 / 2083" },
    ],
  };

  // Названия — из имён файлов в Figma-выгрузке. tags — ЧЕРНОВЫЕ.
  window.PROJECTS = [
    { title: "Yango Group", slug: "yango",      year: "2026", tags: "Annual Report", image: M("cover/yango.webp"),      portrait: null,
      about: "Annual report for Yango Group, Yandex’s international tech ecosystem working in 30+ countries. The task was to turn macro data, product metrics and ESG reporting into one clear tool for investors and partners.",
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" },
      galleryOnly: true,   // первый кадр — сама галерея, отдельной обложки над ней нет
      edge: true,          // кадры встык и от края до края экрана
      hero: M("yango3/01.webp") },
    { title: "Ghost",      slug: "ghost",      year: "2026", tags: "Web, UI, UX", image: M("cover/ghost.webp"),      portrait: null,
      // текст по содержанию кейса в Figma — проверить формулировки
      about: "Website for Ghost — a market-making desk that helps crypto teams launch tokens.",
      role: "UX/UI Designer",
      studio: { name: "Relate", url: "https://www.relate.studio/" },
      hero: M("ghost4/01.webp"),
      galleryOnly: true,
      edge: true },   // без отступов между кадрами и по бокам   // обложка страницы кейса (в слайдере остаётся image)
    { title: "Rostelecom", slug: "rostelecom", year: "2026", tags: "Annual Report", image: M("cover/rostelecom.webp"), portrait: null,
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" },
      hero: M("rostelecom2/01.webp"),
      galleryOnly: true,
      edge: true },
    { title: "AFI Tower",  slug: "afi-tower",  year: "2026", tags: "Web, UI, UX", image: M("cover/afi-tower.webp"),  portrait: null,
      hero: M("afi/01-hero.webp"),
      galleryOnly: true,
      edge: true,
      role: "UX/UI Designer",
      about: "Touch-panel interface for the AFI Tower sales office, a “city in one building” residential complex. The task was to show every apartment and the benefits of buying in one place. I mapped buyer personas and jobs-to-be-done, designed a dual-screen system where a tablet drives a large video wall, built a design system that scales between both formats and wrote the motion guide for development.", },
    { title: "Mess",       slug: "mess",       year: "2026", tags: "Mobile App, UI, UX", image: M("cover/mess.webp"),  portrait: null,
      hero: M("mess2/01.webp"),
      galleryOnly: true,
      edge: true,
      about: "Mobile crypto wallet for storing assets, sending coins and swapping tokens. The task was to lower the entry barrier of Web3: make the app as simple as a neobank while keeping full DeFi functionality.", },
    { title: "Etalon Group",     slug: "etalon",     year: "2026", tags: "Annual Report", image: M("cover/etalon.webp"),     portrait: null,
      hero: M("etalon2/01.webp"),
      galleryOnly: true,
      edge: true,
      about: "Annual and ESG reports for Etalon Group, one of Russia’s largest federal developers. The task was to combine financial results, operating metrics and strategy while moving away from standard financial-report templates. I designed both reports in the brand style with a modern layout, expressive typography and a non-standard grid.",
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" }, },
    { title: "Web 3.0",      slug: "web3",      year: "2026", tags: "Concepting, Mobile, UI, UX", image: M("cover/web3.webp"),      portrait: null,
      hero: M("web3/01-hero.webp"),
      edge: true },   // без отступов между кадрами и по бокам
    { title: "MSA",        slug: "msa",        year: "2026", tags: "Concepting, Mobile, Web, UI, UX", image: M("cover/msa.webp"),        portrait: null,
      hero: M("msa2/01.webp"),
      galleryOnly: true,
      edge: true,
      about: "Corporate website for MSA, one of Russia’s largest steel suppliers. The task was to replace the outdated “metal depot” site with a B2B platform: a convenient tool for buyers with a huge catalogue that also conveys the image of a modern federal company. I designed the site from scratch.", },
    { title: "Sberbank", slug: "sberbank", year: "2026", tags: "Annual Report", image: M("cover/sberbank.webp"), portrait: null,
      hero: M("sber2/01.webp"),
      galleryOnly: true,
      edge: true,
      about: "Annual report for Sberbank. The task was to package a large volume of financial and non-financial data — ecosystem services, ESG, AI transformation — into a clear document and show the brand’s technology leadership. I replaced heavy tables with clean data art and 3D visualisations, turning the report into an image asset for shareholders and investors.",
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" }, },
    { title: "Seligdar", slug: "seligdar", year: "2026", tags: "Presentation", image: M("cover/seligdar.webp"), portrait: null,
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" },
      hero: M("seligdar2/01.webp"), galleryOnly: true, edge: true,
      about: "Investor Day presentation for Seligdar, a major Russian gold and tin mining holding, at the Moscow Exchange. The task was to turn heavy financials and strategy into clear, modern visuals. The hardest part was the asset map: fitting every deposit, plant and reserve volume onto the slides neatly and legibly.", },
    // tags — ЧЕРНОВЫЕ
    { title: "Onesty", slug: "onesty", year: "2026", tags: "Mobile, UI, UX", image: M("cover/onesty.webp"), portrait: null,
      hero: M("onesty2/01.webp"), galleryOnly: true, edge: true,
      about: "AI-powered social app with two modes, dating and business networking, designed from scratch. The task was to merge both scenarios logically and keep long compatibility tests from tiring users. I split the modes by colour, kept familiar swipe-and-card mechanics, gamified the tests with a visual match score and designed custom motion for transitions and swipes.", },
    { title: "Aeroflot", slug: "aeroflot", year: "2026", tags: "Annual Report", image: M("cover/aeroflot.webp"), portrait: null,
      studio: { name: "Praxis Group", url: "https://praxis-group.ru/" } },
    { title: "L&L Skin",   slug: "ll-skin",    year: "2026", tags: "E-commerce, Web, UI, UX", image: M("cover/ll-skin.webp"),    portrait: null },
  ].map((p) => ({ galleryOld: GALLERIES[`${p.slug}-old`] || null, about: DRAFT_ABOUT, aboutRu: ABOUT_RU[p.slug] || DRAFT_ABOUT_RU, role: "Art Direction", gallery: GALLERIES[p.slug] || null,
    // status: "view" | "nda" | "soon" — как на главной; "soon" кейс не открывает
    status: ["yango", "ghost", "rostelecom", "afi-tower", "mess", "etalon", "sberbank", "msa", "web3", "seligdar", "onesty"].includes(p.slug) ? "view" : "soon", ...p }));

  // уменьшенная копия (работает только для framerusercontent; свои файлы — отдать как есть)
  window.sized = (src, w) => (src && src.includes("framerusercontent") ? `${src}?scale-down-to=${w}` : src);
  window.projectHref = (slug) => `./project.html?p=${encodeURIComponent(slug)}`;

  // ---------- Язык: EN / RU ----------
  // Имя, «All rights reserved» и «Moscow» не переводятся — одинаковые в обоих языках.
  // Тексты интерфейса помечены data-i18n="ключ"; страница может подписаться на смену языка
  // через addEventListener("langchange", …) и перерисовать свои динамические тексты.
  const DICT = {
    en: { name: "Vlad Chesnokov, Product Designer, 2026", nameShort: "Vlad Chesnokov", menu: "Menu", close: "Close",
          moscow: "Moscow", rights: "All rights reserved ©", works: "Works", services: "Services", year: "Year",
          role: "Role", timeline: "Timeline", studio: "Studio", more: "More projects",
          download: "Download PDF ↓", view: "View ↗", nda: "NDA", soon: "Soon", "Art Direction": "Art Direction" },
    ru: { name: "Vlad Chesnokov, Product Designer, 2026", nameShort: "Vlad Chesnokov", menu: "Меню", close: "Закрыть",
          moscow: "Moscow", rights: "All rights reserved ©", works: "Проекты", services: "Услуги", year: "Год",
          role: "Роль", timeline: "Сроки", studio: "Студия", more: "Другие проекты",
          download: "Скачать PDF ↓", view: "Смотреть ↗", nda: "NDA", soon: "Soon", "Art Direction": "Art Direction" },
  };
  // переключателя на сайте нет — всегда русский
  let lang = "ru";
  window.T = (k) => (DICT[lang] && DICT[lang][k]) || DICT.en[k] || k;
  window.getLang = () => lang;
  // Типографика: короткие слова (предлоги, союзы, «в», «и», «с»…) и числа не остаются в конце строки,
  // тире не начинает строку — неразрывный пробел после них / перед тире.
  const typo = (s) => s
    .replace(/(?<=^|[\s(«])([а-яёА-ЯЁa-zA-Z]{1,3}|\d[\d+%]*) +/g, "$1\u00A0") // lookbehind — цепочки «как в», «ИИ с»
    .replace(/ +—/g, "\u00A0—");
  window.typo = typo;
  window.aboutOf = (p) => typo(lang === "ru" ? p.aboutRu : p.about);
  const applyLang = () => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = T(el.dataset.i18n); });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    tick(true);
  };
  window.setLang = (l) => {
    if (l === lang) return;
    lang = l === "ru" ? "ru" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
    applyLang();
    window.dispatchEvent(new Event("langchange"));
  };

  // Часы: Москва, обновление на начале каждой минуты
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Moscow", hour: "2-digit", minute: "2-digit", hour12: false });
  let tickTimer = 0;
  function tick(once) {
    const now = new Date();
    document.querySelectorAll("[data-clock]").forEach((el) => {
      el.textContent = `${T("moscow")} ${fmt.format(now)}`;
      el.dateTime = now.toISOString();
    });
    if (once === true) return;
    clearTimeout(tickTimer);
    tickTimer = setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
  }
  const init = () => {
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    applyLang(); tick();
    // В опубликованной версии (claude.ai) обычная ссылка download не срабатывает —
    // там CV сохраняется через downloads; локально остаётся простая ссылка.
    window.claude?.use?.("downloads").then((dl) => {
      if (!dl) return;
      document.querySelectorAll("a[download]").forEach((a) => a.addEventListener("click", async (e) => {
        e.preventDefault();
        try { await dl.save({ filename: a.getAttribute("download"), data: await (await fetch(a.href)).blob() }); } catch {}
      }));
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
