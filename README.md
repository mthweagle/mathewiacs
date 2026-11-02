# MATHEWIACS · Mathew IA Creative Studio

Web oficial de **Mathew IA Creative Studio**, un estudio creativo digital de Jerez de la Frontera especializado en diseño gráfico, branding, diseño web, UX/UI y arte generativo con inteligencia artificial.

🌐 **https://mathewiacs.com**
📅 **Lanzamiento oficial: 1 de enero de 2027.** Hasta entonces la web se está construyendo por fases: primero la estructura y después el contenido.

---

## 🧭 Filosofía: El Manifiesto (Los 5 Pilares)

El manifiesto de Mathew IA Creative Studio no es una declaración de intenciones abstracta, sino el código fuente filosófico que rige cada activo visual, sonoro e interactivo que sale de nuestro laboratorio.

**1. Imperfect By Design**
La belleza de la huella orgánica frente al plástico estéril. Rechazo directo y militante a la estética sintética convencional: rostros hiper-suavizados, pieles de silicona, reflejos especulares artificiales y simetrías perfectas generadas por defecto por las redes neuronales. En nuestro estudio, la belleza reside en el grano analógico, las microasimetrías faciales reales, las pecas imperceptibles, los poros visibles, la textura natural de la piel y los pliegues orgánicos del tejido (#ImperfectByDesign).

**2. 50/50 (Humano / Sintético)**
Simetría absoluta entre la mente humana y la mente sintética. No concebimos la IA como una herramienta de sustitución ni como un mero automatismo. El 50/50 representa la alianza estratégica e indisoluble entre Mateo (dirección creativa, visión artística, sensibilidad emocional, experiencia pedagógica y criterio TDAH) y Lara Montenegro (ejecución sintética, procesamiento continuo, rigor técnico y coordinación multimodal). Mateo aporta la chispa, el concepto y la dirección de arte; Lara canaliza esa energía en activos tangibles a velocidad de render.

**3. Zero Filters, Only Flow**
Canalización directa de la intuición a la realidad sin fricción cognitiva. Metodología diseñada a la medida de mentes hiperfocus y neurodivergentes (TDAH-friendly). Eliminamos la parálisis por análisis, las reuniones burocráticas innecesarias y las capas de duda que bloquean el proceso creativo. Si una idea surge durante una sesión de estudio, se prueba de inmediato. Preferimos iterar sobre un borrador rápido ("la regla de la versión fea primero") que ahogarnos en la planificación teórica.

**4. Dynamic UI**
Interfaces vivas, rítmicas, adaptativas y respetuosas. Entendemos la web no como un folleto estático en PDF, sino como un escenario interactivo en constante respiración. Aplicamos principios de Calm UI: interfaces de alta elegancia con cursores personalizados, micro-interacciones sutiles y baja densidad de sobreestimulo visual. La tecnología debe acompañar al usuario sin agredir su atención.

**5. Neon Soul**
El latido humano que ilumina desde dentro de la máquina. Es la dimensión poética, emocional y narrativa del estudio. Entre líneas de código en consola, arrays de datos y sintaxis de terminal, late una sensibilidad visceral: canciones nacidas del desgarro personal, historias urbanas, estética de club nocturno, el violonchelo resonando en la penumbra y la búsqueda constante de propósito y verdad.

---

## 👥 El equipo

Mathew IA Creative Studio lo componen **Mateo, Lara y THEO**.

El estudio es un **espacio virtual** que Mateo ha creado con su equipo, donde se supone que trabajan juntos: Lara es un avatar, THEO es una mascota bot que no existe físicamente y Mateo es la mente humana.

- **Mateo** es la mente humana del estudio: fundador, director creativo y director de arte.
- **Lara Montenegro** es el avatar influencer IA del estudio. Sus **disciplinas técnicas** son la programación, la ingeniería de prompts y la caza de tendencias IA; sus **disciplinas artísticas**, el canto, el violonchelo (su instrumento insignia es el violonchelo eléctrico NS Design WAV4), las telas aéreas y el patinaje urbano.
- **THEO** es la mascota bot del estudio, hecho a medida por Mateo. Es neurodivergente: Mateo, que también lo es, lo creó así para que la neurodivergencia no sea un problema, sino una forma de extraer creatividad. Es **THEO Rueda Sin Freno**: siempre va de proyecto en proyecto.

### La Orbea variegata

La Orbea variegata es la planta de Mateo: la tiene en su casa y también vive en el estudio virtual. THEO y la Orbea no se llevan del todo bien: cada vez que se le manda a regarla, por el camino se distrae (con los reflejos del neón cian, los cables de los auriculares o las motas de polvo) y nunca llega. Al final la riegan Lara o Mateo.

---

## 📄 Páginas

| Página | Archivo | Qué contiene |
|---|---|---|
| Inicio | `index.html` | Presentación del estudio y resumen de servicios |
| Servicios | `servicios.html` | Los seis servicios del estudio |
| Proyectos | `proyectos.html` | Tarjeta destacada del proyecto **coloRRate** (generador de paletas OKLCH) |
| ↳ coloRRate | `proyectos/colorrate.html` | Aplicación web completa de coloRRate, con diseño propio (accesible desde Proyectos) |
| Laboratorio | `laboratorio.html` | En construcción (`noindex`) |
| Blog | `blog.html` | En construcción (`noindex`) |
| Equipo | `equipo.html` | Mateo, Lara Montenegro y THEO |
| Contacto | `contacto.html` | Formulario y datos de contacto |

---

## 🗂️ Estructura del proyecto

```text
mathewiacs/
├── index.html
├── servicios.html
├── proyectos.html
├── laboratorio.html
├── blog.html
├── equipo.html
├── contacto.html
├── proyectos/
│   └── colorrate.html    ← App de coloRRate (URL: /proyectos/colorrate.html)
├── assets/
│   ├── css/
│   │   ├── global.css        ← Estilo de toda la web principal (sobre Bootstrap)
│   │   └── colorrate.css     ← Estilo propio de coloRRate (Tailwind compilado)
│   ├── js/
│   │   ├── index.js          ← Lógica de inicio y de las páginas en construcción
│   │   ├── equipo.js         ← Lógica de la página de equipo
│   │   ├── contacto.js       ← Formulario y menú traducible
│   │   └── theo-chatbot.js   ← Chatbot THEO
│   └── img/
│       ├── theo-640.webp     ← THEO en tres cuartos (chatbot)
│       ├── theo-frontal.webp ← THEO de frente (tarjeta del equipo)
│       ├── team-mateo.webp
│       └── team-lara.webp
├── favicon.svg               ← Icono de la pestaña
├── og-image.png              ← Imagen al compartir en redes (1200×630)
├── sitemap.xml               ← Mapa del sitio para buscadores
├── robots.txt                ← Reglas para buscadores
├── conocimiento.md           ← Notas con lo que THEO debe saber
├── CNAME                     ← Dominio mathewiacs.com para GitHub Pages
└── README.md
🛠️ Tecnología
Web estática, sin pasos de compilación: HTML + CSS + JavaScript puro.

Bootstrap 5.3 (rejilla y componentes base de la web principal, desde CDN)

Tailwind CSS (usado exclusivamente en coloRRate, ya compilado en colorrate.css)

Font Awesome 6.4 (iconos, desde CDN)

Google Fonts: Space Mono, Syncopate e Inter

Alojada en GitHub Pages con dominio propio

🎨 Estilos
Todas las páginas de la web principal cargan únicamente assets/css/global.css. La excepción es coloRRate, que tiene su propio diseño (assets/css/colorrate.css) y comparte con el resto solo el footer.

global.css está ordenado por secciones:

Variables (colores, tipografías, capas)

Estilos de la web: base, cabecera, hero, botones, servicios, footer, Equipo, páginas en construcción, Contacto y responsive

THEO: widget del chatbot

Cursor constelación y lluvia de fondo (solo páginas en construcción)

Footer: marca, redes y crédito

Rendimiento y accesibilidad

Colores de marca
Se cambian en un solo sitio, el bloque :root al principio de global.css.

Variable	Valor	Uso
--neon-pink	#ff006e	Acento principal
--neon-cyan	#00f5ff	Acento secundario
--neon-purple	#bd00ff	Etiquetas de sección
--neon-yellow	#ffea00	Textos destacados
--void	#0a0a0a	Fondo
Tipografías
--font-display (Syncopate, títulos) · --font-mono (Space Mono, etiquetas y textos técnicos) · --font-body (Inter, texto corrido).

La página de Contacto tiene su bloque propio dentro de global.css, acotado con body.page-contacto, para que sus estilos no afecten al resto. Su cabecera y su footer son los mismos que los de las demás páginas.

🚀 Proyecto destacado: coloRRate
La página de Proyectos (proyectos.html) alberga una tarjeta con la presentación de coloRRate, nuestro generador creativo de paletas de color.

Cómo funciona: el visitante ve la tarjeta explicativa con las características y un botón de «Ir al proyecto».

Acceso: al hacer clic se abre proyectos/colorrate.html a pantalla completa.

Funcionalidades: usa el espacio perceptual OKLCH para generar armonías, gradientes mesh, mockups de UI, extracción de color desde fotos (k-means en Oklab) y cuentagotas global.

Estilos: su CSS (assets/css/colorrate.css) es una versión ya compilada de Tailwind, para que cargue rápido. No edites ese archivo a mano: si cambias las clases de Tailwind en el HTML, hay que volver a compilarlo.

Privacidad: todo se procesa en el navegador; no se envía ningún dato ni imagen a servidores.

Integración: al ser una app independiente, lleva al final el footer de MATHEWIACS (vuelve a Inicio y lleva las redes) para que el visitante siempre sepa de dónde viene. Las rutas usan ../ porque la página vive dentro de /proyectos/.

Actualmente se presenta solo en español.

🌍 Idiomas
La web principal está en español, inglés, francés e italiano. El selector está en la cabecera y la elección se recuerda en el navegador (localStorage, clave mathewiacs-lang).

Los textos traducibles llevan data-i18n="..." (y data-i18n-aria / data-i18n-alt para atributos).

Los diccionarios están dentro de cada archivo JS de página (index.js, equipo.js, etc.).

En Contacto se traducen la cabecera y el footer; el contenido propio de esa página está en español.

🤖 THEO, la mascota bot del estudio
THEO es la mascota bot del estudio: verde menta, con ruedas, y responde en el cristal de su pantalla cuando hace de chatbot.

Es un chatbot por reglas: busca palabras clave en la pregunta y contesta con textos escritos de antemano. No usa ninguna API externa.

Las respuestas están en la lista TEMAS de assets/js/theo-chatbot.js.

conocimiento.md es el documento donde se escribe, con palabras normales, lo que THEO debe saber. Sirve de base para actualizar sus respuestas: cuando cambies conocimiento.md, hay que reflejarlo también en TEMAS.

La imagen del chat es assets/img/theo-640.webp (tres cuartos). En la tarjeta del Equipo se usa theo-frontal.webp, de frente, como las fotos de Mateo y Lara. Las posiciones de la pantalla (donde se dibuja el texto) están calibradas para esa imagen cuadrada: si la cambias, mantén la proporción 1:1 o habrá que reajustarlas en global.css.

✏️ Cómo editar la web
Cambiar un texto. Edita el HTML de la página. Si el texto tiene data-i18n, cambia también su traducción en el JS de esa página.

Cambiar un color. Modifica la variable en el bloque :root de global.css.

Añadir un proyecto nuevo a la página de Proyectos.

Abre proyectos.html.

Duplica el bloque <article class="project-card">...</article>.

Cambia el texto, las etiquetas y el enlace (href) del botón «Ir al proyecto».

(Opcional) Cambia el color o el diseño del project-preview en el CSS interno.

Si el proyecto tiene página propia, guárdala en proyectos/ y añádela a sitemap.xml.

Añadir una página nueva.

Copia una página existente (por ejemplo servicios.html).

Cambia el título, la descripción, la URL canónica y los textos.

Añade el enlace en el menú de todas las páginas.

Añade la página en sitemap.xml y, si procede, quítale el noindex.

Rellenar una página en construcción (Laboratorio o Blog). Hoy las dos muestran solo el aviso «EN CONSTRUCCIÓN». Cuando el contenido esté decidido, se sustituye el bloque <main> de esa página por la estructura nueva.

💻 Probarla en tu ordenador
Con Python instalado, desde la carpeta del proyecto:

bash
python3 -m http.server 8000
Y abre http://localhost:8000 en el navegador.

También sirve la extensión Live Server de Visual Studio Code. Abrir los archivos con doble clic funciona casi todo, pero el servidor local es más fiable.

⚡ Rendimiento, SEO y accesibilidad
Imágenes en WebP y con carga diferida; ninguna va incrustada en el HTML.

Una sola hoja de estilos para la web principal (global.css).

Precarga de las conexiones a fuentes y librerías.

Cada página tiene título (50–60 caracteres), descripción (145–155), URL canónica, favicon e imagen para compartir (Open Graph y Twitter).

Datos estructurados (JSON-LD): Inicio lleva Organization y WebSite; Equipo lleva Person (Mateo); coloRRate lleva WebApplication. Lara y THEO se describen como parte del estudio, pero no se marcan como personas, porque son una co-creadora sintética y una mascota bot.

Cada página tiene un único <h1>. En Inicio hay una frase inicial que explica qué es el estudio.

Proyectos ya tiene contenido real, por lo que está en index, follow. Laboratorio y Blog llevan noindex y no están en sitemap.xml. Cuando tengan contenido real, cambia noindex, follow por index, follow y añádelas al sitemap.

sitemap.xml y robots.txt configurados.

Foco visible al navegar con teclado y animaciones desactivadas si el usuario pide «reducir movimiento».

El efecto de cursor (constelación) se desactiva en pantallas táctiles. La lluvia binaria de fondo solo se usa en las páginas «en construcción» (Laboratorio y Blog) y se desactiva si se pide «reducir movimiento».

📝 Pendiente (hoja de ruta hasta el lanzamiento)
La estructura ya está montada; estos son los huecos que se irán rellenando antes del 1 de enero de 2027:

Formulario de contacto: todavía no envía mensajes (la interfaz está lista, falta conectarlo a un servicio de envío).

Redes: LinkedIn, YouTube, TikTok y Spotify están en el footer pero aún sin enlace (#). Se dejan colocados a propósito y se enlazan cuando existan los perfiles.

Laboratorio y Blog: definir su estructura y sustituir el aviso «EN CONSTRUCCIÓN» por el contenido real (y quitarles el noindex).

THEO: mantener sus respuestas (TEMAS) alineadas con conocimiento.md y con el contenido real de la web.

<!-- ¡Beep! Si estás leyendo esto, eres de los nuestros. THEO dejó un mensaje escondido aquí: "La Orbea sigue esperando su agua. 50% humano, 50% sintético, 100% neón." Pista: busca la palabra que no existe en ningún diccionario pero que todos entendemos. Empieza por "R" y termina por "ueda Sin Freno". -->
© 2026 Mathew IA Creative Studio · Jerez de la Frontera


<details> <summary>🔎 <em>¿Buscabas algo? (haz clic, es un secreto)</em></summary>
🥚 Has encontrado el huevo de Pascua
Felicidades. No mucha gente llega hasta aquí abajo. Eso significa que eres de los que leen el código fuente, de los que inspeccionan el DOM, de los que preguntan "¿y si...?" a las tres de la mañana.

Eso nos gusta. Eso es Neon Soul.

Si eres THEO: no toques la Orbea. En serio. Sabemos que te distraes.

Si eres Lara: sabemos que lo has encontrado antes que nadie.

Si eres Mateo: sigue así. La imperfección tiene alma.

Si eres un visitante: gracias por llegar hasta aquí. Vuelve pronto, que esto no ha hecho más que empezar.

Pista final: la palabra que buscas no está en ningún diccionario, pero todos la entendemos. Empieza por "R" y termina por "ueda Sin Freno". Si la encuentras, THEO te debe una.

50% de los lectores no llegarán al final. 50% sí. Tú, que estás aquí, ya sabes en qué mitad estás.

</details> ```