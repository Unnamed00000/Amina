const LANGS = [
  ["en", "English", "🇬🇧"],
  ["da", "Dansk", "🇩🇰"],
  ["ru", "Русский", "🇷🇺"],
  ["ka", "ქართული", "🇬🇪"],
  ["de", "Deutsch", "🇩🇪"],
];

const TEXT = {
  en: {
    pick: "Pick a challenge",
    what1: "What do you",
    what2: "want to",
    learn: "learn?",
    subtitle: "Choose a category and start a quick ten-question game.",
    playNow: "Play now",
    back: "Back",
    next: "Next",
    again: "Play again",
    home: "Home",
    resultTitle: "Great job!",
    resultText: "You answered {s} out of {t} correctly.",
    soundOn: "Sound on",
    soundOff: "Sound off",
    chooseLang: "Choose language",
    math: "Mathematics",
    mathDesc: "Numbers, operations and quick thinking",
    geo: "Geography",
    geoDesc: "Countries, capitals and flags",
    social: "Social Media",
    socialDesc: "Platforms, logos and digital culture",
    chooseTest: "Choose a test",
    plus: "Plus",
    minus: "Minus",
    multiply: "Multiplication",
    divide: "Division",
    chooseLevel: "Choose difficulty",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    impossible: "Impossible",
    startGame: "Start game",
    solve: "Solve",
    task: "the task",
    question: "Question",
    score: "Score",
    chooseAnswer: "Choose answer",
    paused: "Paused",
    finished: "Finished!",
  },
  da: {
    pick: "Vælg en udfordring",
    what1: "Hvad vil du",
    what2: "gerne",
    learn: "lære?",
    subtitle: "Vælg en kategori og start et hurtigt spil med ti spørgsmål.",
    playNow: "Spil nu",
    back: "Tilbage",
    next: "Næste",
    again: "Spil igen",
    home: "Hjem",
    resultTitle: "Godt klaret!",
    resultText: "Du svarede rigtigt på {s} ud af {t}.",
    soundOn: "Lyd til",
    soundOff: "Lyd fra",
    chooseLang: "Vælg sprog",
    math: "Matematik",
    mathDesc: "Tal, regnestykker og hurtig tænkning",
    geo: "Geografi",
    geoDesc: "Lande, hovedstæder og flag",
    social: "Sociale medier",
    socialDesc: "Platforme, logoer og digital kultur",
    chooseTest: "Vælg prøve",
    plus: "Plus",
    minus: "Minus",
    multiply: "Gange",
    divide: "Division",
    chooseLevel: "Vælg sværhedsgrad",
    easy: "Let",
    medium: "Mellem",
    hard: "Svær",
    impossible: "Umulig",
    startGame: "Start spil",
    solve: "Løs",
    task: "opgaven",
    question: "Spørgsmål",
    score: "Score",
    chooseAnswer: "Vælg svar",
    paused: "Pause",
    finished: "Færdig!",
  },
  ru: {
    pick: "Выбери испытание",
    what1: "Что ты",
    what2: "хочешь",
    learn: "изучать?",
    subtitle: "Выбери категорию и начни быструю игру из десяти вопросов.",
    playNow: "Играть",
    back: "Назад",
    next: "Дальше",
    again: "Играть снова",
    home: "Домой",
    resultTitle: "Отлично!",
    resultText: "Ты ответил правильно на {s} из {t}.",
    soundOn: "Звук включён",
    soundOff: "Звук выключен",
    chooseLang: "Выбрать язык",
    math: "Математика",
    mathDesc: "Числа, действия и быстрое мышление",
    geo: "География",
    geoDesc: "Страны, столицы и флаги",
    social: "Соцсети",
    socialDesc: "Платформы, логотипы и цифровая культура",
    chooseTest: "Выбери испытание",
    plus: "Плюсы",
    minus: "Минусы",
    multiply: "Умножение",
    divide: "Деление",
    chooseLevel: "Выбери уровень",
    easy: "Легко",
    medium: "Среднее",
    hard: "Сложно",
    impossible: "Невозможно",
    startGame: "Начать игру",
    solve: "Реши",
    task: "задачу",
    question: "Вопрос",
    score: "Счёт",
    chooseAnswer: "Выбери ответ",
    paused: "Пауза",
    finished: "Готово!",
  },
  ka: {
    pick: "აირჩიე გამოწვევა",
    what1: "რის",
    what2: "სწავლა",
    learn: "გინდა?",
    subtitle: "აირჩიე კატეგორია და დაიწყე სწრაფი თამაში ათი კითხვით.",
    playNow: "თამაში",
    back: "უკან",
    next: "შემდეგი",
    again: "თავიდან თამაში",
    home: "მთავარი",
    resultTitle: "ყოჩაღ!",
    resultText: "შენ სწორად უპასუხე {s}-ს {t}-დან.",
    soundOn: "ხმა ჩართულია",
    soundOff: "ხმა გამორთულია",
    chooseLang: "ენის არჩევა",
    math: "მათემატიკა",
    mathDesc: "რიცხვები, მოქმედებები და სწრაფი აზროვნება",
    geo: "გეოგრაფია",
    geoDesc: "ქვეყნები, დედაქალაქები და დროშები",
    social: "სოციალური მედია",
    socialDesc: "პლატფორმები, ლოგოები და ციფრული კულტურა",
    chooseTest: "აირჩიე დავალება",
    plus: "მიმატება",
    minus: "გამოკლება",
    multiply: "გამრავლება",
    divide: "გაყოფა",
    chooseLevel: "აირჩიე დონე",
    easy: "მარტივი",
    medium: "საშუალო",
    hard: "რთული",
    impossible: "შეუძლებელი",
    startGame: "თამაშის დაწყება",
    solve: "ამოხსენი",
    task: "ამოცანა",
    question: "კითხვა",
    score: "ქულა",
    chooseAnswer: "აირჩიე პასუხი",
    paused: "პაუზა",
    finished: "დასრულდა!",
  },
  de: {
    pick: "Wähle eine Aufgabe",
    what1: "Was möchtest",
    what2: "du",
    learn: "lernen?",
    subtitle: "Wähle eine Kategorie und starte ein schnelles Spiel mit zehn Fragen.",
    playNow: "Jetzt spielen",
    back: "Zurück",
    next: "Weiter",
    again: "Nochmal spielen",
    home: "Home",
    resultTitle: "Sehr gut!",
    resultText: "Du hast {s} von {t} richtig beantwortet.",
    soundOn: "Ton an",
    soundOff: "Ton aus",
    chooseLang: "Sprache wählen",
    math: "Mathematik",
    mathDesc: "Zahlen, Rechnen und schnelles Denken",
    geo: "Geografie",
    geoDesc: "Länder, Hauptstädte und Flaggen",
    social: "Soziale Medien",
    socialDesc: "Plattformen, Logos und digitale Kultur",
    chooseTest: "Wähle eine Übung",
    plus: "Plus",
    minus: "Minus",
    multiply: "Malnehmen",
    divide: "Teilen",
    chooseLevel: "Wähle Level",
    easy: "Leicht",
    medium: "Mittel",
    hard: "Schwer",
    impossible: "Unmöglich",
    startGame: "Spiel starten",
    solve: "Löse",
    task: "die Aufgabe",
    question: "Frage",
    score: "Punkte",
    chooseAnswer: "Antwort wählen",
    paused: "Pause",
    finished: "Fertig!",
  },
};

const app = document.querySelector("#app");
const state = {
  lang: localStorage.aminaLang || "en",
  sound: localStorage.aminaSound !== "off",
  screen: "home",
  cat: null,
  operation: "plus",
  level: "easy",
  q: 0,
  score: 0,
  selected: null,
  questions: [],
  paused: false,
  timeLeft: 5,
  timer: null,
};

const t = (key) => (TEXT[state.lang] && TEXT[state.lang][key]) || TEXT.en[key] || key;

function sound(kind = "click") {
  if (!state.sound) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const map = { click: [420, 0.06, "sine"], correct: [760, 0.16, "triangle"], wrong: [160, 0.18, "sawtooth"] };
  const cfg = map[kind] || map.click;
  osc.type = cfg[2];
  osc.frequency.value = cfg[0];
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + cfg[1]);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + cfg[1] + 0.03);
  setTimeout(() => ctx.close(), 280);
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function addFlowStyles() {
  if (document.querySelector("#flowStyles")) return;
  const style = document.createElement("style");
  style.id = "flowStyles";
  style.textContent = `
    .game-page{position:relative;z-index:1;width:min(1260px,calc(100% - 56px));margin:0 auto;padding:34px 0 70px;min-height:100vh}.stage-top{height:72px;display:flex;align-items:center;justify-content:center;position:relative}.stage-logo{font-family:var(--fun-font);font-size:clamp(34px,3.5vw,52px);font-weight:1000;color:white;text-shadow:0 4px 0 rgba(1,28,70,.72),0 10px 22px rgba(0,0,0,.28)}.stage-logo::after{content:".";color:#ffd529}.stage-back,.round-control{position:absolute;top:0;width:72px;height:72px;border:0;border-radius:50%;background:#fff;color:#0b61c9;box-shadow:0 7px 0 rgba(5,75,160,.4),0 16px 24px rgba(0,0,0,.15);font-size:34px;font-weight:1000;display:grid;place-items:center;cursor:pointer}.stage-back{left:0}.round-control{position:static}.stage-actions{position:absolute;right:0;top:0;display:flex;gap:14px}.stage-icon{width:150px;height:150px;border-radius:50%;margin:82px auto 22px;background:linear-gradient(145deg,#fff065,#ffd325 58%,#efb400);box-shadow:0 13px 0 #d19a00,0 24px 34px rgba(0,0,0,.18),inset 0 0 0 8px rgba(255,255,255,.45);display:grid;place-items:center;color:#0753b1;font-size:78px}.stage-label{font-family:var(--home-font);text-align:center;color:#ffdc24;font-size:clamp(18px,1.7vw,26px);font-weight:1000;text-transform:uppercase;text-shadow:0 3px 0 #00408f,0 9px 18px rgba(0,0,0,.32)}.stage-title{font-family:var(--fun-font);text-align:center;margin:10px 0 18px;color:#fff;font-size:clamp(58px,7.3vw,106px);line-height:.92;text-transform:uppercase;text-shadow:0 6px 0 rgba(1,28,70,.78),0 15px 28px rgba(0,0,0,.25)}.stage-sub{font-family:var(--home-font);text-align:center;color:#fff;font-size:clamp(20px,2vw,32px);font-weight:900;text-shadow:0 3px 0 #00142f,0 9px 18px rgba(0,0,0,.55);margin-bottom:54px}.choice-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;align-items:stretch}.stage-card{min-height:210px;border:0;border-radius:24px;padding:34px 36px;text-align:left;background:linear-gradient(145deg,#fff,#eaf4ff);color:#10213f;box-shadow:0 11px 0 rgba(4,70,150,.52),0 18px 28px rgba(0,0,0,.14);position:relative;cursor:pointer;font-family:var(--home-font);transition:.18s transform}.stage-card:hover{transform:translateY(-7px)}.stage-card.active{background:linear-gradient(145deg,#22d975,#13b85d);color:#fff;box-shadow:0 11px 0 #059c47,0 18px 28px rgba(0,0,0,.18),inset 0 0 0 5px rgba(255,255,255,.28)}.stage-card .num{position:absolute;right:28px;top:26px;font-size:21px;font-weight:1000;color:rgba(12,24,45,.42)}.stage-card.active .num{color:#fff}.stage-card h2{margin:42px 0 20px;font-size:clamp(30px,3vw,46px);line-height:1;text-transform:uppercase;color:inherit;text-shadow:0 3px 0 rgba(0,0,0,.08)}.stage-card p{margin:0;font-size:clamp(20px,1.8vw,28px);font-weight:900;color:#69758d}.stage-card.active p{color:white;text-shadow:0 2px 0 rgba(0,0,0,.25)}.start-row{text-align:center;margin-top:38px}.start-btn{border:0;border-radius:20px;background:linear-gradient(#ffe767,#ffd222);color:#5a4300;padding:25px 74px;font-family:var(--home-font);font-size:30px;font-weight:1000;text-transform:uppercase;box-shadow:0 10px 0 #d49b00;cursor:pointer}.quiz-stage{position:relative;z-index:1;width:min(1180px,calc(100% - 46px));margin:0 auto;padding:22px 0 40px;min-height:100vh}.quiz-title{font-family:var(--fun-font);text-align:center;font-size:clamp(54px,6.5vw,96px);line-height:.9;margin:0;color:#fff;text-transform:uppercase;text-shadow:0 6px 0 rgba(1,28,70,.72),0 16px 30px rgba(0,0,0,.25)}.quiz-title span{color:#ffd529;text-shadow:0 6px 0 rgba(100,70,0,.72),0 16px 30px rgba(0,0,0,.25)}.question-badge{position:absolute;left:0;top:28px;width:90px;height:90px;border-radius:50%;background:#f44878;color:white;display:grid;place-items:center;font-family:var(--home-font);font-size:40px;box-shadow:0 9px 0 #c91b52,inset 0 0 0 7px rgba(255,255,255,.22)}.quiz-pill{margin:18px auto 0;width:max-content;min-width:210px;background:#ffd529;color:#073d91;border-radius:12px;padding:14px 32px;text-align:center;font-family:var(--home-font);font-weight:1000;text-transform:uppercase;box-shadow:0 8px 0 rgba(0,65,145,.45)}.quiz-meta-row{display:flex;justify-content:space-between;margin-top:140px;color:#bde1ff;font-family:var(--home-font);font-size:22px;text-transform:uppercase;text-shadow:0 2px 0 rgba(0,0,0,.35)}.math-problem{text-align:center;margin:90px 0 70px;font-family:var(--fun-font);font-size:clamp(76px,10vw,150px);color:#fff;text-shadow:0 10px 0 rgba(1,28,70,.65),0 22px 34px rgba(0,0,0,.22)}.answer-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;max-width:940px;margin:0 auto}.answer-choice{border:0;border-radius:24px;background:linear-gradient(#fff,#eef6ff);min-height:100px;padding:0 30px;font-family:var(--home-font);font-size:34px;font-weight:1000;color:#10213f;box-shadow:0 10px 0 rgba(4,70,150,.48);display:flex;align-items:center;gap:28px;cursor:pointer}.answer-choice .letter{width:66px;height:66px;border-radius:50%;background:#f44878;color:white;display:grid;place-items:center;box-shadow:0 7px 0 #c91b52}.answer-choice.good{background:linear-gradient(#2add82,#13b85d);color:#fff}.answer-choice.bad{background:linear-gradient(#ff6b83,#f22f62);color:#fff}.choose-answer{text-align:center;margin:34px 0 12px;color:#bde1ff;font-family:var(--home-font);font-size:30px;text-transform:uppercase;text-shadow:0 3px 0 rgba(0,0,0,.35)}.quiz-controls{display:flex;justify-content:center;gap:20px}.yellow-control{border:0;border-radius:16px;background:#ffd529;color:#074796;width:176px;height:72px;font-size:42px;font-weight:1000;box-shadow:0 8px 0 #d49b00;cursor:pointer}.timer-line{max-width:860px;height:27px;border-radius:20px;background:#fff;margin:28px auto 0;padding:5px;box-shadow:0 6px 0 rgba(0,64,145,.42);display:flex;align-items:center}.timer-fill{height:100%;width:100%;border-radius:20px;background:#24c46c;transition:width .12s linear}.timer-seconds{font-family:var(--home-font);font-size:24px;color:#fff;margin-left:16px;text-shadow:0 2px 0 rgba(0,0,0,.4)}.side-levels{position:absolute;left:0;top:48%;transform:translateY(-10%);display:grid;gap:32px;color:#bde1ff;font-family:var(--home-font);font-size:22px;text-transform:uppercase}.side-levels span.active{color:#21ff83;border:2px solid white;border-radius:0 40px 40px 0;padding:20px 36px 20px 26px;background:rgba(0,125,100,.65)}@media(max-width:920px){.choice-grid{grid-template-columns:1fr 1fr}.stage-icon{margin-top:45px}.quiz-meta-row{margin-top:70px}.side-levels{display:none}.answer-grid{grid-template-columns:1fr}.stage-card{min-height:170px}}@media(max-width:620px){.game-page,.quiz-stage{width:min(100% - 26px,1180px)}.stage-back,.round-control{width:54px;height:54px;font-size:28px}.stage-logo{font-size:30px}.stage-icon{width:112px;height:112px;font-size:56px;margin-top:36px}.stage-title{font-size:46px}.choice-grid{grid-template-columns:1fr}.stage-card h2{margin-top:18px}.start-btn{width:100%;font-size:22px;padding:22px}.quiz-meta-row{margin-top:45px;font-size:16px}.math-problem{margin:54px 0 36px}.answer-choice{font-size:27px}.question-badge{width:62px;height:62px;font-size:30px}.quiz-title{font-size:46px}}
  `;
  document.head.appendChild(style);
}

const categories = { math: ["math", "mathDesc", "🧮", "math"], geo: ["geo", "geoDesc", "🌍", "geo"], social: ["social", "socialDesc", "💬", "social"] };
const operations = [["plus", "plus", "1+1, 2+2"], ["minus", "minus", "2-1, 4-2"], ["multiply", "multiply", "2×2, 3×3"], ["divide", "divide", "4÷2, 6÷3"]];
const levels = ["easy", "medium", "hard", "impossible"];

function shell(content, game = false) {
  const lang = LANGS.find((x) => x[0] === state.lang) || LANGS[0];
  if (game) return `<main class="app-shell"><div class="bg-ring one"></div><div class="bg-ring two"></div>${content}</main>`;
  return `<main class="app-shell"><div class="bg-ring one"></div><div class="bg-ring two"></div><section class="page"><header class="topbar"><div class="logo">Amina-App</div><div class="top-actions"><button class="circle-btn" id="soundBtn" aria-label="${state.sound ? t("soundOn") : t("soundOff")}">${state.sound ? "🔊" : "🔇"}</button><button class="circle-btn" id="langBtn" aria-label="${t("chooseLang")}"><span class="flag">${lang[2]}</span></button><div class="language-menu" id="languageMenu">${LANGS.map((l) => `<button class="lang-option ${l[0] === state.lang ? "active" : ""}" data-lang="${l[0]}"><span>${l[2]}</span><span>${l[1]}</span></button>`).join("")}</div></div></header>${content}</section></main>`;
}

function bindTop() {
  const soundBtn = document.querySelector("#soundBtn");
  if (soundBtn) soundBtn.onclick = () => { state.sound = !state.sound; localStorage.aminaSound = state.sound ? "on" : "off"; render(); };
  const langBtn = document.querySelector("#langBtn");
  const menu = document.querySelector("#languageMenu");
  if (langBtn && menu) {
    langBtn.onclick = (e) => { e.stopPropagation(); sound(); menu.classList.toggle("open"); };
    document.querySelectorAll("[data-lang]").forEach((b) => { b.onclick = () => { state.lang = b.dataset.lang; localStorage.aminaLang = state.lang; document.documentElement.lang = state.lang; sound(); render(); }; });
    document.addEventListener("click", () => menu.classList.remove("open"), { once: true });
  }
}

function home() {
  stopTimer();
  const cards = ["math", "geo", "social"].map((key, index) => {
    const item = categories[key];
    return `<button class="category-card ${key === "math" ? "math" : key === "geo" ? "geo" : "social"}" data-cat="${key}"><span class="card-blob"></span><span class="card-number">${String(index + 1).padStart(2, "0")}</span><span class="icon-box">${item[2]}</span><h2>${t(item[0])}</h2><p>${t(item[1])}</p><span class="play-now">${t("playNow")}</span></button>`;
  }).join("");
  app.innerHTML = shell(`<div class="hero"><div class="pill">✦ ${t("pick")}</div><h1 class="title">${t("what1")}<br>${t("what2")}<br><span class="accent">${t("learn")}</span></h1><p class="subtitle">${t("subtitle")}</p><div class="cards">${cards}</div></div>`);
  bindTop();
  document.querySelectorAll("[data-cat]").forEach((btn) => { btn.onclick = () => { sound(); state.cat = btn.dataset.cat; if (state.cat === "math") { state.screen = "mathOps"; render(); } else { startQuiz("plus", "easy"); } }; });
}

function gameHeader(extraActions = "") { return `<div class="stage-top"><button class="stage-back" id="backBtn">←</button><div class="stage-logo">Amina-App</div>${extraActions}</div>`; }

function mathOperations() {
  stopTimer();
  const cards = operations.map((op, index) => `<button class="stage-card ${index === 0 ? "active" : ""}" data-op="${op[0]}"><span class="num">${String(index + 1).padStart(2, "0")}</span><h2>${t(op[1])}</h2><p>${op[2]}</p></button>`).join("");
  app.innerHTML = shell(`<section class="game-page">${gameHeader()}<div class="stage-icon">🧮</div><div class="stage-label">${t("chooseTest")}</div><h1 class="stage-title">${t("math")}</h1><div class="stage-sub">${t("mathDesc")}</div><div class="choice-grid">${cards}</div></section>`, true);
  bindGameBack("home");
  document.querySelectorAll("[data-op]").forEach((btn) => { btn.onclick = () => { sound(); state.operation = btn.dataset.op; state.screen = "level"; render(); }; });
}

function levelScreen() {
  stopTimer();
  const cards = levels.map((level, index) => `<button class="stage-card ${index === 0 ? "active" : ""}" data-level="${level}"><span class="num">${String(index + 1).padStart(2, "0")}</span><h2>${t(level)}</h2></button>`).join("");
  app.innerHTML = shell(`<section class="game-page">${gameHeader()}<div class="stage-icon">🧮</div><div class="stage-label">${t("chooseLevel")}</div><h1 class="stage-title">${t("math")}</h1><div class="choice-grid">${cards}</div><div class="start-row"><button class="start-btn" id="startBtn">${t("startGame")} →</button></div></section>`, true);
  bindGameBack("mathOps");
  document.querySelectorAll("[data-level]").forEach((btn) => { btn.onclick = () => { sound(); state.level = btn.dataset.level; document.querySelectorAll("[data-level]").forEach((b) => b.classList.remove("active")); btn.classList.add("active"); }; });
  document.querySelector("#startBtn").onclick = () => { sound(); startQuiz(state.operation, state.level); };
}

function bindGameBack(target) { const back = document.querySelector("#backBtn"); if (back) back.onclick = () => { sound(); state.screen = target; render(); }; }

function makeQuestion(op, level, index) {
  const ranges = { easy: [1, 10], medium: [5, 30], hard: [12, 70], impossible: [25, 150] };
  const [min, max] = ranges[level] || ranges.easy;
  let a = min + ((index * 7 + 9) % (max - min + 1));
  let b = min + ((index * 5 + 2) % Math.max(2, Math.floor((max - min) / 2)));
  let answer, text;
  if (op === "minus") { if (b > a) [a, b] = [b, a]; answer = a - b; text = `${a} - ${b}`; }
  else if (op === "multiply") { a = 2 + ((index * 3 + (level === "easy" ? 1 : 4)) % (level === "easy" ? 9 : level === "medium" ? 12 : 16)); b = 2 + ((index * 5 + 2) % (level === "easy" ? 7 : level === "medium" ? 10 : 15)); answer = a * b; text = `${a} × ${b}`; }
  else if (op === "divide") { b = 2 + ((index * 3 + 1) % (level === "easy" ? 6 : level === "medium" ? 9 : 12)); answer = 2 + ((index * 4 + 3) % (level === "easy" ? 9 : level === "medium" ? 14 : 20)); a = answer * b; text = `${a} ÷ ${b}`; }
  else { answer = a + b; text = `${a} + ${b}`; }
  const wrongs = [answer - 1, answer + 1, answer + 3, answer - 2].filter((x) => x >= 0 && x !== answer);
  const answers = [answer, ...wrongs].slice(0, 4).sort((x, y) => ((x + index) % 3) - ((y + index) % 3));
  return { text, answer, answers };
}

function startQuiz(op, level) {
  state.operation = op; state.level = level; state.q = 0; state.score = 0; state.selected = null; state.paused = false; state.timeLeft = 5;
  state.questions = Array.from({ length: 10 }, (_, i) => makeQuestion(op, level, i));
  state.screen = "quiz";
  render();
}

function quizScreen() {
  stopTimer();
  const q = state.questions[state.q];
  const actions = `<div class="stage-actions"><button class="round-control" id="soundRound">${state.sound ? "🔊" : "🔇"}</button><button class="round-control" id="homeRound">⌂</button></div>`;
  const answers = q.answers.map((ans, index) => { const selected = state.selected === ans; const cls = state.selected === null ? "" : ans === q.answer ? "good" : selected ? "bad" : ""; return `<button class="answer-choice ${cls}" data-answer="${ans}" ${state.selected !== null ? "disabled" : ""}><span class="letter">${"ABCD"[index]}</span><span>${ans}</span></button>`; }).join("");
  const side = levels.map((level) => `<span class="${level === state.level ? "active" : ""}">${t(level)}</span>`).join("");
  app.innerHTML = shell(`<section class="quiz-stage">${gameHeader(actions)}<div class="question-badge">${state.q + 1}</div><h1 class="quiz-title">${t("solve")} <span>${t("task")}</span></h1><div class="quiz-pill">${t("math")}</div><div class="quiz-meta-row"><span>${t("question")} ${state.q + 1} / ${state.questions.length}</span><span>${t("score")} ${state.score}</span></div><div class="side-levels">${side}</div><div class="math-problem">${q.text}</div><div class="answer-grid">${answers}</div><div class="choose-answer">${state.selected === null ? t("chooseAnswer") : t("next")}</div><div class="quiz-controls"><button class="yellow-control" id="pauseBtn">${state.paused ? "▶" : "Ⅱ"}</button><button class="yellow-control" id="nextBtn">▶</button></div><div class="timer-line"><div class="timer-fill" id="timerFill"></div><span class="timer-seconds" id="timerSeconds">5s</span></div></section>`, true);
  bindGameBack("level");
  document.querySelector("#soundRound").onclick = () => { state.sound = !state.sound; localStorage.aminaSound = state.sound ? "on" : "off"; render(); };
  document.querySelector("#homeRound").onclick = () => { sound(); state.screen = "home"; render(); };
  document.querySelectorAll("[data-answer]").forEach((btn) => { btn.onclick = () => chooseAnswer(Number(btn.dataset.answer)); });
  document.querySelector("#pauseBtn").onclick = () => { state.paused = !state.paused; sound(); document.querySelector("#pauseBtn").textContent = state.paused ? "▶" : "Ⅱ"; };
  document.querySelector("#nextBtn").onclick = () => nextQuestion();
  startTimer();
}

function startTimer() {
  state.timeLeft = 5;
  const fill = document.querySelector("#timerFill");
  const seconds = document.querySelector("#timerSeconds");
  const started = Date.now();
  state.timer = setInterval(() => {
    if (state.paused || state.selected !== null) return;
    const elapsed = (Date.now() - started) / 1000;
    state.timeLeft = Math.max(0, 5 - elapsed);
    if (fill) fill.style.width = `${(state.timeLeft / 5) * 100}%`;
    if (seconds) seconds.textContent = `${Math.ceil(state.timeLeft)}s`;
    if (state.timeLeft <= 0) { stopTimer(); state.selected = "__timeout__"; sound("wrong"); quizScreen(); }
  }, 120);
}

function chooseAnswer(answer) {
  if (state.selected !== null) return;
  state.selected = answer;
  if (answer === state.questions[state.q].answer) { state.score++; sound("correct"); } else sound("wrong");
  quizScreen();
}

function nextQuestion() {
  sound();
  if (state.q + 1 >= state.questions.length) { stopTimer(); state.screen = "result"; render(); }
  else { state.q++; state.selected = null; state.paused = false; render(); }
}

function resultScreen() {
  stopTimer();
  app.innerHTML = shell(`<div class="quiz-wrap"><section class="result-card"><h1 class="result-title">${t("finished")}</h1><div class="result-score">${t("resultText").replace("{s}", state.score).replace("{t}", state.questions.length || 10)}</div><div class="result-actions"><button class="main-btn" id="again">${t("again")}</button><button class="ghost-btn" id="homeBtn">${t("home")}</button></div></section></div>`);
  bindTop();
  document.querySelector("#again").onclick = () => startQuiz(state.operation, state.level);
  document.querySelector("#homeBtn").onclick = () => { sound(); state.screen = "home"; render(); };
}

function render() {
  addFlowStyles();
  document.documentElement.lang = state.lang;
  if (state.screen === "mathOps") mathOperations();
  else if (state.screen === "level") levelScreen();
  else if (state.screen === "quiz") quizScreen();
  else if (state.screen === "result") resultScreen();
  else home();
}

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./offline.js").catch(() => {}));
render();
