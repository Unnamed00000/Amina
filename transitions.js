function aminaTransitionsPatch() {
  let style = document.querySelector('#aminaTransitionStyles');
  if (!style) {
    style = document.createElement('style');
    style.id = 'aminaTransitionStyles';
    document.head.appendChild(style);
  }

  style.textContent = `
    @keyframes aminaScreenIn {
      0% { opacity: 0; transform: translateY(28px) scale(.96); filter: blur(7px); }
      60% { opacity: 1; transform: translateY(-4px) scale(1.015); filter: blur(0); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }

    @keyframes aminaFlashOut {
      0% { opacity: 0; transform: scale(.88); }
      22% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(1.18); }
    }

    @keyframes aminaRingPop {
      0% { opacity: .95; transform: scale(.2); }
      80% { opacity: .18; }
      100% { opacity: 0; transform: scale(2.8); }
    }

    @keyframes aminaButtonPop {
      0% { transform: scale(1); }
      40% { transform: scale(.90); filter: brightness(1.18); }
      100% { transform: scale(1.03); filter: brightness(1.05); }
    }

    .app-shell .page,
    .app-shell .game-page,
    .app-shell .quiz-stage,
    .app-shell .quiz-wrap {
      animation: aminaScreenIn .48s cubic-bezier(.18,.94,.24,1) both !important;
      transform-origin: center top !important;
    }

    .amina-click-animate {
      animation: aminaButtonPop .24s ease both !important;
    }

    .amina-transition-flash {
      position: fixed !important;
      inset: 0 !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
      display: grid !important;
      place-items: center !important;
      background: radial-gradient(circle at center, rgba(255,213,41,.42), rgba(20,135,245,.24) 36%, transparent 72%) !important;
      animation: aminaFlashOut .58s ease both !important;
    }

    .amina-transition-flash::before,
    .amina-transition-flash::after {
      content: '' !important;
      position: absolute !important;
      width: 110px !important;
      height: 110px !important;
      border-radius: 50% !important;
      border: 8px solid rgba(255,255,255,.88) !important;
      box-shadow: 0 0 28px rgba(255,213,41,.8) !important;
      animation: aminaRingPop .62s ease-out both !important;
    }

    .amina-transition-flash::after {
      width: 58px !important;
      height: 58px !important;
      border-color: rgba(255,213,41,.95) !important;
      animation-delay: .05s !important;
    }

    .category-card,
    .stage-card,
    .answer-choice,
    .yellow-control,
    .stage-back,
    .circle-btn,
    .round-control,
    .start-btn,
    .main-btn,
    .ghost-btn,
    .amina-settings-gear,
    .amina-settings-sound,
    .amina-settings-language-toggle,
    .amina-settings-force-update,
    .amina-settings-about-toggle,
    .amina-settings-lang {
      transition: transform .16s ease, filter .16s ease, box-shadow .16s ease !important;
    }

    .category-card:active,
    .stage-card:active,
    .answer-choice:active,
    .yellow-control:active,
    .stage-back:active,
    .circle-btn:active,
    .round-control:active,
    .start-btn:active,
    .main-btn:active,
    .ghost-btn:active,
    .amina-settings-gear:active,
    .amina-settings-sound:active,
    .amina-settings-language-toggle:active,
    .amina-settings-force-update:active,
    .amina-settings-about-toggle:active,
    .amina-settings-lang:active {
      transform: scale(.93) !important;
      filter: brightness(1.12) !important;
    }
  `;
}

function aminaFlash() {
  document.querySelectorAll('.amina-transition-flash').forEach((old) => old.remove());
  const flash = document.createElement('div');
  flash.className = 'amina-transition-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 700);
}

function aminaAnimateButton(target) {
  target.classList.remove('amina-click-animate');
  void target.offsetWidth;
  target.classList.add('amina-click-animate');
  setTimeout(() => target.classList.remove('amina-click-animate'), 320);
}

function aminaTransitionsInit() {
  aminaTransitionsPatch();

  document.addEventListener('pointerdown', (event) => {
    const target = event.target.closest('button, .category-card, .stage-card, .answer-choice, .start-btn, .main-btn, .ghost-btn');
    if (!target || target.disabled) return;
    aminaAnimateButton(target);
  }, true);

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-cat], [data-op], #startBtn, #backBtn, #homeRound, #homeBtn, #again, .stage-card, .category-card');
    if (!target || target.disabled) return;
    aminaFlash();
  }, true);
}

aminaTransitionsInit();
