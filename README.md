# MATHEWIACS · Mathew IA Creative Studio

Web oficial de **Mathew IA Creative Studio**, un estudio creativo digital de Jerez de la Frontera (Cádiz) especializado en diseño gráfico, branding, diseño web, UX/UI y arte generativo con inteligencia artificial.

🌐 **https://mathewiacs.com**

El estudio se basa en un modelo **50 % criterio humano · 50 % precisión sintética**: el humano dirige, la IA ejecuta y el humano cura.

---

## 📄 Páginas

| Página | Archivo | Qué contiene |
|---|---|---|
| Inicio | `index.html` | Presentación del estudio y resumen de servicios |
| Servicios | `servicios.html` | Los seis servicios del estudio |
| Proyectos | `proyectos.html` | Escaparate de proyectos (hoy: coloRRate) |
| ↳ coloRRate | `proyectos/colorrate.html` | Generador de paletas de color en OKLCH, con diseño propio |
| Laboratorio | `laboratorio.html` | En construcción (`noindex`) |
| Blog | `blog.html` | En construcción (`noindex`) |
| Equipo | `equipo.html` | Mateo, Lara Montenegro y THEO |
| Contacto | `contacto.html` | Formulario y datos de contacto |

---

## 🗂️ Estructura del proyecto

```
mathewiacs/
├── index.html · servicios.html · proyectos.html
├── proyectos/
│   └── colorrate.html    ← herramienta coloRRate (URL: /proyectos/colorrate.html)
├── laboratorio.html · equipo.html · contacto.html
├── assets/
│   ├── css/
│   │   └── global.css        ← TODO el estilo de la web, en un único archivo
│   ├── js/
│   │   ├── index.js          ← lógica de inicio y de las páginas en construcción
│   │   ├── equipo.js         ← página de equipo
│   │   ├── contacto.js       ← formulario y menú traducible
│   │   └── theo-chatbot.js   ← chatbot THEO
│   └── img/
│       ├── theo-640.webp     ← THEO en tres cuartos (chatbot)
│       ├── theo-frontal.webp ← THEO de frente (tarjeta del equipo)
│       ├── team-mateo.webp
│       └── team-lara.webp
├── favicon.svg               ← icono de la pestaña
├── og-image.png              ← imagen al compartir en redes (1200×630)
├── sitemap.xml · robots.txt  ← buscadores
├── conocimiento.md           ← notas con lo que THEO debe saber
├── CNAME                     ← dominio mathewiacs.com para GitHub Pages
└── README.md
```

---

## 🛠️ Tecnología

Web estática, sin pasos de compilación: **HTML + CSS + JavaScript puro**.

- [Bootstrap 5.3](https://getbootstrap.com/) (rejilla y componentes base, desde CDN)
- [Font Awesome 6.4](https://fontawesome.com/) (iconos, desde CDN)
- Google Fonts: **Space Mono**, **Syncopate** e **Inter**
- Alojada en **GitHub Pages** con dominio propio

---

## 🎨 Estilos: una sola hoja

Todas las páginas de la web cargan únicamente `assets/css/global.css`. **La excepción es coloRRate**, que tiene su propio diseño (`assets/css/colorrate.css`) y comparte con el resto solo el footer. Dentro está ordenado por secciones:

1. **Variables** (colores, tipografías, capas)
2. **Estilos de la web**: base, cabecera, hero, botones, servicios, footer, Equipo, páginas en construcción, Contacto y responsive
3. **THEO**: widget del chatbot
4. **Cursor constelación** y lluvia de fondo
5. **Footer**: marca, redes y crédito
6. **Rendimiento y accesibilidad**

### Colores de marca

Se cambian en un solo sitio, el bloque `:root` al principio de `global.css`.

| Variable | Valor | Uso |
|---|---|---|
| `--neon-pink` | `#ff006e` | Acento principal |
| `--neon-cyan` | `#00f5ff` | Acento secundario |
| `--neon-purple` | `#bd00ff` | Etiquetas de sección |
| `--neon-yellow` | `#ffea00` | Textos destacados |
| `--void` | `#0a0a0a` | Fondo |

### Tipografías

`--font-display` (Syncopate, títulos) · `--font-mono` (Space Mono, etiquetas y textos técnicos) · `--font-body` (Inter, texto corrido).

> La página de Contacto tiene su bloque propio dentro de `global.css`, acotado con `body.page-contacto`, para que sus estilos no afecten al resto. Su cabecera y su footer son los mismos que los de las demás páginas.

---

## 🌍 Idiomas

La web está en **español, inglés, francés e italiano**. El selector está en la cabecera y la elección se recuerda en el navegador (`localStorage`, clave `mathewiacs-lang`).

- Los textos traducibles llevan `data-i18n="..."` (y `data-i18n-aria` / `data-i18n-alt` para atributos).
- Los diccionarios están dentro de cada archivo JS de página (`index.js` y `equipo.js`).
- En **Contacto** se traducen la cabecera y el footer; el contenido propio de esa página está en español.

---

## 🤖 THEO, el robot del estudio

THEO es el chatbot mascota: un robot verde menta con ruedas que responde en el cristal de su pantalla.

- Es un chatbot **por reglas**: busca palabras clave en la pregunta y contesta con textos escritos de antemano. No usa ninguna API externa.
- Las respuestas están en la lista `TEMAS` de `assets/js/theo-chatbot.js`.
- `conocimiento.md` es el documento donde se escribe, con palabras normales, lo que THEO debe saber. Sirve de base para actualizar sus respuestas.
- La imagen del chat es `assets/img/theo-640.webp` (tres cuartos). En la tarjeta del Equipo se usa `theo-frontal.webp`, de frente, como las fotos de Mateo y Lara. Las posiciones de la pantalla (donde se dibuja el texto) están calibradas para esa imagen cuadrada: **si la cambias, mantén la proporción 1:1** o habrá que reajustarlas en `global.css`.

---

## ✏️ Cómo editar la web

**Cambiar un texto.** Edita el HTML de la página. Si el texto tiene `data-i18n`, cambia también su traducción en el JS de esa página.

**Cambiar un color.** Modifica la variable en el bloque `:root` de `global.css`.

**Añadir una página nueva.**
1. Copia una página existente (por ejemplo `servicios.html`).
2. Cambia el título, la descripción, la URL canónica y los textos.
3. Añade el enlace en el menú de **todas** las páginas.
4. Añade la página en `sitemap.xml`.

**Rellenar una página en construcción** (Laboratorio o Blog). Hoy las dos muestran solo el aviso «EN CONSTRUCCIÓN». Cuando el contenido esté decidido, se sustituye el bloque `<main>` de esa página por la estructura nueva.

---

## 🚀 Probarla en tu ordenador

Con Python instalado, desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Y abre http://localhost:8000 en el navegador.

También sirve la extensión *Live Server* de Visual Studio Code. Abrir los archivos con doble clic funciona casi todo, pero el servidor local es más fiable.

---

## ⚡ Rendimiento, SEO y accesibilidad

- Imágenes en **WebP** y con carga diferida; ninguna va incrustada en el HTML.
- Una sola hoja de estilos, en lugar de varias.
- Precarga de las conexiones a fuentes y librerías.
- Cada página tiene título (50–60 caracteres), descripción (145–155), URL canónica, favicon e imagen para compartir (Open Graph y Twitter).
- **Datos estructurados (JSON-LD):** Inicio lleva `Organization` y `WebSite`; Equipo lleva `Person` (Mateo). Lara y THEO se describen como parte del estudio, pero no se marcan como personas, porque son una co-creadora sintética y una mascota.
- Cada página tiene un único `<h1>`. En Inicio hay una frase inicial que explica qué es el estudio.
- Las páginas en construcción (Laboratorio y Blog) llevan `noindex` y no están en `sitemap.xml`. **Cuando tengan contenido real, cambia `noindex, follow` por `index, follow` y añádelas al sitemap.**
- `sitemap.xml` y `robots.txt` configurados.
- Foco visible al navegar con teclado y animaciones desactivadas si el usuario pide «reducir movimiento».
- El efecto de cursor se desactiva en pantallas táctiles, y la lluvia de fondo si se pide «reducir movimiento».

---

## 📝 Pendiente

- **Formulario de contacto**: todavía no envía mensajes (la interfaz está lista, falta conectarlo a un servicio de envío).
- **Redes**: LinkedIn, YouTube, TikTok y Spotify están en el footer pero aún sin enlace (`#`).
- **Laboratorio y Blog**: definir su estructura y sustituir el aviso «EN CONSTRUCCIÓN» por el contenido real (y quitarles el `noindex`).

---

© 2026 Mathew IA Creative Studio · Jerez de la Frontera

---

## 🎨 coloRRate (`proyectos/colorrate.html`)

Herramienta independiente: generador de paletas de color en OKLCH con armonías, mesh gradients, mockup de interfaz y extracción de color desde fotos.

- Su CSS (`assets/css/colorrate.css`) es una versión **ya compilada** de Tailwind, para que cargue rápido. **No edites ese archivo a mano.** Si cambias las clases de Tailwind en el HTML, hay que volver a compilarlo.
- Todo se procesa en el navegador: no se envía ningún dato ni imagen a servidores.
- El footer es el de la web (vuelve a Inicio y lleva las redes). Las rutas usan `../` porque la página vive dentro de `/proyectos/`.
