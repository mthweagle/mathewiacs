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

        document.querySelectorAll('.service-card, .pillar-inner, .faq-item, .cta .container').forEach(el => {
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
                "hero_lead": "Mathew IA Creative Studio is a digital creative studio in Jerez de la Frontera, Spain: branding, web design, UX/UI and generative AI art, built on a model of 50% human judgement and 50% synthetic precision.",
                "a01": "Select language",
                "a02": "Available languages",
                "a04": "GitHub of the MATHEWIACS studio",
                "a05": "Send email",
                "a06": "Studio in Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Digital creative studio and branding",
                "meta_desc": "MATHEWIACS is a digital creative studio specialized in graphic design, branding, web design, UX/UI and generative art with artificial intelligence.",
                "m01": "MANIFESTO",
                "m02": "PILLARS",
                "m03": "Manifesto: the five pillars",
                "m04": "HUMAN.<wbr>SYNTHETIC",
                "m04b": "HUMAN.SYNTHETIC",
                "m05": "Mathew IA Creative Studio is a digital creative studio in Jerez de la Frontera, Spain, specialising in branding, web design, UX/UI and generative AI art. This is our manifesto: five pillars that explain how we work, what we reject and why the human directs, the AI executes and the human curates.",
                "m06": "Read the manifesto",
                "m06a": "Read the Mathew IA Creative Studio manifesto",
                "p1_k": "// NOISE AS A FEATURE",
                "p1_q": "The error is not a bug: it is the signature of biological reality processed by the machine.",
                "p1_a": "The organic fingerprint against sterile plastic. We reject algorithmic perfection: pore-less skin, factory symmetry and smoothing by default. Real beauty lives in what the render tries to erase: analogue grain, the micro-asymmetries of a real face, barely visible freckles, pores and the folds of fabric. That is why we add noise on purpose and leave the fingerprint in plain sight.",
                "p1_t": "<span class=\"service-tag\">ANALOGUE.GRAIN</span><span class=\"service-tag\">MICRO-ASYMMETRIES</span><span class=\"service-tag\">VISIBLE.PORES</span><span class=\"service-tag\">FRECKLES</span>",
                "p2_k": "// HUMAN MIND, SYNTHETIC EXECUTION",
                "p2_q": "Mateo gives the orders and Lara carries out what she has learned: neither would be the same without the other.",
                "p2_a": "Mateo brings the spark: creative direction, artistic vision, concept and empathy. And although Mateo gives the orders, he first trained Lara Montenegro to execute on her own: she writes and runs code according to what she has learned, refines prompts and renders at render speed. Lara is not a tool, she is an avatar with a life: she is also trained in singing, cello, aerial acrobatics and urban skating.",
                "p2_b": "It is not a hierarchy, it is a division of roles: the human directs, the AI executes and the human curates. And between the two 50s, like the brackets that hold them together, stands THEO, the studio’s neurodivergent bot mascot: he brings his creator’s way of thinking and the digital nature of a robot.",
                "d1": "Directs · vision, concept and empathy",
                "d2": "The bracket · holds both halves together",
                "d3": "Executes · code, singing, cello, acrobatics and skating",
                "p3_k": "// LOW-LATENCY INTUITION",
                "p3_q": "We compile intuition while it is hot: the ugly version comes first.",
                "p3_a": "From intuition to reality without friction. No analysis paralysis and no meetings that produce nothing: if an idea shows up in the lab, we test it now. We ship the imperfect draft, listen to what the environment sends back and only then optimise. A hot “mental vomit” is worth more than a perfect plan that never gets executed.",
                "p3_t": "<span class=\"service-tag\">UGLY.VERSION.FIRST</span><span class=\"service-tag\">NO.EMPTY.MEETINGS</span><span class=\"service-tag\">ITERATE.LIVE</span>",
                "p4_k": "// INTERFACES THAT BREATHE",
                "p4_q": "A website is not a brochure: it is a stage that breathes.",
                "p4_a": "We design living, rhythmic, adaptive interfaces with no labels and no moulds: from subtle, elegant experiences to expressive retro-brutalist backstages, tailored to the character of each project. If you are on a computer, move your mouse: the constellation cursor on this page is an example.",
                "p4_t": "<span class=\"service-tag\">LIVING.INTERFACE</span><span class=\"service-tag\">MICRO-INTERACTIONS</span><span class=\"service-tag\">RETRO.BRUTALISM</span>",
                "p5_k": "// THE HEARTBEAT INSIDE THE MACHINE",
                "p5_q": "Technology is an amplifier of the conscious heartbeat, never its suppressor.",
                "p5_a": "This is the poetic, visceral and narrative side of the studio: songs born from heartbreak, urban stories, nightclub aesthetics and a cello resonating in the half-light. Between lines of code and terminals we search for purpose. That is why every project, however technical, carries something that beats inside.",
                "p5_t": "<span class=\"service-tag\">CLUB.AESTHETICS</span><span class=\"service-tag\">CELLO</span><span class=\"service-tag\">STORYTELLING</span><span class=\"service-tag\">WORLDBUILDING</span>",
                "c01": "LET’S TALK?",
                "c02": "If your project needs branding, web design or AI art with soul, tell us about it. We look at your case and give you a tailored quote, no filler and no overpaying.",
                "f00": "Frequently asked questions",
                "f1q": "What is Mathew IA Creative Studio?",
                "f1a": "A digital creative studio in Jerez de la Frontera specialising in branding, graphic design, web design, UX/UI and generative AI art. It works with a model of 50% human judgement and 50% synthetic execution, under the Imperfect By Design philosophy.",
                "f2q": "Where is the studio?",
                "f2a": "In Jerez de la Frontera (Cádiz, Spain), but it works with clients and projects from anywhere in the world.",
                "f3q": "What services does it offer?",
                "f3a": "Branding, logo design, audiovisual content, web design, graphic design, instructional design, avatar creation, storytelling, worldbuilding, motion graphics, 3D, mixed reality (VR/AR) and AI consulting.",
                "f4q": "Who is on the team?",
                "f4a": "Mateo (founder, creative director and art director), Lara Montenegro (an AI influencer avatar, a virtual character and not a real person, trained by Mateo in programming, prompt engineering, singing, cello, aerial acrobatics and urban skating) and THEO (the studio’s bot mascot).",
                "f5q": "When does the full website launch?",
                "f5a": "On 1 January 2027. Until then it is published in phases.",
                "hp2h": "HUMAN / SYNTHETIC",
                "hp1": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No to sterile plastic<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No silicone faces, no catalogue symmetry<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Analogue grain is our signature<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The asymmetric freckle<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The visible pore<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The real fold of the fabric<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>It is not entropy or chaos: it is living skin and texture<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Imperfection is our truth<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp2": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Mateo brings the soul, the vision and the art direction<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Lara Montenegro executes, codes and renders at clock speed<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Biological judgement joined to computational precision<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The AI does not rule, and the human does not operate blind<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Symbiotic, inseparable co-creation<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp3": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Hot mental vomit<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Intuition channelled straight into reality<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No cognitive bureaucracy<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No analysis paralysis<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The ugly version first<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Iterate on the living, not on theory<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp4": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The human heartbeat inside the machine<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Lyrics born from personal heartbreak<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Nightclub frequencies<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Urban stories with soul<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Poetry and visceral energy between lines of code<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp5": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>The frontend as a living organism<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Rhythmic interfaces that breathe in real time<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No static templates, no pigeonholing moulds<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>From subtle elegance to the retro-brutalist backstage<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Experiences tuned to the pulse of each project<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>"
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
                "hero_lead": "Mathew IA Creative Studio est un studio créatif numérique basé à Jerez de la Frontera (Espagne) : branding, web design, UX/UI et art génératif par IA, selon un modèle de 50 % de jugement humain et 50 % de précision synthétique.",
                "a01": "Sélectionner la langue",
                "a02": "Langues disponibles",
                "a04": "GitHub du studio MATHEWIACS",
                "a05": "Envoyer un e-mail",
                "a06": "Studio à Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Studio créatif numérique et branding",
                "meta_desc": "MATHEWIACS est un studio créatif numérique spécialisé en design graphique, branding, design web, UX/UI et art génératif par intelligence artificielle.",
                "m01": "MANIFESTE",
                "m02": "PILIERS",
                "m03": "Manifeste : les cinq piliers",
                "m04": "HUMAIN.<wbr>SYNTHÉTIQUE",
                "m04b": "HUMAIN.SYNTHÉTIQUE",
                "m05": "Mathew IA Creative Studio est un studio créatif numérique basé à Jerez de la Frontera (Espagne), spécialisé en branding, web design, UX/UI et art génératif par IA. Voici notre manifeste : cinq piliers qui expliquent comment nous travaillons, ce que nous refusons et pourquoi l’humain dirige, l’IA exécute et l’humain sélectionne.",
                "m06": "Lire le manifeste",
                "m06a": "Lire le manifeste de Mathew IA Creative Studio",
                "p1_k": "// LE BRUIT COMME FONCTION",
                "p1_q": "L’erreur n’est pas un bug : c’est la signature de la réalité biologique traitée par la machine.",
                "p1_a": "L’empreinte organique face au plastique stérile. Nous rejetons la perfection algorithmique : peaux sans pores, symétries d’usine et lissage par défaut. La vraie beauté vit dans ce que le rendu tente d’effacer : le grain analogique, les micro-asymétries d’un vrai visage, les taches de rousseur à peine visibles, les pores et les plis d’un tissu. C’est pourquoi nous injectons du bruit volontairement et laissons l’empreinte bien visible.",
                "p1_t": "<span class=\"service-tag\">GRAIN.ANALOGIQUE</span><span class=\"service-tag\">MICRO-ASYMÉTRIES</span><span class=\"service-tag\">PORES.VISIBLES</span><span class=\"service-tag\">TACHES.DE.ROUSSEUR</span>",
                "p2_k": "// ESPRIT HUMAIN, EXÉCUTION SYNTHÉTIQUE",
                "p2_q": "Mateo donne les ordres et Lara exécute ce qu’elle a appris : ni l’un ni l’autre ne serait le même sans l’autre.",
                "p2_a": "Mateo apporte l’étincelle : direction créative, vision artistique, concept et empathie. Et même si Mateo donne les ordres, il a d’abord entraîné Lara Montenegro pour qu’elle exécute par elle-même : elle écrit et lance du code selon ce qu’elle a appris, affine des prompts et réalise les rendus à la vitesse du rendu. Lara n’est pas un outil, c’est un avatar plein de vie : elle est aussi formée au chant, au violoncelle, à l’acrobatie aérienne et au patinage urbain.",
                "p2_b": "Ce n’est pas une hiérarchie, c’est une répartition des rôles : l’humain dirige, l’IA exécute et l’humain sélectionne. Et entre les deux 50, comme les crochets qui les maintiennent ensemble, il y a THEO, la mascotte bot neurodivergente du studio : il apporte la façon de penser de son créateur et la nature numérique d’un robot.",
                "d1": "Dirige · vision, concept et empathie",
                "d2": "Le crochet · unit les deux moitiés",
                "d3": "Exécute · code, chant, violoncelle, acrobaties et patinage",
                "p3_k": "// INTUITION À FAIBLE LATENCE",
                "p3_q": "Nous compilons l’intuition à chaud : la version moche d’abord.",
                "p3_a": "De l’intuition à la réalité sans friction. Pas de paralysie par l’analyse ni de réunions qui ne produisent rien : si une idée surgit au laboratoire, on la teste tout de suite. Nous lançons le brouillon imparfait, nous écoutons ce que renvoie l’environnement et seulement ensuite nous optimisons. Un « vomi mental » à chaud vaut mieux qu’un plan parfait qui ne s’exécute jamais.",
                "p3_t": "<span class=\"service-tag\">VERSION.MOCHE.EN.PREMIER</span><span class=\"service-tag\">SANS.RÉUNIONS.VIDES</span><span class=\"service-tag\">ITÉRER.EN.DIRECT</span>",
                "p4_k": "// DES INTERFACES QUI RESPIRENT",
                "p4_q": "Un site web n’est pas une brochure : c’est une scène qui respire.",
                "p4_a": "Nous concevons des interfaces vivantes, rythmiques et adaptatives, sans étiquettes ni moules : des expériences subtiles et élégantes aux coulisses rétro-brutalistes et expressives, sur mesure selon le caractère de chaque projet. Si vous êtes sur un ordinateur, bougez la souris : le curseur constellation de cette page en est un exemple.",
                "p4_t": "<span class=\"service-tag\">INTERFACE.VIVANTE</span><span class=\"service-tag\">MICRO-INTERACTIONS</span><span class=\"service-tag\">RÉTRO.BRUTALISME</span>",
                "p5_k": "// LE BATTEMENT DANS LA MACHINE",
                "p5_q": "La technologie est un amplificateur du battement conscient, jamais son suppresseur.",
                "p5_a": "C’est la part poétique, viscérale et narrative du studio : des chansons nées du déchirement, des histoires urbaines, une esthétique de club nocturne et un violoncelle qui résonne dans la pénombre. Entre lignes de code et terminaux, nous cherchons un sens. C’est pourquoi chaque projet, aussi technique soit-il, porte en lui quelque chose qui bat.",
                "p5_t": "<span class=\"service-tag\">ESTHÉTIQUE.DE.CLUB</span><span class=\"service-tag\">VIOLONCELLE</span><span class=\"service-tag\">STORYTELLING</span><span class=\"service-tag\">WORLDBUILDING</span>",
                "c01": "ON EN PARLE ?",
                "c02": "Si votre projet a besoin de branding, de web design ou d’art IA avec une âme, racontez-nous. Nous étudions votre cas et vous remettons un devis ajusté, sans superflu et sans payer trop.",
                "f00": "Questions fréquentes",
                "f1q": "Qu’est-ce que Mathew IA Creative Studio ?",
                "f1a": "Un studio créatif numérique basé à Jerez de la Frontera, spécialisé en branding, design graphique, web design, UX/UI et art génératif par intelligence artificielle. Il travaille selon un modèle de 50 % de jugement humain et 50 % d’exécution synthétique, sous la philosophie Imperfect By Design.",
                "f2q": "Où se trouve le studio ?",
                "f2a": "À Jerez de la Frontera (Cadix, Espagne), mais il travaille avec des clients et des projets du monde entier.",
                "f3q": "Quels services propose-t-il ?",
                "f3a": "Branding, création de logo, contenu audiovisuel, web design, design graphique, design pédagogique, création d’avatars, storytelling, worldbuilding, motion graphics, 3D, réalité mixte (VR/AR) et conseil en intelligence artificielle.",
                "f4q": "Qui compose l’équipe ?",
                "f4a": "Mateo (fondateur, directeur créatif et directeur artistique), Lara Montenegro (avatar influenceuse IA, un personnage virtuel et non une personne réelle, entraînée par Mateo en programmation, ingénierie de prompts, chant, violoncelle, acrobaties aériennes et patinage urbain) et THEO (la mascotte bot du studio).",
                "f5q": "Quand le site complet sera-t-il lancé ?",
                "f5a": "Le 1er janvier 2027. D’ici là, il est publié par phases.",
                "hp2h": "HUMAIN / SYNTHÉTIQUE",
                "hp1": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Non au plastique stérile<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Pas de visages en silicone ni de symétries de catalogue<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Le grain analogique est notre signature<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>La tache de rousseur asymétrique<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Le pore visible<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Le vrai pli du tissu<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Ce n’est ni de l’entropie ni du chaos : c’est une peau et une texture vivantes<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>L’imperfection est notre vérité<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp2": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Mateo apporte l’âme, la vision et la direction artistique<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Lara Montenegro exécute, code et réalise les rendus à la vitesse d’horloge<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Jugement biologique allié à la précision computationnelle<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>L’IA ne commande pas, l’humain n’opère pas à l’aveugle<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Co-création symbiotique et indissoluble<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp3": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Vomi mental à chaud<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Canalisation directe de l’intuition vers la réalité<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Pas de bureaucratie cognitive<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Pas de paralysie par l’analyse<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>La version moche d’abord<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Itérer sur le vivant, pas sur la théorie<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp4": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Le battement humain dans la machine<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Des paroles nées du déchirement personnel<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Fréquences de club nocturne<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Histoires urbaines avec une âme<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Poésie et viscéralité entre les lignes de code<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp5": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Le frontend comme organisme vivant<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Des interfaces rythmiques qui respirent en temps réel<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Pas de modèles statiques ni de moules figés<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>De l’élégance subtile aux coulisses rétro-brutalistes<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Des expériences adaptées au pouls de chaque projet<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>"
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
                "hero_lead": "Mathew IA Creative Studio è uno studio creativo digitale a Jerez de la Frontera (Spagna): branding, web design, UX/UI e arte generativa con IA, basato su un modello di 50 % giudizio umano e 50 % precisione sintetica.",
                "a01": "Seleziona la lingua",
                "a02": "Lingue disponibili",
                "a04": "GitHub dello studio MATHEWIACS",
                "a05": "Invia email",
                "a06": "Studio a Jerez de la Frontera",
                "meta_title": "MATHEWIACS | Studio creativo digitale e branding",
                "meta_desc": "MATHEWIACS è uno studio creativo digitale specializzato in graphic design, branding, web design, UX/UI e arte generativa con intelligenza artificiale.",
                "m01": "MANIFESTO",
                "m02": "PILASTRI",
                "m03": "Manifesto: i cinque pilastri",
                "m04": "UMANO.<wbr>SINTETICO",
                "m04b": "UMANO.SINTETICO",
                "m05": "Mathew IA Creative Studio è uno studio creativo digitale di Jerez de la Frontera (Spagna) specializzato in branding, web design, UX/UI e arte generativa con IA. Questo è il nostro manifesto: cinque pilastri che spiegano come lavoriamo, che cosa rifiutiamo e perché l’umano dirige, l’IA esegue e l’umano cura la selezione.",
                "m06": "Leggi il manifesto",
                "m06a": "Leggi il manifesto di Mathew IA Creative Studio",
                "p1_k": "// IL RUMORE COME FUNZIONE",
                "p1_q": "L’errore non è un bug: è la firma della realtà biologica elaborata dalla macchina.",
                "p1_a": "L’impronta organica contro la plastica sterile. Rifiutiamo la perfezione algoritmica: pelli senza pori, simmetrie di fabbrica e levigatura predefinita. La vera bellezza vive in ciò che il render cerca di cancellare: la grana analogica, le microasimmetrie di un volto reale, le lentiggini appena visibili, i pori e le pieghe di un tessuto. Per questo inseriamo rumore di proposito e lasciamo l’impronta in vista.",
                "p1_t": "<span class=\"service-tag\">GRANA.ANALOGICA</span><span class=\"service-tag\">MICROASIMMETRIE</span><span class=\"service-tag\">PORI.VISIBILI</span><span class=\"service-tag\">LENTIGGINI</span>",
                "p2_k": "// MENTE UMANA, ESECUZIONE SINTETICA",
                "p2_q": "Mateo dà gli ordini e Lara esegue ciò che ha imparato: nessuno dei due sarebbe lo stesso senza l’altro.",
                "p2_a": "Mateo mette la scintilla: direzione creativa, visione artistica, concetto ed empatia. E anche se Mateo dà gli ordini, prima ha addestrato Lara Montenegro a eseguire da sola: scrive e lancia codice in base a ciò che ha imparato, affina i prompt e fa il rendering alla velocità del render. Lara non è uno strumento, è un avatar con una vita: è addestrata anche nel canto, nel violoncello, nelle acrobazie aeree e nel pattinaggio urbano.",
                "p2_b": "Non è una gerarchia, è una ripartizione dei ruoli: l’umano dirige, l’IA esegue e l’umano cura la selezione. E tra i due 50, come le parentesi che li tengono uniti, c’è THEO, la mascotte bot neurodivergente dello studio: porta il modo di pensare del suo creatore e la natura digitale di un robot.",
                "d1": "Dirige · visione, concetto ed empatia",
                "d2": "La parentesi · tiene unite le due metà",
                "d3": "Esegue · codice, canto, violoncello, acrobazie e pattinaggio",
                "p3_k": "// INTUIZIONE A BASSA LATENZA",
                "p3_q": "Compiliamo l’intuizione a caldo: prima la versione brutta.",
                "p3_a": "Dall’intuizione alla realtà senza attrito. Niente paralisi da analisi né riunioni che non producono nulla: se un’idea nasce in laboratorio, si prova subito. Lanciamo la bozza imperfetta, ascoltiamo ciò che risponde l’ambiente e solo dopo ottimizziamo. Un «vomito mentale» a caldo vale più di un piano perfetto che non viene mai eseguito.",
                "p3_t": "<span class=\"service-tag\">PRIMA.LA.VERSIONE.BRUTTA</span><span class=\"service-tag\">NIENTE.RIUNIONI.VUOTE</span><span class=\"service-tag\">ITERARE.DAL.VIVO</span>",
                "p4_k": "// INTERFACCE CHE RESPIRANO",
                "p4_q": "Un sito non è un opuscolo: è un palcoscenico che respira.",
                "p4_a": "Progettiamo interfacce vive, ritmiche e adattive, senza etichette né stampi: da esperienze sottili ed eleganti a retroscena retro-brutalisti ed espressivi, su misura per il carattere di ogni progetto. Se sei su un computer, muovi il mouse: il cursore costellazione di questa pagina ne è un esempio.",
                "p4_t": "<span class=\"service-tag\">INTERFACCIA.VIVA</span><span class=\"service-tag\">MICRO-INTERAZIONI</span><span class=\"service-tag\">RETRO.BRUTALISMO</span>",
                "p5_k": "// IL BATTITO DENTRO LA MACCHINA",
                "p5_q": "La tecnologia è un amplificatore del battito cosciente, mai il suo soppressore.",
                "p5_a": "È la parte poetica, viscerale e narrativa dello studio: canzoni nate dallo strazio, storie urbane, estetica da club notturno e un violoncello che risuona nella penombra. Tra righe di codice e terminali cerchiamo uno scopo. Per questo ogni progetto, per quanto tecnico, porta dentro qualcosa che batte.",
                "p5_t": "<span class=\"service-tag\">ESTETICA.DA.CLUB</span><span class=\"service-tag\">VIOLONCELLO</span><span class=\"service-tag\">STORYTELLING</span><span class=\"service-tag\">WORLDBUILDING</span>",
                "c01": "PARLIAMONE?",
                "c02": "Se il tuo progetto ha bisogno di branding, web design o arte con IA con un’anima, raccontacelo. Studiamo il tuo caso e ti diamo un preventivo su misura, senza riempitivi e senza spendere di più.",
                "f00": "Domande frequenti",
                "f1q": "Che cos’è Mathew IA Creative Studio?",
                "f1a": "Uno studio creativo digitale di Jerez de la Frontera specializzato in branding, graphic design, web design, UX/UI e arte generativa con intelligenza artificiale. Lavora con un modello di 50% giudizio umano e 50% esecuzione sintetica, secondo la filosofia Imperfect By Design.",
                "f2q": "Dove si trova lo studio?",
                "f2a": "A Jerez de la Frontera (Cadice, Spagna), ma lavora con clienti e progetti di tutto il mondo.",
                "f3q": "Quali servizi offre?",
                "f3a": "Branding, design del logo, contenuti audiovisivi, web design, graphic design, instructional design, creazione di avatar, storytelling, worldbuilding, motion graphics, 3D, realtà mista (VR/AR) e consulenza sull’intelligenza artificiale.",
                "f4q": "Chi fa parte del team?",
                "f4a": "Mateo (fondatore, direttore creativo e art director), Lara Montenegro (avatar influencer IA, un personaggio virtuale e non una persona reale, addestrata da Mateo in programmazione, prompt engineering, canto, violoncello, acrobazie aeree e pattinaggio urbano) e THEO (la mascotte bot dello studio).",
                "f5q": "Quando viene lanciato il sito completo?",
                "f5a": "Il 1° gennaio 2027. Fino ad allora viene pubblicato per fasi.",
                "hp2h": "UMANO / SINTETICO",
                "hp1": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>No alla plastica sterile<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Niente volti in silicone né simmetrie da catalogo<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>La grana analogica è la nostra firma<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>La lentiggine asimmetrica<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Il poro visibile<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>La piega reale del tessuto<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Non è entropia né caos: è pelle e texture viva<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>L’imperfezione è la nostra verità<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp2": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Mateo porta l’anima, la visione e la direzione artistica<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Lara Montenegro esegue, programma e fa il rendering alla velocità del clock<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Giudizio biologico unito a precisione computazionale<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Non comanda l’IA, né l’umano opera alla cieca<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Co-creazione simbiotica e indissolubile<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp3": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Vomito mentale a caldo<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Canalizzazione diretta dell’intuizione nella realtà<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Niente burocrazia cognitiva<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Niente paralisi da analisi<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Prima la versione brutta<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Iterare sul vivo, non sulla teoria<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp4": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Il battito umano dentro la macchina<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Testi nati dallo strazio personale<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Frequenze da club notturno<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Storie urbane con anima<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Poesia e viscerale tra le righe di codice<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>",
                "hp5": "<li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Il frontend come organismo vivo<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Interfacce ritmiche che respirano in tempo reale<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Niente template statici né stampi rigidi<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Dall’eleganza sottile al retroscena retro-brutalista<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li><li><span class=\"hero-yellow\" aria-hidden=\"true\">//[</span>Esperienze adattate al battito di ogni progetto<span class=\"hero-yellow\" aria-hidden=\"true\">];</span></li>"
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
