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

        /* ===== Manifiesto: cada pilar aparece al llegar con el scroll ===== */
        const manifestoItems = document.querySelectorAll('.manifesto-item');
        const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (manifestoItems.length && !sinMovimiento && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
            manifestoItems.forEach(el => {
                el.classList.add('reveal');
                observer.observe(el);
            });
        }

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
                        "m01": "[MANIFESTO]",
                        "m02": "MANIFESTO",
                        "m03": "// Five principles that define how we think, create and build.",
                        "m04": "Half human mind, half synthetic execution, and THEO as the brackets that hold them together.",
                        "m05": "The beauty of the organic footprint over sterile plastic.",
                        "m06": "Direct, agile flow with no analysis paralysis.",
                        "m07": "A living, rhythmic, interactive digital stage.",
                        "m08": "The human heartbeat that lights up inside the machine.",
                        "m09": "The symmetry between Mateo’s judgment and strategic direction and Lara Montenegro’s execution capacity. The human mind holds the artistic vision, the emotion and the purpose, while the synthetic execution acts as a non-stop processing engine and audiovisual precision. And between the two stands <strong>THEO</strong>, who works like <strong>the brackets [ ]</strong> that hold both halves together: he is <strong>the human part</strong>, because he carries his creator’s neurodivergence and way of thinking inside him, and he is also <strong>the synthetic, digital part</strong>, because he is a robot avatar.",
                        "m10": "A flat rejection of the hyper-polished, impersonal look of conventional AI. We prioritize <strong>real textures</strong>, <strong>human micro-asymmetries</strong>, <strong>analog grain</strong> and <strong>calculated imperfections</strong> that give every asset character and truthfulness.",
                        "m11": "A method built for intense, <strong>neurodivergent</strong> creative rhythms (ADHD-friendly). It takes you from idea to <strong>immediate execution</strong>, removing bureaucratic filters, conceptual blocks and friction.",
                        "m12": "The website as a living, fluid experience, with <strong>custom cursors</strong>, <strong>cutting-edge micro-interactions</strong> and agile response that never overloads the user’s attention (<strong>Calm UI</strong>).",
                        "m13": "<strong>Pure emotion</strong>, <strong>poetry</strong> and <strong>visceral narrative</strong> running through the technological architecture, the dark systems and the language of the console.",
                        "m14": "(Human mind / Synthetic execution)",
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
                        "m01": "[MANIFESTE]",
                        "m02": "MANIFESTE",
                        "m03": "// Cinq principes qui définissent notre façon de penser, de créer et de construire.",
                        "m04": "Moitié esprit humain, moitié exécution synthétique, et THEO comme les crochets qui maintiennent les deux moitiés unies.",
                        "m05": "La beauté de l’empreinte organique face au plastique stérile.",
                        "m06": "Un flux direct et agile, sans paralysie par l’analyse.",
                        "m07": "Une scène numérique vivante, rythmée et interactive.",
                        "m08": "Le battement humain qui illumine l’intérieur de la machine.",
                        "m09": "La symétrie entre le jugement et la direction stratégique de Mateo et la capacité d’exécution de Lara Montenegro. L’esprit humain porte la vision artistique, l’émotion et le sens, tandis que l’exécution synthétique agit comme un moteur de traitement ininterrompu et de précision audiovisuelle. Et entre les deux se trouve <strong>THEO</strong>, qui fonctionne comme <strong>les crochets [ ]</strong> qui maintiennent unies les deux moitiés : il est <strong>la part humaine</strong>, car il porte en lui la neurodivergence et la façon de penser de son créateur, et il est aussi <strong>la part synthétique et numérique</strong>, car c’est un robot avatar.",
                        "m10": "Un rejet direct de l’esthétique hyper-lisse et impersonnelle de l’IA conventionnelle. Nous privilégions les <strong>textures réelles</strong>, les <strong>micro-asymétries humaines</strong>, le <strong>grain analogique</strong> et les <strong>imperfections calculées</strong> qui donnent du caractère et de la véracité à chaque contenu.",
                        "m11": "Une méthode adaptée aux rythmes créatifs intenses et <strong>neurodivergents</strong> (TDAH-friendly). Elle permet de passer de l’idée à <strong>l’exécution immédiate</strong>, en éliminant les filtres bureaucratiques, les blocages conceptuels et les frictions.",
                        "m12": "Le site comme expérience vivante et fluide, avec des <strong>curseurs personnalisés</strong>, des <strong>micro-interactions d’avant-garde</strong> et une réponse agile qui ne surcharge pas l’attention de l’utilisateur (<strong>Calm UI</strong>).",
                        "m13": "<strong>L’émotion pure</strong>, <strong>la poésie</strong> et <strong>le récit viscéral</strong> qui traversent l’architecture technologique, les systèmes sombres et le langage de la console.",
                        "m14": "(Esprit humain / Exécution synthétique)",
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
                        "m01": "[MANIFESTO]",
                        "m02": "MANIFESTO",
                        "m03": "// Cinque principi che definiscono come pensiamo, creiamo e costruiamo.",
                        "m04": "Metà mente umana, metà esecuzione sintetica, e THEO come le parentesi quadre che le tengono unite.",
                        "m05": "La bellezza dell’impronta organica contro la plastica sterile.",
                        "m06": "Un flusso diretto e agile, senza paralisi da analisi.",
                        "m07": "Un palcoscenico digitale vivo, ritmato e interattivo.",
                        "m08": "Il battito umano che illumina l’interno della macchina.",
                        "m09": "La simmetria tra il giudizio e la direzione strategica di Mateo e la capacità di esecuzione di Lara Montenegro. La mente umana sostiene la visione artistica, l’emozione e lo scopo, mentre l’esecuzione sintetica agisce come motore di elaborazione ininterrotta e precisione audiovisiva. E tra i due c’è <strong>THEO</strong>, che funziona come <strong>le parentesi quadre [ ]</strong> che tengono unite le due metà: è <strong>la parte umana</strong>, perché porta dentro la neurodivergenza e il modo di pensare del suo creatore, ed è anche <strong>la parte sintetica e digitale</strong>, perché è un robot avatar.",
                        "m10": "Un rifiuto netto dell’estetica iper-levigata e impersonale dell’IA convenzionale. Diamo priorità a <strong>texture reali</strong>, <strong>microasimmetrie umane</strong>, <strong>grana analogica</strong> e <strong>imperfezioni calcolate</strong> che danno carattere e verità a ogni asset.",
                        "m11": "Una metodologia pensata per ritmi creativi intensi e <strong>neurodivergenti</strong> (ADHD-friendly). Permette di passare dall’idea all’<strong>esecuzione immediata</strong>, eliminando filtri burocratici, blocchi concettuali e attriti.",
                        "m12": "Il sito come esperienza viva e fluida, con <strong>cursori personalizzati</strong>, <strong>micro-interazioni all’avanguardia</strong> e risposta agile che non sovraccarica l’attenzione dell’utente (<strong>Calm UI</strong>).",
                        "m13": "<strong>L’emozione pura</strong>, <strong>la poesia</strong> e <strong>la narrativa viscerale</strong> che attraversano l’architettura tecnologica, i sistemi oscuri e il linguaggio della console.",
                        "m14": "(Mente umana / Esecuzione sintetica)",
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
