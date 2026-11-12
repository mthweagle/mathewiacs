/* Contacto provisional: el mensaje se prepara en el correo del visitante y va a la cuenta personal
   del estudio hasta que existan las cuentas corporativas (cambiar CONTACT_EMAIL entonces). */
const CONTACT_EMAIL = 'mthweagle@gmail.com';
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = 'Contacto desde mathewiacs.com - ' + name;
    const body = message + '\n\n--\nNombre: ' + name + '\nEmail: ' + email;
    document.getElementById('form-status').textContent = 'Abriendo tu aplicación de correo para enviar el mensaje…';
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

/* Sustituye al onclick en línea del selector de idioma (necesario para CSP sin 'unsafe-inline') */
document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const details = radio.closest('details');
        if (details) details.removeAttribute('open');
    });
});


/* Mide la cabecera y publica su alto real para que el contenido nunca quede debajo de ella */
(function () {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const setHeight = () => document.documentElement.style.setProperty('--header-h', nav.offsetHeight + 'px');
    setHeight();
    window.addEventListener('resize', setHeight);
    window.addEventListener('load', setHeight);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setHeight);
    if ('ResizeObserver' in window) new ResizeObserver(setHeight).observe(nav);
    // En móvil el menú se desliza: deja visible la sección actual
    const list = nav.querySelector('.navbar-nav');
    const current = list && list.querySelector('.nav-link.active, .nav-link[aria-current="page"]');
    if (current) {
        const l = list.getBoundingClientRect(), c = current.getBoundingClientRect();
        list.scrollLeft += (c.left - l.left) - (l.width - c.width) / 2;
    }
})();


/* ===== Idiomas: cabecera y footer (ES / EN / FR / IT) =====
   El contenido propio de esta página está en español; el menú, el selector
   y el footer siguen el idioma elegido en el resto de la web. */
(function () {
    const I18N = {
        en: { k01: 'HOME', k02: 'SERVICES', k03: 'PROJECTS', k04: 'LAB', k05: 'TEAM', k06: 'CONTACT',
              a01: 'Select language', a02: 'Available languages', a04: 'GitHub of the MATHEWIACS studio', a05: 'Send email' },
        fr: { k01: 'ACCUEIL', k02: 'SERVICES', k03: 'PROJETS', k04: 'LABORATOIRE', k05: 'ÉQUIPE', k06: 'CONTACT',
              a01: 'Sélectionner la langue', a02: 'Langues disponibles', a04: 'GitHub du studio MATHEWIACS', a05: 'Envoyer un e-mail' },
        it: { k01: 'HOME', k02: 'SERVIZI', k03: 'PROGETTI', k04: 'LABORATORIO', k05: 'TEAM', k06: 'CONTATTI',
              a01: 'Seleziona la lingua', a02: 'Lingue disponibili', a04: 'GitHub dello studio MATHEWIACS', a05: 'Invia email' }
    };
    const KEY = 'mathewiacs-lang';
    const textOriginals = new Map();
    const attrOriginals = new Map();
    document.querySelectorAll('[data-i18n]').forEach(el => textOriginals.set(el, el.innerHTML));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => attrOriginals.set(el, el.getAttribute('aria-label')));

    function applyLanguage(lang) {
        const dict = I18N[lang];
        if (lang !== 'es' && !dict) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = lang === 'es' ? textOriginals.get(el) : dict[el.dataset.i18n];
            if (value !== undefined) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = lang === 'es' ? attrOriginals.get(el) : dict[el.getAttribute('data-i18n-aria')];
            if (value !== undefined) el.setAttribute('aria-label', value);
        });
    }

    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', () => {
            applyLanguage(radio.value);
            try { localStorage.setItem(KEY, radio.value); } catch (e) {}
        });
    });

    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved && saved !== 'es' && I18N[saved]) {
        const radio = document.querySelector('input[name="language"][value="' + saved + '"]');
        if (radio) radio.checked = true;
        applyLanguage(saved);
    }
})();
