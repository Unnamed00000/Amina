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

    .stage-actions {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
      display: flex !important;
      gap: 14px !important;
      align-items: center !important;
      z-index: 5 !important;
    }

    .round-control {
      width: 72px !important;
      height: 72px !important;
      border: 0 !important;
      border-radius: 50% !important;
      background: #ffffff !important;
      color: #0b61c9 !important;
      box-shadow: 0 7px 0 rgba(5,75,160,.38), 0 16px 24px rgba(0,0,0,.15) !important;
      font-size: 34px !important;
      font-weight: 1000 !important;
      display: grid !important;
      place-items: center !important;
      cursor: pointer !important;
    }

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
    .stage-card[data-op] h2 {
      color: #ffffff !important;
    }

    .stage-card[data-level="easy"] {
      background: linear-gradient(145deg,#28dc79,#12ba5f) !important;
      color: #ffffff !important;
      box-shadow: 0 11px 0 #069c48, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.25) !important;
    }

    .stage-card[data-level="medium"] {
      background: linear-gradient(145deg,#ffe76a,#ffc72a) !important;
      color: #5d4100 !important;
      box-shadow: 0 11px 0 #d99b00, 0 18px 28px rgba(0,0,0,.18), inset 0 0 0 5px rgba(255,255,255,.28) !important;
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
    .stage-card[data-level] h2 {
      color: inherit !important;
    }

    .stage-card[data-level="easy"] .num,
    .stage-card[data-level="hard"] .num,
    .stage-card[data-level="impossible"] .num {
      color: rgba(255,255,255,.92) !important;
    }

    .stage-card[data-level="medium"] .num {
      color: rgba(93,65,0,.55) !important;
    }

    @media (max-width: 620px) {
      .logo::before,
      .app-shell .stage-logo {
        font-size: 38px !important;
      }

      .round-control {
        width: 54px !important;
        height: 54px !important;
        font-size: 26px !important;
      }

      .round-control svg {
        width: 27px !important;
        height: 27px !important;
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

  document.querySelectorAll('.game-page .stage-top').forEach((top) => {
    if (top.querySelector('.stage-actions')) return;
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.innerHTML = `
      <button class="round-control patch-sound" aria-label="Sound">
        <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"></path><path d="M16 8.5a4 4 0 0 1 0 7"></path><path d="M18.5 6a7 7 0 0 1 0 12"></path></svg>
      </button>
      <button class="round-control patch-home" aria-label="Home">
        <svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"></path><path d="M6 10.5V20h12v-9.5"></path><path d="M10 20v-6h4v6"></path></svg>
      </button>
    `;
    top.appendChild(actions);
    actions.querySelector('.patch-home').onclick = () => {
      window.location.href = './';
    };
    actions.querySelector('.patch-sound').onclick = () => {
      const off = localStorage.aminaSound === 'off';
      localStorage.aminaSound = off ? 'on' : 'off';
      actions.querySelector('.patch-sound').style.opacity = off ? '1' : '.55';
    };
  });
}

applyAminaPatch();
new MutationObserver(applyAminaPatch).observe(document.body, { childList: true, subtree: true });
