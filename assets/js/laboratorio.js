window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        /* ===== Carrusel de experimentos ===== */
        (function () {
            const INTERVAL = 9000; // 9 segundos
            const track = document.getElementById('carouselTrack');
            const viewport = document.getElementById('carouselViewport');
            const slides = track.children;
            const total = slides.length;
            const dots = document.querySelectorAll('.carousel-dot');
            const progress = document.getElementById('carouselProgress');
            const current = document.getElementById('carouselCurrent');
            const toggleBtn = document.getElementById('carouselToggle');
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            let index = 0;
            let elapsed = 0;
            let lastTime = null;
            let hoverPaused = false;
            let userPaused = reduceMotion;
            let rafId = null;

            function goTo(i) {
                index = (i + total) % total;
                track.style.transform = 'translateX(-' + (index * 100) + '%)';
                dots.forEach((d, n) => d.classList.toggle('active', n === index));
                dots.forEach((d, n) => {
                    if (n === index) d.setAttribute('aria-current', 'true');
                    else d.removeAttribute('aria-current');
                });
                current.textContent = String(index + 1).padStart(2, '0');
                elapsed = 0;
                progress.style.width = '0%';
            }

            function tick(now) {
                if (lastTime === null) lastTime = now;
                const dt = now - lastTime;
                lastTime = now;
                if (!hoverPaused && !userPaused && !document.hidden) {
                    elapsed += dt;
                    progress.style.width = Math.min(elapsed / INTERVAL * 100, 100) + '%';
                    if (elapsed >= INTERVAL) goTo(index + 1);
                }
                rafId = requestAnimationFrame(tick);
            }

            document.getElementById('carouselPrev').addEventListener('click', () => goTo(index - 1));
            document.getElementById('carouselNext').addEventListener('click', () => goTo(index + 1));
            dots.forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))));

            viewport.addEventListener('mouseenter', () => { hoverPaused = true; });
            viewport.addEventListener('mouseleave', () => { hoverPaused = false; });

            function updateToggle() {
                const icon = toggleBtn.querySelector('i');
                icon.className = userPaused ? 'fas fa-play' : 'fas fa-pause';
            }
            toggleBtn.addEventListener('click', () => {
                userPaused = !userPaused;
                updateToggle();
            });

            /* Teclado: flechas izquierda/derecha */
            document.getElementById('carouselLab').addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') goTo(index - 1);
                if (e.key === 'ArrowRight') goTo(index + 1);
            });

            /* Táctil: deslizar */
            let startX = null;
            viewport.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                hoverPaused = true;
            }, { passive: true });
            viewport.addEventListener('touchend', (e) => {
                if (startX !== null) {
                    const diff = e.changedTouches[0].clientX - startX;
                    if (Math.abs(diff) > 50) goTo(diff < 0 ? index + 1 : index - 1);
                }
                startX = null;
                hoverPaused = false;
            });

            updateToggle();
            goTo(0);
            rafId = requestAnimationFrame(tick);
        })();

        /* ===== Idiomas (ES / EN / FR / IT) ===== */
        const I18N = {
            "en": {
                "k01": "HOME",
                "k02": "SERVICES",
                "k03": "PROJECTS",
                "k04": "LAB",
                "k05": "TEAM",
                "k06": "CONTACT",
                "l01": "[LAB]",
                "l02": "FEATURED EXPERIMENTS",
                "l03": "// This is where we test, break and rebuild.<br>// AI prototypes, sound, motion and interfaces.<br>// What works becomes a project.<br>// _",
                "l04": "Featured experiments",
                "l05": "Generic image for experiment 01",
                "l06": "SYNTHETIC PORTRAITS",
                "l07": "Facial consistency tests with generative AI: same face, different hairstyles, lights and makeup.",
                "l08": "Generic image for experiment 02",
                "l09": "SOUNDSCAPES",
                "l10": "Acoustic identity for luxury spaces: textures, ambiences and generated music to inhabit a place.",
                "l11": "Generic image for experiment 03",
                "l12": "WORLDS IN MOTION",
                "l13": "Realistic AI video: characters that walk, talk and lip-sync to a voice.",
                "l14": "Generic image for experiment 04",
                "l15": "LIVING INTERFACES",
                "l16": "Experimental UX/UI: interactive catalogues and websites that react, animate and invite touch.",
                "l17": "Previous experiment",
                "l18": "Next experiment",
                "l19": "View experiment",
                "l20": "EXPERIMENT",
                "l21": "Pause or play carousel",
                "a01": "Select language",
                "a02": "Available languages",
                "a04": "GitHub of the MATHEWIACS studio",
                "a05": "Send email",
                "a06": "Studio in Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Lab",
                "meta_desc": "MATHEWIACS lab: experiments with artificial intelligence, design, sound and motion."
            },
            "fr": {
                "k01": "ACCUEIL",
                "k02": "SERVICES",
                "k03": "PROJETS",
                "k04": "LABORATOIRE",
                "k05": "ÉQUIPE",
                "k06": "CONTACT",
                "l01": "[LABORATOIRE]",
                "l02": "EXPÉRIENCES EN VEDETTE",
                "l03": "// Ici, on teste, on casse et on reconstruit.<br>// Prototypes IA, son, mouvement et interfaces.<br>// Ce qui marche devient un projet.<br>// _",
                "l04": "Expériences en vedette",
                "l05": "Image générique de l’expérience 01",
                "l06": "PORTRAITS SYNTHÉTIQUES",
                "l07": "Tests de cohérence faciale avec l’IA générative : même visage, coiffures, lumières et maquillages différents.",
                "l08": "Image générique de l’expérience 02",
                "l09": "PAYSAGES SONORES",
                "l10": "Identité acoustique pour espaces de luxe : textures, ambiances et musique générée pour habiter un lieu.",
                "l11": "Image générique de l’expérience 03",
                "l12": "MONDES EN MOUVEMENT",
                "l13": "Vidéo réaliste par IA : des personnages qui marchent, parlent et synchronisent leurs lèvres avec la voix.",
                "l14": "Image générique de l’expérience 04",
                "l15": "INTERFACES VIVANTES",
                "l16": "UX/UI expérimentale : catalogues interactifs et sites qui réagissent, s’animent et se laissent toucher.",
                "l17": "Expérience précédente",
                "l18": "Expérience suivante",
                "l19": "Voir l’expérience",
                "l20": "EXPÉRIENCE",
                "l21": "Mettre en pause ou lire le carrousel",
                "a01": "Sélectionner la langue",
                "a02": "Langues disponibles",
                "a04": "GitHub du studio MATHEWIACS",
                "a05": "Envoyer un e-mail",
                "a06": "Studio à Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Laboratoire",
                "meta_desc": "Laboratoire MATHEWIACS : expériences avec l’intelligence artificielle, le design, le son et le mouvement."
            },
            "it": {
                "k01": "HOME",
                "k02": "SERVIZI",
                "k03": "PROGETTI",
                "k04": "LABORATORIO",
                "k05": "TEAM",
                "k06": "CONTATTI",
                "l01": "[LABORATORIO]",
                "l02": "ESPERIMENTI IN EVIDENZA",
                "l03": "// Qui proviamo, rompiamo e rimontiamo.<br>// Prototipi IA, suono, movimento e interfacce.<br>// Ciò che funziona diventa un progetto.<br>// _",
                "l04": "Esperimenti in evidenza",
                "l05": "Immagine generica dell’esperimento 01",
                "l06": "RITRATTI SINTETICI",
                "l07": "Test di coerenza facciale con IA generativa: stesso volto, acconciature, luci e trucchi diversi.",
                "l08": "Immagine generica dell’esperimento 02",
                "l09": "PAESAGGI SONORI",
                "l10": "Identità acustica per spazi di lusso: texture, atmosfere e musica generata per abitare un luogo.",
                "l11": "Immagine generica dell’esperimento 03",
                "l12": "MONDI IN MOVIMENTO",
                "l13": "Video realistico con IA: personaggi che camminano, parlano e sincronizzano le labbra con la voce.",
                "l14": "Immagine generica dell’esperimento 04",
                "l15": "INTERFACCE VIVE",
                "l16": "UX/UI sperimentale: cataloghi interattivi e siti che reagiscono, si animano e si lasciano toccare.",
                "l17": "Esperimento precedente",
                "l18": "Esperimento successivo",
                "l19": "Vedi l’esperimento",
                "l20": "ESPERIMENTO",
                "l21": "Metti in pausa o riproduci il carosello",
                "a01": "Seleziona la lingua",
                "a02": "Lingue disponibili",
                "a04": "GitHub dello studio MATHEWIACS",
                "a05": "Invia email",
                "a06": "Studio a Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Laboratorio",
                "meta_desc": "Laboratorio MATHEWIACS: esperimenti con intelligenza artificiale, design, suono e movimento."
            }
        };

        const LANG_STORAGE_KEY = 'mathewiacs-lang';
        const LOCALES = { es: 'es_ES', en: 'en_GB', fr: 'fr_FR', it: 'it_IT' };
        const ATTR_MARKERS = [['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt']];

        const textOriginals = new Map();
        const attrOriginals = new Map();
        document.querySelectorAll('[data-i18n]').forEach(el => textOriginals.set(el, el.innerHTML));
        ATTR_MARKERS.forEach(([marker, attr]) => {
            document.querySelectorAll('[' + marker + ']').forEach(el => attrOriginals.set(el, el.getAttribute(attr)));
        });

        const metaDescription = document.querySelector('meta[name="description"]');
        const metaLocale = document.querySelector('meta[property="og:locale"]');
        const originalTitle = document.title;
        const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

        function applyLanguage(lang) {
            const dict = I18N[lang];
            if (lang !== 'es' && !dict) return;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const value = lang === 'es' ? textOriginals.get(el) : dict[el.dataset.i18n];
                if (value !== undefined) el.innerHTML = value;
            });

            ATTR_MARKERS.forEach(([marker, attr]) => {
                document.querySelectorAll('[' + marker + ']').forEach(el => {
                    let value = lang === 'es' ? attrOriginals.get(el) : dict[el.getAttribute(marker)];
                    /* Puntos del carrusel: añadir el número al texto */
                    if (value !== undefined && el.classList.contains('carousel-dot')) {
                        const n = Number(el.dataset.index) + 1;
                        value = lang === 'es' ? attrOriginals.get(el) : value + ' ' + n;
                    }
                    if (value !== undefined) el.setAttribute(attr, value);
                });
            });

            document.title = lang === 'es' ? originalTitle : dict.meta_title;
            if (metaDescription) metaDescription.setAttribute('content', lang === 'es' ? originalDescription : dict.meta_desc);
            if (metaLocale) metaLocale.setAttribute('content', LOCALES[lang]);
            document.documentElement.lang = lang;
        }

        document.querySelectorAll('input[name="language"]').forEach(radio => {
            radio.addEventListener('change', () => {
                applyLanguage(radio.value);
                try { localStorage.setItem(LANG_STORAGE_KEY, radio.value); } catch (e) {}
            });
        });

        let savedLanguage = null;
        try { savedLanguage = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) {}
        if (savedLanguage && savedLanguage !== 'es' && I18N[savedLanguage]) {
            const savedRadio = document.querySelector('input[name="language"][value="' + savedLanguage + '"]');
            if (savedRadio) savedRadio.checked = true;
            applyLanguage(savedLanguage);
        }

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
