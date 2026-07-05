function applyAminaPatch() {
  let style = document.querySelector('#aminaPatchStyles');
  if (!style) {
    style = document.createElement('style');
    style.id = 'aminaPatchStyles';
    document.head.appendChild(style);
  }

  style.textContent = `
    .logo::before,
    .app-shell .stage-logo {
      color: #ff4fc3 !important;
      font-size: clamp(44px, 5vw, 68px) !important;
      font-family: var(--fun-font) !important;
      letter-spacing: 1px !important;
      text-shadow: 0 4px 0 rgba(110,0,90,.7), 0 10px 24px rgba(0,0,0,.28) !important;
    }

    .app-shell .stage-logo::after { content: '' !important; }

    .hero .pill,
    .pill {
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: .3px !important;
      text-shadow: none !important;
    }

    .top-actions,
    .stage-actions {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
      display: flex !important;
      gap: 14px !important;
      align-items: center !important;
      z-index: 20 !important;
    }

    .circle-btn,
    .round-control {
      width: 72px !important;
      height: 72px !important;
      border: 0 !important;
      border-radius: 50% !important;
      background: #ffffff !important;
      color: #0b61c9 !important;
      box-shadow: 0 7px 0 rgba(5,75,160,.38), 0 16px 24px rgba(0,0,0,.15) !important;
      font-size: 0 !important;
      font-weight: 1000 !important;
      display: grid !important;
      place-items: center !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    .circle-btn svg,
    .round-control svg {
      width: 34px !important;
      height: 34px !important;
      stroke: #0b61c9 !important;
      stroke-width: 3.2 !important;
      fill: none !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }

    .stage-card[data-op] {
      background: linear-gradient(145deg,#26db78,#12b85d) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #069c48, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.28) !important;
    }

    .stage-card[data-op] .num,
    .stage-card[data-op] p,
    .stage-card[data-op] h2 { color: #ffffff !important; }

    .stage-card[data-level="easy"] {
      background: linear-gradient(145deg,#28dc79,#12ba5f) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #069c48, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.25) !important;
    }

    .stage-card[data-level="medium"] {
      background: linear-gradient(145deg,#42d8ff,#1688e8) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #0761b7, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.25) !important;
    }

    .stage-card[data-level="hard"] {
      background: linear-gradient(145deg,#ff9a38,#ff6b1f) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #c94800, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.24) !important;
    }

    .stage-card[data-level="impossible"] {
      background: linear-gradient(145deg,#ff4776,#e51652) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #b6003a, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.22) !important;
    }

    .stage-card[data-level] .num,
    .stage-card[data-level] h2 { color: inherit !important; }

    .stage-card[data-level="easy"] .num,
    .stage-card[data-level="medium"] .num,
    .stage-card[data-level="hard"] .num,
    .stage-card[data-level="impossible"] .num { color: rgba(255,255,255,.92) !important; }

    .start-row,
    #startBtn { display: none !important; }

    @media (max-width: 620px) {
      html, body {
        width: 100%;
        height: 100%;
        overflow: hidden !important;
      }

      body {
        position: fixed;
        inset: 0;
        overscroll-behavior: none;
      }

      .app-shell {
        min-height: 100dvh !important;
        height: 100dvh !important;
        overflow: hidden !important;
      }

      .page,
      .game-page,
      .quiz-stage {
        width: calc(100% - 18px) !important;
        height: 100dvh !important;
        min-height: 100dvh !important;
        overflow: hidden !important;
        padding: 10px 0 10px !important;
        box-sizing: border-box !important;
      }

      .topbar,
      .stage-top {
        height: 48px !important;
        min-height: 48px !important;
        margin-bottom: 4px !important;
      }

      .logo::before,
      .app-shell .stage-logo { font-size: 30px !important; }

      .circle-btn,
      .round-control {
        width: 44px !important;
        height: 44px !important;
        box-shadow: 0 4px 0 rgba(5,75,160,.38), 0 10px 16px rgba(0,0,0,.14) !important;
      }

      .circle-btn svg,
      .round-control svg {
        width: 23px !important;
        height: 23px !important;
      }

      .top-actions,
      .stage-actions { gap: 8px !important; }

      .stage-back {
        width: 44px !important;
        height: 44px !important;
        font-size: 24px !important;
        box-shadow: 0 4px 0 rgba(5,75,160,.38), 0 10px 16px rgba(0,0,0,.14) !important;
      }

      .hero { padding-top: 4px !important; }

      .hero .pill,
      .pill {
        font-size: 11px !important;
        padding: 7px 11px !important;
      }

      .title {
        font-size: clamp(42px, 12vw, 64px) !important;
        line-height: .9 !important;
        margin: 10px 0 8px !important;
      }

      .hero .subtitle {
        font-size: 15px !important;
        line-height: 1.25 !important;
        margin-top: 8px !important;
        margin-bottom: 10px !important;
      }

      .cards {
        grid-template-columns: 1fr !important;
        gap: 10px !important;
        margin-top: 10px !important;
      }

      .category-card {
        min-height: 104px !important;
        padding: 12px 16px !important;
        border-radius: 20px !important;
      }

      .category-card h2 {
        font-size: 26px !important;
        margin: 6px 0 4px !important;
      }

      .category-card p {
        font-size: 15px !important;
        margin: 0 !important;
      }

      .icon-box {
        width: 42px !important;
        height: 42px !important;
        font-size: 24px !important;
      }

      .play-now { display: none !important; }

      .stage-icon {
        width: 78px !important;
        height: 78px !important;
        font-size: 40px !important;
        margin: 8px auto 8px !important;
        box-shadow: 0 7px 0 #d19a00, 0 14px 18px rgba(0,0,0,.16), inset 0 0 0 5px rgba(255,255,255,.45) !important;
      }

      .stage-label { font-size: 13px !important; }

      .stage-title {
        font-size: clamp(34px, 11vw, 52px) !important;
        margin: 4px 0 6px !important;
      }

      .stage-sub {
        font-size: 15px !important;
        margin-bottom: 12px !important;
      }

      .choice-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 10px !important;
      }

      .stage-card {
        min-height: 118px !important;
        padding: 16px 14px !important;
        border-radius: 18px !important;
        box-shadow: 0 7px 0 rgba(4,70,150,.5), 0 12px 18px rgba(0,0,0,.14) !important;
      }

      .stage-card .num {
        top: 12px !important;
        right: 14px !important;
        font-size: 15px !important;
      }

      .stage-card h2 {
        margin: 30px 0 8px !important;
        font-size: 24px !important;
      }

      .stage-card p { font-size: 15px !important; }

      .quiz-title {
        font-size: 38px !important;
        margin-top: 0 !important;
      }

      .question-badge {
        width: 48px !important;
        height: 48px !important;
        font-size: 24px !important;
        top: 10px !important;
      }

      .quiz-pill {
        min-width: 140px !important;
        padding: 8px 18px !important;
        margin-top: 7px !important;
        font-size: 15px !important;
      }

      .quiz-meta-row {
        margin-top: 28px !important;
        font-size: 14px !important;
      }

      .math-problem {
        margin: 34px 0 22px !important;
        font-size: clamp(54px, 18vw, 76px) !important;
      }

      .answer-grid { gap: 10px !important; }

      .answer-choice {
        min-height: 58px !important;
        border-radius: 16px !important;
        padding: 0 14px !important;
        gap: 12px !important;
        font-size: 24px !important;
        box-shadow: 0 6px 0 rgba(4,70,150,.48) !important;
      }

      .answer-choice .letter {
        width: 42px !important;
        height: 42px !important;
        box-shadow: 0 5px 0 #c91b52 !important;
      }

      .choose-answer {
        margin: 14px 0 8px !important;
        font-size: 20px !important;
      }

      .yellow-control {
        width: 118px !important;
        height: 52px !important;
        font-size: 30px !important;
      }

      .timer-line {
        height: 21px !important;
        margin-top: 14px !important;
      }

      .timer-seconds {
        font-size: 16px !important;
        margin-left: 8px !important;
      }
    }
  `;

  const soundSvg = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"></path><path d="M16 8.5a4 4 0 0 1 0 7"></path><path d="M18.5 6a7 7 0 0 1 0 12"></path></svg>';
  const homeSvg = '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"></path><path d="M6 10.5V20h12v-9.5"></path><path d="M10 20v-6h4v6"></path></svg>';

  document.querySelectorAll('#soundBtn, #soundRound, .patch-sound').forEach((button) => {
    if (button.dataset.iconReady !== 'sound') {
      button.innerHTML = soundSvg;
      button.dataset.iconReady = 'sound';
    }
  });

  document.querySelectorAll('#homeRound, .patch-home').forEach((button) => {
    if (button.dataset.iconReady !== 'home') {
      button.innerHTML = homeSvg;
      button.dataset.iconReady = 'home';
    }
  });

  const langBtn = document.querySelector('#langBtn');
  if (langBtn && langBtn.dataset.iconReady !== 'home') {
    langBtn.innerHTML = homeSvg;
    langBtn.dataset.iconReady = 'home';
    langBtn.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = './';
    };
  }

  document.querySelectorAll('[data-cat="geo"], [data-cat="social"]').forEach((card) => {
    card.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      card.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-4px)' },
          { transform: 'translateY(0)' }
        ],
        { duration: 120, easing: 'ease-out' }
      );
    };
  });

  document.querySelectorAll('[data-level]').forEach((button) => {
    if (button.dataset.autoStartReady === 'yes') return;
    button.dataset.autoStartReady = 'yes';
    button.addEventListener('click', () => {
      setTimeout(() => {
        const start = document.querySelector('#startBtn');
        if (start) start.click();
      }, 0);
    });
  });

  document.querySelectorAll('.game-page .stage-top').forEach((top) => {
    if (top.querySelector('.stage-actions')) return;
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.innerHTML = `
      <button class="round-control patch-sound" aria-label="Sound">${soundSvg}</button>
      <button class="round-control patch-home" aria-label="Home">${homeSvg}</button>
    `;
    top.appendChild(actions);
    actions.querySelector('.patch-home').onclick = () => { window.location.href = './'; };
    actions.querySelector('.patch-sound').onclick = () => {
      const off = localStorage.aminaSound === 'off';
      localStorage.aminaSound = off ? 'on' : 'off';
      actions.querySelector('.patch-sound').style.opacity = off ? '1' : '.55';
    };
  });
}

applyAminaPatch();
new MutationObserver(applyAminaPatch).observe(document.body, { childList: true, subtree: true });