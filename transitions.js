function aminaTransitionsPatch() {
  let style = document.querySelector('#aminaTransitionStyles');
  if (!style) {
    style = document.createElement('style');
    style.id = 'aminaTransitionStyles';
    document.head.appendChild(style);
  }

  style.textContent = `
    @keyframes aminaPageIn {
      0% { opacity: 0; transform: translateY(18px) scale(.98); filter: blur(4px); }
      55% { opacity: 1; transform: translateY(-3px) scale(1.01); filter: blur(0); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }

    @keyframes aminaClickPop {
      0% { transform: scale(1); }
      45% { transform: scale(.94); }
      100% { transform: scale(1.02); }
    }

    @keyframes aminaGlowMove {
      0% { transform: translateX(-130%) rotate(18deg); opacity: 0; }
      30% { opacity: .55; }
      100% { transform: translateX(130%) rotate(18deg); opacity: 0; }
    }

    .amina-page-enter {
      animation: aminaPageIn .42s cubic-bezier(.2,.9,.25,1) both !important;
      transform-origin: center top !important;
    }

    .amina-click-animate {
      animation: aminaClickPop .18s ease both !important;
      position: relative !important;
      overflow: hidden !important;
    }

    .amina-click-animate::after {
      content: '' !important;
      position: absolute !important;
      top: -45% !important;
      left: -30% !important;
      width: 55% !important;
      height: 190% !important;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent) !important;
      animation: aminaGlowMove .42s ease both !important;
      pointer-events: none !important;
    }

    .category-card,
    .stage-card,
    .answer-btn,
    .yellow-control,
    .stage-back,
    .circle-btn,
    .round-control,
    .amina-settings-gear,
    .amina-settings-sound,
    .amina-settings-language-toggle,
    .amina-settings-force-update,
    .amina-settings-about-toggle,
    .amina-settings-lang {
      transition: transform .18s ease, filter .18s ease, box-shadow .18s ease !important;
    }

    .category-card:active,
    .stage-card:active,
    .answer-btn:active,
    .yellow-control:active,
    .stage-back:active,
    .circle-btn:active,
    .round-control:active,
    .amina-settings-gear:active,
    .amina-settings-sound:active,
    .amina-settings-language-toggle:active,
    .amina-settings-force-update:active,
    .amina-settings-about-toggle:active,
    .amina-settings-lang:active {
      transform: scale(.96) !important;
      filter: brightness(1.06) !important;
    }
  `;
}

function aminaAnimateCurrentPage() {
  const root = document.querySelector('#app');
  if (!root) return;
  const page = root.querySelector('.page, .game-page, .quiz-stage');
  if (!page) return;
  page.classList.remove('amina-page-enter');
  void page.offsetWidth;
  page.classList.add('amina-page-enter');
}

function aminaTransitionsInit() {
  aminaTransitionsPatch();
  aminaAnimateCurrentPage();

  document.addEventListener('click', (event) => {
    const target = event.target.closest('button, .category-card, .stage-card, .answer-btn');
    if (!target) return;
    target.classList.remove('amina-click-animate');
    void target.offsetWidth;
    target.classList.add('amina-click-animate');
  }, true);

  const app = document.querySelector('#app');
  if (!app || app.dataset.aminaTransitionsReady === 'yes') return;
  app.dataset.aminaTransitionsReady = 'yes';
  new MutationObserver(() => {
    requestAnimationFrame(aminaAnimateCurrentPage);
  }).observe(app, { childList: true, subtree: false });
}

aminaTransitionsInit();
