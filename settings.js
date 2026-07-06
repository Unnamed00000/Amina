const AMINA_LANGS = [
  ['en', 'English', '🇬🇧'],
  ['da', 'Dansk', '🇩🇰'],
  ['ru', 'Русский', '🇷🇺'],
  ['ka', 'ქართული', '🇬🇪'],
  ['de', 'Deutsch', '🇩🇪']
];

function aminaSettingsPatch() {
  let style = document.querySelector('#aminaSettingsStyles');
  if (!style) {
    style = document.createElement('style');
    style.id = 'aminaSettingsStyles';
    document.head.appendChild(style);
  }

  style.textContent = `
    #soundBtn,
    #langBtn,
    #soundRound,
    #languageMenu {
      display: none !important;
    }

    .amina-settings-wrap {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .amina-settings-gear {
      width: 72px !important;
      height: 72px !important;
      border: 0 !important;
      border-radius: 50% !important;
      background: #ffffff !important;
      color: #0b61c9 !important;
      box-shadow: 0 7px 0 rgba(5,75,160,.38), 0 16px 24px rgba(0,0,0,.15) !important;
      display: grid !important;
      place-items: center !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    .amina-settings-gear svg {
      width: 36px !important;
      height: 36px !important;
      stroke: #0b61c9 !important;
      stroke-width: 3 !important;
      fill: none !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }

    .amina-settings-panel {
      position: absolute !important;
      right: 0 !important;
      top: calc(100% + 14px) !important;
      min-width: 230px !important;
      padding: 14px !important;
      border-radius: 24px !important;
      background: rgba(255,255,255,.96) !important;
      box-shadow: 0 12px 0 rgba(5,75,160,.28), 0 22px 35px rgba(0,0,0,.22) !important;
      display: none !important;
      z-index: 9999 !important;
    }

    .amina-settings-panel.open {
      display: block !important;
    }

    .amina-settings-title {
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      color: #0b61c9 !important;
      margin: 0 0 10px !important;
      text-align: center !important;
      text-transform: uppercase !important;
    }

    .amina-settings-sound {
      width: 100% !important;
      border: 0 !important;
      border-radius: 18px !important;
      background: #1487f5 !important;
      color: white !important;
      padding: 12px !important;
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 18px !important;
      font-weight: 900 !important;
      cursor: pointer !important;
      box-shadow: 0 6px 0 #0860b9 !important;
      margin-bottom: 12px !important;
    }

    .amina-settings-langs {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 8px !important;
    }

    .amina-settings-lang {
      border: 0 !important;
      border-radius: 16px !important;
      background: #eef6ff !important;
      color: #0b61c9 !important;
      padding: 9px 8px !important;
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 13px !important;
      font-weight: 900 !important;
      cursor: pointer !important;
      box-shadow: 0 4px 0 rgba(5,75,160,.2) !important;
    }

    .amina-settings-lang.active {
      background: #ffd529 !important;
      color: #5a4300 !important;
    }

    @media (max-width: 620px) {
      .amina-settings-gear {
        width: 44px !important;
        height: 44px !important;
        box-shadow: 0 4px 0 rgba(5,75,160,.38), 0 10px 16px rgba(0,0,0,.14) !important;
      }

      .amina-settings-gear svg {
        width: 24px !important;
        height: 24px !important;
      }

      .amina-settings-panel {
        top: calc(100% + 10px) !important;
        min-width: 210px !important;
        padding: 12px !important;
        border-radius: 20px !important;
      }
    }
  `;

  const toolbar = document.querySelector('.stage-actions') || document.querySelector('.top-actions');
  if (!toolbar) return;

  if (toolbar.querySelector('.amina-settings-wrap')) return;

  const wrap = document.createElement('div');
  wrap.className = 'amina-settings-wrap';
  wrap.innerHTML = `
    <button class="amina-settings-gear" aria-label="Settings">
      <svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 1 1-4 0v-.06a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.87.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.06a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.87l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 1 1 4 0v.06a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.87-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.4 9c.14.35.36.68.6 1H20a2 2 0 1 1 0 4h-.06c-.24.32-.46.65-.54 1z"></path></svg>
    </button>
    <div class="amina-settings-panel">
      <div class="amina-settings-title">Settings</div>
      <button class="amina-settings-sound" type="button">🔊 Sound</button>
      <div class="amina-settings-langs"></div>
    </div>
  `;

  toolbar.appendChild(wrap);

  const panel = wrap.querySelector('.amina-settings-panel');
  const gear = wrap.querySelector('.amina-settings-gear');
  const soundButton = wrap.querySelector('.amina-settings-sound');
  const langsBox = wrap.querySelector('.amina-settings-langs');

  gear.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    panel.classList.toggle('open');
  });

  soundButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const current = localStorage.aminaSound !== 'off';
    localStorage.aminaSound = current ? 'off' : 'on';
    const nativeButton = document.querySelector('#soundBtn') || document.querySelector('#soundRound');
    if (nativeButton) nativeButton.click();
    else window.location.reload();
  });

  const currentLang = localStorage.aminaLang || document.documentElement.lang || 'en';
  langsBox.innerHTML = AMINA_LANGS.map(([code, name, flag]) => `
    <button class="amina-settings-lang ${code === currentLang ? 'active' : ''}" type="button" data-amina-lang="${code}">${flag} ${name}</button>
  `).join('');

  langsBox.querySelectorAll('[data-amina-lang]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      localStorage.aminaLang = button.dataset.aminaLang;
      window.location.reload();
    });
  });

  document.addEventListener('click', (event) => {
    if (!wrap.contains(event.target)) panel.classList.remove('open');
  }, { once: true });
}

aminaSettingsPatch();
new MutationObserver(aminaSettingsPatch).observe(document.body, { childList: true, subtree: true });
