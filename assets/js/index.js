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
                if (href === '#') return;
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

        document.querySelectorAll('.service-card').forEach(el => {
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
                        "k07": "HUMAN",
                        "k08": "SYNTHETIC",
                        "k09": "View Work",
                        "k10": "Team",
                        "k11": "[SERVICES]",
                        "k12": "WHAT WE DO",
                        "k13": "// We don’t make boring corporate websites.<br>We create digital experiences that hit hard.",
                        "k14": "GENERATIVE AI ART",
                        "k15": "Midjourney, DALL-E 3, Stable Diffusion. Human art direction. No junk prompts.",
                        "k16": "Art Direction",
                        "k17": "BRUTAL BRANDING",
                        "k18": "Visual identities that don’t ask permission. Logos, branding, packaging with attitude.",
                        "k19": "Logo Design",
                        "k20": "Visual Identity",
                        "k21": "UX/UI DESIGN",
                        "k22": "Interfaces that work and feel right. Research, wireframes, prototypes, UI.",
                        "k23": "UX Research",
                        "k24": "UI Design",
                        "k25": "Prototyping",
                        "k26": "WEB & APP DEVELOPMENT",
                        "k27": "Clean code. Brutal performance. HTML, CSS, JS, React. No heavy frameworks.",
                        "k28": "Web Development",
                        "k29": "Performance",
                        "k30": "MULTIMEDIA CONTENT",
                        "k31": "Motion graphics, video, music. Content that connects emotionally and visually.",
                        "k32": "Video",
                        "k33": "Music",
                        "k34": "AI CONSULTING",
                        "k35": "We teach you to use AI without losing your soul. Workshops, training, optimization.",
                        "k36": "Training",
                        "k37": "Workshops",
                        "k38": "AI Strategy",
                        "hero_desc": "<span class=\"hero-yellow\">//[</span>Mathew<span class=\"hero-yellow\">][</span>IA<span class=\"hero-yellow\">][</span>CreativeStudio<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>ImperfectByDesign<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>ArtificialIntelligence<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>GraphicDesign<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>WebDesign<span class=\"hero-yellow\">][</span>UX/UI<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Marketing<span class=\"hero-yellow\">][</span>Branding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>MixedReality<span class=\"hero-yellow\">][</span>VR/AR<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>MotionGraphics<span class=\"hero-yellow\">][</span>3D<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Storytelling<span class=\"hero-yellow\">][</span>Worldbuilding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Video<span class=\"hero-yellow\">][</span>Music<span class=\"hero-yellow\">];</span>",
                        "a01": "Select language",
                        "a02": "Available languages",
                        "a04": "GitHub of the MATHEWIACS studio",
                        "a05": "Send email",
                        "a06": "Studio in Jerez de la Frontera",
                        "meta_title": "MATHEWIACS | Digital creative studio and branding",
                        "meta_desc": "MATHEWIACS is a digital creative studio specialized in graphic design, branding, web design, UX/UI and generative art with artificial intelligence."
            },
            "fr": {
                        "k01": "ACCUEIL",
                        "k02": "SERVICES",
                        "k03": "PROJETS",
                        "k04": "LABORATOIRE",
                        "k05": "ÉQUIPE",
                        "k06": "CONTACT",
                        "k07": "HUMAIN",
                        "k08": "SYNTHÉTIQUE",
                        "k09": "Voir les travaux",
                        "k10": "Équipe",
                        "k11": "[SERVICES]",
                        "k12": "CE QUE NOUS FAISONS",
                        "k13": "// Pas de sites d’entreprise ennuyeux.<br>Nous créons des expériences numériques qui frappent fort.",
                        "k14": "ART GÉNÉRATIF PAR IA",
                        "k15": "Midjourney, DALL-E 3, Stable Diffusion. Direction artistique humaine. Zéro prompt bâclé.",
                        "k16": "Direction artistique",
                        "k17": "BRANDING BRUTAL",
                        "k18": "Des identités visuelles qui ne demandent pas la permission. Logos, branding, packaging avec attitude.",
                        "k19": "Design de logo",
                        "k20": "Identité visuelle",
                        "k21": "DESIGN UX/UI",
                        "k22": "Des interfaces qui fonctionnent et font du bien. Recherche, wireframes, prototypes, UI.",
                        "k23": "Recherche UX",
                        "k24": "Design UI",
                        "k25": "Prototypage",
                        "k26": "DÉVELOPPEMENT WEB ET APP",
                        "k27": "Code propre. Performances brutales. HTML, CSS, JS, React. Sans frameworks lourds.",
                        "k28": "Développement web",
                        "k29": "Performance",
                        "k30": "CONTENU MULTIMÉDIA",
                        "k31": "Motion graphics, vidéo, musique. Un contenu qui touche sur le plan émotionnel et visuel.",
                        "k32": "Vidéo",
                        "k33": "Musique",
                        "k34": "CONSEIL EN IA",
                        "k35": "Nous vous apprenons à utiliser l’IA sans perdre votre âme. Ateliers, formation, optimisation.",
                        "k36": "Formation",
                        "k37": "Ateliers",
                        "k38": "Stratégie IA",
                        "hero_desc": "<span class=\"hero-yellow\">//[</span>Mathew<span class=\"hero-yellow\">][</span>IA<span class=\"hero-yellow\">][</span>CreativeStudio<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>ImperfectByDesign<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>IntelligenceArtificielle<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>DesignGraphique<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>DesignWeb<span class=\"hero-yellow\">][</span>UX/UI<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Marketing<span class=\"hero-yellow\">][</span>Branding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>RéalitéMixte<span class=\"hero-yellow\">][</span>VR/AR<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>MotionGraphics<span class=\"hero-yellow\">][</span>3D<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Storytelling<span class=\"hero-yellow\">][</span>Worldbuilding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Vidéo<span class=\"hero-yellow\">][</span>Musique<span class=\"hero-yellow\">];</span>",
                        "a01": "Sélectionner la langue",
                        "a02": "Langues disponibles",
                        "a04": "GitHub du studio MATHEWIACS",
                        "a05": "Envoyer un e-mail",
                        "a06": "Studio à Jerez de la Frontera",
                        "meta_title": "MATHEWIACS | Studio créatif numérique et branding",
                        "meta_desc": "MATHEWIACS est un studio créatif numérique spécialisé en design graphique, branding, design web, UX/UI et art génératif par intelligence artificielle."
            },
            "it": {
                        "k01": "HOME",
                        "k02": "SERVIZI",
                        "k03": "PROGETTI",
                        "k04": "LABORATORIO",
                        "k05": "TEAM",
                        "k06": "CONTATTI",
                        "k07": "UMANO",
                        "k08": "SINTETICO",
                        "k09": "Vedi i lavori",
                        "k10": "Team",
                        "k11": "[SERVIZI]",
                        "k12": "COSA FACCIAMO",
                        "k13": "// Non facciamo noiosi siti aziendali.<br>Creiamo esperienze digitali che colpiscono forte.",
                        "k14": "ARTE GENERATIVA CON IA",
                        "k15": "Midjourney, DALL-E 3, Stable Diffusion. Direzione artistica umana. Niente prompt spazzatura.",
                        "k16": "Direzione artistica",
                        "k17": "BRANDING BRUTALE",
                        "k18": "Identità visive che non chiedono permesso. Loghi, branding, packaging con carattere.",
                        "k19": "Design del logo",
                        "k20": "Identità visiva",
                        "k21": "DESIGN UX/UI",
                        "k22": "Interfacce che funzionano e si sentono bene. Ricerca, wireframe, prototipi, UI.",
                        "k23": "Ricerca UX",
                        "k24": "Design UI",
                        "k25": "Prototipazione",
                        "k26": "SVILUPPO WEB E APP",
                        "k27": "Codice pulito. Prestazioni brutali. HTML, CSS, JS, React. Niente framework pesanti.",
                        "k28": "Sviluppo web",
                        "k29": "Prestazioni",
                        "k30": "CONTENUTI MULTIMEDIALI",
                        "k31": "Motion graphics, video, musica. Contenuti che connettono a livello emotivo e visivo.",
                        "k32": "Video",
                        "k33": "Musica",
                        "k34": "CONSULENZA IA",
                        "k35": "Ti insegniamo a usare l’IA senza perdere l’anima. Workshop, formazione, ottimizzazione.",
                        "k36": "Formazione",
                        "k37": "Workshop",
                        "k38": "Strategia IA",
                        "hero_desc": "<span class=\"hero-yellow\">//[</span>Mathew<span class=\"hero-yellow\">][</span>IA<span class=\"hero-yellow\">][</span>CreativeStudio<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>ImperfectByDesign<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>IntelligenzaArtificiale<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>DesignGrafico<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>WebDesign<span class=\"hero-yellow\">][</span>UX/UI<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Marketing<span class=\"hero-yellow\">][</span>Branding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>RealtàMista<span class=\"hero-yellow\">][</span>VR/AR<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>MotionGraphics<span class=\"hero-yellow\">][</span>3D<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Storytelling<span class=\"hero-yellow\">][</span>Worldbuilding<span class=\"hero-yellow\">];</span><br><span class=\"hero-yellow\">//[</span>Video<span class=\"hero-yellow\">][</span>Musica<span class=\"hero-yellow\">];</span>",
                        "a01": "Seleziona la lingua",
                        "a02": "Lingue disponibili",
                        "a04": "GitHub dello studio MATHEWIACS",
                        "a05": "Invia email",
                        "a06": "Studio a Jerez de la Frontera",
                        "meta_title": "MATHEWIACS | Studio creativo digitale e branding",
                        "meta_desc": "MATHEWIACS è uno studio creativo digitale specializzato in graphic design, branding, web design, UX/UI e arte generativa con intelligenza artificiale."
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
