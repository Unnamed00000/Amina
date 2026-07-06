const AMINA_LANGS = [
  ['en', 'English', '🇬🇧'],
  ['da', 'Dansk', '🇩🇰'],
  ['ru', 'Русский', '🇷🇺'],
  ['ka', 'ქართული', '🇬🇪'],
  ['de', 'Deutsch', '🇩🇪']
];

const AMINA_APP_VERSION = 'v1.0.24';
const AMINA_APP_CREATOR = 'Adam Margoev';

function aminaLabel(key) {
  const lang = localStorage.aminaLang || document.documentElement.lang || 'en';
  const labels = {
    ru: {
      settings: 'Настройки',
      app: 'Приложение',
      force: '🔄 Форс обновление',
      about: 'ℹ️ О приложении',
      version: 'Версия',
      creator: 'Создатель'
    },
    da: {
      settings: 'Settings',
      app: 'App',
      force: '🔄 Force update',
      about: 'ℹ️ Om appen',
      version: 'Version',
      creator: 'Skaber'
    },
    ka: {
      settings: 'Settings',
      app: 'App',
      force: '🔄 განახლება',
      about: 'ℹ️ აპის შესახებ',
      version: 'ვერსია',
      creator: 'შემქმნელი'
    },
    de: {
      settings: 'Settings',
      app: 'App',
      force: '🔄 Update erzwingen',
      about: 'ℹ️ Über die App',
      version: 'Version',
      creator: 'Ersteller'
    },
    en: {
      settings: 'Settings',
      app: 'App',
      force: '🔄 Force update',
      about: 'ℹ️ About app',
      version: 'Version',
      creator: 'Creator'
    }
  };
  return (labels[lang] && labels[lang][key]) || labels.en[key] || key;
}

async function aminaForceUpdate() {
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.update().catch(() => null)));
    }
  } catch (error) {
    console.warn('Force update failed', error);
  }
  const url = new URL(window.location.href);
  url.searchParams.set('fresh', Date.now().toString());
  window.location.replace(url.toString());
}

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
    #languageMenu,
    .patch-sound {
      display: none !important;
    }

    .amina-settings-wrap {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex: 0 0 auto !important;
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
      flex: 0 0 auto !important;
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
      min-width: 248px !important;
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

    .amina-settings-title,
    .amina-settings-section-title {
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      color: #0b61c9 !important;
      margin: 0 0 10px !important;
      text-align: center !important;
      text-transform: uppercase !important;
    }

    .amina-settings-section-title {
      font-size: 12px !important;
      margin: 2px 0 9px !important;
      color: #5a4300 !important;
    }

    .amina-settings-divider {
      width: 100% !important;
      height: 2px !important;
      margin: 12px 0 10px !important;
      border-radius: 99px !important;
      background: rgba(11,97,201,.18) !important;
    }

    .amina-settings-sound,
    .amina-settings-language-toggle,
    .amina-settings-force-update,
    .amina-settings-about-toggle {
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
      text-align: center !important;
    }

    .amina-settings-language-toggle {
      background: #ffd529 !important;
      color: #5a4300 !important;
      box-shadow: 0 6px 0 #d49b00 !important;
    }

    .amina-settings-force-update {
      background: #25c46b !important;
      box-shadow: 0 6px 0 #0b9444 !important;
    }

    .amina-settings-about-toggle {
      background: #ff8a28 !important;
      box-shadow: 0 6px 0 #c75a00 !important;
      margin-bottom: 8px !important;
    }

    .amina-settings-langs {
      display: none !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 8px !important;
      margin-top: -4px !important;
      margin-bottom: 4px !important;
    }

    .amina-settings-langs.open {
      display: grid !important;
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

    .amina-settings-about-box {
      display: none !important;
      padding: 11px 12px !important;
      border-radius: 16px !important;
      background: #eef6ff !important;
      color: #0b61c9 !important;
      font-family: Arial, Helvetica, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      line-height: 1.45 !important;
      box-shadow: inset 0 0 0 2px rgba(11,97,201,.12) !important;
      text-align: left !important;
    }

    .amina-settings-about-box.open {
      display: block !important;
    }

    .amina-settings-about-name {
      font-size: 16px !important;
      color: #5a4300 !important;
      margin-bottom: 4px !important;
      text-align: center !important;
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
        min-width: 224px !important;
        padding: 12px !important;
        border-radius: 20px !important;
      }

      .amina-settings-sound,
      .amina-settings-language-toggle,
      .amina-settings-force-update,
      .amina-settings-about-toggle {
        font-size: 16px !important;
        padding: 11px !important;
      }
    }
  `;

  document.querySelectorAll('.stage-actions .amina-settings-wrap, .amina-install-row-button').forEach((item) => item.remove());

  const toolbar = document.querySelector('.top-actions');
  if (!toolbar) return;

  if (toolbar.querySelector('.amina-settings-wrap')) return;

  const wrap = document.createElement('div');
  wrap.className = 'amina-settings-wrap';
  wrap.innerHTML = `
    <button class="amina-settings-gear" aria-label="Settings">
      <svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 1 1-4 0v-.06a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.87.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.06a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.87l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 1 1 4 0v.06a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.87-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.4 9c.14.35.36.68.6 1H20a2 2 0 1 1 0 4h-.06c-.24.32-.46.65-.54 1z"></path></svg>
    </button>
    <div class="amina-settings-panel">
      <div class="amina-settings-title">${aminaLabel('settings')}</div>
      <button class="amina-settings-sound" type="button">🔊 Sound</button>
      <button class="amina-settings-language-toggle" type="button">🌐 Language</button>
      <div class="amina-settings-langs"></div>
      <div class="amina-settings-divider"></div>
      <div class="amina-settings-section-title">${aminaLabel('app')}</div>
      <button class="amina-settings-force-update" type="button">${aminaLabel('force')}</button>
      <button class="amina-settings-about-toggle" type="button">${aminaLabel('about')}</button>
      <div class="amina-settings-about-box">
        <div class="amina-settings-about-name">Amina-App</div>
        <div>${aminaLabel('version')}: ${AMINA_APP_VERSION}</div>
        <div>${aminaLabel('creator')}: ${AMINA_APP_CREATOR}</div>
      </div>
    </div>
  `;

  toolbar.appendChild(wrap);

  const panel = wrap.querySelector('.amina-settings-panel');
  const gear = wrap.querySelector('.amina-settings-gear');
  const soundButton = wrap.querySelector('.amina-settings-sound');
  const langToggle = wrap.querySelector('.amina-settings-language-toggle');
  const langsBox = wrap.querySelector('.amina-settings-langs');
  const forceUpdateButton = wrap.querySelector('.amina-settings-force-update');
  const aboutButton = wrap.querySelector('.amina-settings-about-toggle');
  const aboutBox = wrap.querySelector('.amina-settings-about-box');

  const updateSoundLabel = () => {
    soundButton.textContent = localStorage.aminaSound === 'off' ? '🔇 Sound' : '🔊 Sound';
  };
  updateSoundLabel();

  gear.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    panel.classList.toggle('open');
    if (!panel.classList.contains('open')) {
      langsBox.classList.remove('open');
      aboutBox.classList.remove('open');
    }
  });

  soundButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const current = localStorage.aminaSound !== 'off';
    localStorage.aminaSound = current ? 'off' : 'on';
    updateSoundLabel();
    const nativeButton = document.querySelector('#soundBtn') || document.querySelector('#soundRound');
    if (nativeButton) nativeButton.click();
  });

  const currentLang = localStorage.aminaLang || document.documentElement.lang || 'en';
  const current = AMINA_LANGS.find(([code]) => code === currentLang) || AMINA_LANGS[0];
  langToggle.textContent = `🌐 ${current[2]} ${current[1]}`;

  langsBox.innerHTML = AMINA_LANGS.map(([code, name, flag]) => `
    <button class="amina-settings-lang ${code === currentLang ? 'active' : ''}" type="button" data-amina-lang="${code}">${flag} ${name}</button>
  `).join('');

  langToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    aboutBox.classList.remove('open');
    langsBox.classList.toggle('open');
  });

  forceUpdateButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    aminaForceUpdate();
  });

  aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    langsBox.classList.remove('open');
    aboutBox.classList.toggle('open');
  });

  langsBox.querySelectorAll('[data-amina-lang]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      langsBox.classList.remove('open');
      panel.classList.remove('open');
      localStorage.aminaLang = button.dataset.aminaLang;
      window.location.reload();
    });
  });

  document.addEventListener('click', (event) => {
    if (!wrap.contains(event.target)) {
      panel.classList.remove('open');
      langsBox.classList.remove('open');
      aboutBox.classList.remove('open');
    }
  });
}

aminaSettingsPatch();
new MutationObserver(aminaSettingsPatch).observe(document.body, { childList: true, subtree: true });
