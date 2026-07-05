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

    .app-shell .stage-logo::after {
      content: '' !important;
    }

    .hero .pill,
    .pill {
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: .3px !important;
      text-shadow: none !important;
    }

    @media (max-width: 620px) {
      .logo::before,
      .app-shell .stage-logo {
        font-size: 38px !important;
      }
    }
  `;

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
        { duration: 180, easing: 'ease-out' }
      );
    };
  });
}

applyAminaPatch();
new MutationObserver(applyAminaPatch).observe(document.body, { childList: true, subtree: true });
