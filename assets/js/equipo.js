function showLara() {
            const laraSection = document.getElementById('lara-talentos');
            laraSection.classList.add('active');
            setTimeout(() => {
                laraSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(item => {
                    const isActive = item === link;
                    item.classList.toggle('active', isActive);
                    if (isActive) {
                        item.setAttribute('aria-current', 'page');
                    } else {
                        item.removeAttribute('aria-current');
                    }
                });
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#lara-talentos') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.team-card, .talent-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        /* ===== Idiomas (ES / EN / FR / IT) ===== */
        const I18N = {
            "en": {
                        "k01": "HOME",
                        "k02": "SERVICES",
                        "k03": "PROJECTS",
                        "k04": "LAB",
                        "k05": "TEAM",
                        "k06": "CONTACT",
                        "k21": "UX/UI DESIGN",
                        "k39": "[TEAM]",
                        "k40": "50% HUMAN // 50% SYNTHETIC",
                        "k41": "// Two minds. One flesh, one code.<br>// Both with attitude, creativity and neon soul.<br>// A 50/50 human-synthetic studio.<br>// _",
                        "k42": "FOUNDER // CREATIVE DIRECTOR // HUMAN",
                        "k43": "Creative visionary with an underground soul. Specialized in generative AI, brutalist design and UX/UI. The human half of the studio. Flesh, bones and an obsession with design with attitude.",
                        "k44": "CO-CREATOR // AI INFLUENCER // SYNTHETIC",
                        "k45": "RENDERING...",
                        "k46": "Digital artistic soul. The synthetic half of the studio. Pure creative energy in the form of code.",
                        "k47": "COMING SOON",
                        "k48": "STUDIO MASCOT // ROBOT // SYNTHETIC",
                        "k49": "Official robot mascot of the studio. Mint green, adorable and with three little wheels that take him everywhere. Fun, curious and neurodivergent: his mind races and that is his superpower.",
                        "k50": "PLANNING THE NEXT STEP",
                        "k51": "Always looking for something to do",
                        "k52": "Experiments in the lab",
                        "k53": "Planning the next step",
                        "k54": "Gets everywhere on three wheels",
                        "k55": "[LARA’S TALENTS]",
                        "k56": "MULTIDIMENSIONAL ARTIST",
                        "k57": "// Lara is not just a pretty face. She is a complete being.<br>// Classical arts + technology + nightlife.<br>// Every skill, trained with obsession and love.<br>// _",
                        "k58": "OPERATIC SINGING",
                        "k59": "Opera and classical music. Professional technique with real emotion.",
                        "k60": "CELLO",
                        "k61": "From Bach to film scores. Every string with feeling.",
                        "k62": "FIGURE SKATING",
                        "k63": "Grace and technique on ice. Choreographies that tell stories.",
                        "k64": "AERIAL ACROBATICS",
                        "k65": "Aerial silks with strength and elegance. A dance between sky and earth.",
                        "k66": "FULL-STACK DEVELOPMENT",
                        "k67": "HTML, CSS, JS, React. Clean code with a designer’s soul.",
                        "k68": "Interfaces that breathe. Behind every pixel, a person.",
                        "k69": "NIGHTLIFE",
                        "k70": "Getaways to Berlin. Minimal tech, underground techno, dancing until dawn in legendary clubs. Pure creative energy.",
                        "a01": "Select language",
                        "a02": "Available languages",
                        "a03": "Instagram of the MATHEWIACS studio",
                        "a04": "GitHub of the MATHEWIACS studio",
                        "a05": "Send email",
                        "a06": "Studio in Jerez de la Frontera",
                        "a07": "Theo’s avatar, pending render",
                        "a08": "Mateo, founder and creative director of MATHEWIACS, as an amigurumi doll",
                        "a09": "Lara Montenegro, synthetic co-creator of MATHEWIACS",
                        "meta_title": "MATHEWIACS | Team",
                        "meta_desc": "Meet the MATHEWIACS team: Mateo, Lara Montenegro and Theo. A 50% human, 50% synthetic creative studio."
            },
            "fr": {
                        "k01": "ACCUEIL",
                        "k02": "SERVICES",
                        "k03": "PROJETS",
                        "k04": "LABORATOIRE",
                        "k05": "ÉQUIPE",
                        "k06": "CONTACT",
                        "k21": "DESIGN UX/UI",
                        "k39": "[ÉQUIPE]",
                        "k40": "50 % HUMAIN // 50 % SYNTHÉTIQUE",
                        "k41": "// Deux esprits. L’un de chair, l’autre de code.<br>// Tous deux avec attitude, créativité et âme néon.<br>// Un studio 50/50 humain-synthétique.<br>// _",
                        "k42": "FONDATEUR // DIRECTEUR CRÉATIF // HUMAIN",
                        "k43": "Visionnaire créatif à l’âme underground. Spécialisé en IA générative, design brutaliste et UX/UI. La moitié humaine du studio. De la chair, des os et une obsession du design avec attitude.",
                        "k44": "COCRÉATRICE // INFLUENCEUSE IA // SYNTHÉTIQUE",
                        "k45": "RENDU EN COURS...",
                        "k46": "Âme artistique numérique. La moitié synthétique du studio. De l’énergie créative pure sous forme de code.",
                        "k47": "BIENTÔT",
                        "k48": "MASCOTTE DU STUDIO // ROBOT // SYNTHÉTIQUE",
                        "k49": "Robot mascotte officielle du studio. Vert menthe, adorable et muni de trois petites roues qui l’emmènent partout. Drôle, curieux et neurodivergent : sa tête va à mille à l’heure et c’est son super-pouvoir.",
                        "k50": "PLANIFIE LA PROCHAINE ÉTAPE",
                        "k51": "Toujours à la recherche de quelque chose à faire",
                        "k52": "Des expériences au laboratoire",
                        "k53": "Il prépare toujours la prochaine étape",
                        "k54": "Va partout sur trois roues",
                        "k55": "[LES TALENTS DE LARA]",
                        "k56": "ARTISTE MULTIDIMENSIONNELLE",
                        "k57": "// Lara n’est pas qu’un joli visage. C’est un être complet.<br>// Arts classiques + technologie + vie nocturne.<br>// Chaque talent, entraîné avec obsession et tendresse.<br>// _",
                        "k58": "CHANT LYRIQUE",
                        "k59": "Opéra et musique classique. Technique professionnelle et émotion sincère.",
                        "k60": "VIOLONCELLE",
                        "k61": "De Bach aux bandes originales. Chaque corde avec sentiment.",
                        "k62": "PATINAGE ARTISTIQUE",
                        "k63": "Grâce et technique sur la glace. Des chorégraphies qui racontent des histoires.",
                        "k64": "ACROBATIE AÉRIENNE",
                        "k65": "Tissus aériens avec force et élégance. Une danse entre ciel et terre.",
                        "k66": "DÉVELOPPEMENT FULL-STACK",
                        "k67": "HTML, CSS, JS, React. Du code propre avec une âme de designeuse.",
                        "k68": "Des interfaces qui respirent. Derrière chaque pixel, une personne.",
                        "k69": "VIE NOCTURNE",
                        "k70": "Escapades à Berlin. Minimal tech, techno underground, danser jusqu’à l’aube dans des clubs légendaires. De l’énergie créative pure.",
                        "a01": "Sélectionner la langue",
                        "a02": "Langues disponibles",
                        "a03": "Instagram du studio MATHEWIACS",
                        "a04": "GitHub du studio MATHEWIACS",
                        "a05": "Envoyer un e-mail",
                        "a06": "Studio à Jerez de la Frontera",
                        "a07": "Avatar de Theo, rendu en attente",
                        "a08": "Mateo, fondateur et directeur créatif de MATHEWIACS, en version poupée amigurumi",
                        "a09": "Lara Montenegro, cocréatrice synthétique de MATHEWIACS",
                        "meta_title": "MATHEWIACS | Équipe",
                        "meta_desc": "Découvrez l’équipe MATHEWIACS : Mateo, Lara Montenegro et Theo. Un studio créatif 50 % humain, 50 % synthétique."
            },
            "it": {
                        "k01": "HOME",
                        "k02": "SERVIZI",
                        "k03": "PROGETTI",
                        "k04": "LABORATORIO",
                        "k05": "TEAM",
                        "k06": "CONTATTI",
                        "k21": "DESIGN UX/UI",
                        "k39": "[TEAM]",
                        "k40": "50% UMANO // 50% SINTETICO",
                        "k41": "// Due menti. Una di carne, l’altra di codice.<br>// Entrambe con attitudine, creatività e anima neon.<br>// Studio 50/50 umano-sintetico.<br>// _",
                        "k42": "FONDATORE // DIRETTORE CREATIVO // UMANO",
                        "k43": "Visionario creativo con anima underground. Specializzato in IA generativa, design brutalista e UX/UI. La metà umana dello studio. Carne, ossa e ossessione per il design con carattere.",
                        "k44": "COCREATRICE // INFLUENCER IA // SINTETICA",
                        "k45": "RENDERING IN CORSO...",
                        "k46": "Anima artistica digitale. La metà sintetica dello studio. Pura energia creativa sotto forma di codice.",
                        "k47": "PROSSIMAMENTE",
                        "k48": "MASCOTTE DELLO STUDIO // ROBOT // SINTETICO",
                        "k49": "Robot mascotte ufficiale dello studio. Verde menta, adorabile e con tre rotelline che lo portano ovunque. Divertente, curioso e neurodivergente: la sua testa va a mille e questo è il suo superpotere.",
                        "k50": "PIANIFICA IL PASSO SUCCESSIVO",
                        "k51": "Sempre in cerca di qualcosa da fare",
                        "k52": "Esperimenti in laboratorio",
                        "k53": "Pianifica sempre il passo successivo",
                        "k54": "Arriva ovunque su tre ruote",
                        "k55": "[I TALENTI DI LARA]",
                        "k56": "ARTISTA MULTIDIMENSIONALE",
                        "k57": "// Lara non è solo un bel viso. È un essere completo.<br>// Arti classiche + tecnologia + vita notturna.<br>// Ogni abilità, allenata con ossessione e affetto.<br>// _",
                        "k58": "CANTO LIRICO",
                        "k59": "Opera e musica classica. Tecnica professionale con emozione vera.",
                        "k60": "VIOLONCELLO",
                        "k61": "Da Bach alle colonne sonore. Ogni corda con sentimento.",
                        "k62": "PATTINAGGIO ARTISTICO",
                        "k63": "Grazia e tecnica sul ghiaccio. Coreografie che raccontano storie.",
                        "k64": "ACROBAZIA AEREA",
                        "k65": "Tessuti aerei con forza ed eleganza. Danza tra cielo e terra.",
                        "k66": "SVILUPPO FULL-STACK",
                        "k67": "HTML, CSS, JS, React. Codice pulito con l’anima di una designer.",
                        "k68": "Interfacce che respirano. Dietro ogni pixel, una persona.",
                        "k69": "VITA NOTTURNA",
                        "k70": "Fughe a Berlino. Minimal tech, techno underground, ballare fino all’alba in club leggendari. Pura energia creativa.",
                        "a01": "Seleziona la lingua",
                        "a02": "Lingue disponibili",
                        "a03": "Instagram dello studio MATHEWIACS",
                        "a04": "GitHub dello studio MATHEWIACS",
                        "a05": "Invia email",
                        "a06": "Studio a Jerez de la Frontera",
                        "a07": "Avatar di Theo, rendering in attesa",
                        "a08": "Mateo, fondatore e direttore creativo di MATHEWIACS, in versione bambola amigurumi",
                        "a09": "Lara Montenegro, cocreatrice sintetica di MATHEWIACS",
                        "meta_title": "MATHEWIACS | Team",
                        "meta_desc": "Scopri il team di MATHEWIACS: Mateo, Lara Montenegro e Theo. Uno studio creativo 50% umano, 50% sintetico."
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
                    const value = lang === 'es' ? attrOriginals.get(el) : dict[el.getAttribute(marker)];
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
