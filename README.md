# MATHEWIACS · Mathew IA Creative Studio

Web oficial de **Mathew IA Creative Studio**, un estudio creativo digital de Jerez de la Frontera (Cádiz) especializado en diseño gráfico, branding, diseño web, UX/UI y arte generativo con inteligencia artificial.

🌐 **https://mathewiacs.com**

El estudio se basa en un modelo **50 % criterio humano · 50 % precisión sintética**: el humano dirige, la IA ejecuta y el humano cura.

---

## 📄 Páginas

| Página | Archivo | Qué contiene |
|---|---|---|
| Inicio | `index.html` | Presentación del estudio y resumen de servicios |
| Servicios | `servicios.html` | Página «EN CONSTRUCCIÓN» (el resumen de servicios está en Inicio) |
| Proyectos | `proyectos.html` | Casos de estudio (hoy: Proyecto Rubén) |
| Laboratorio | `laboratorio.html` | Carrusel de experimentos con IA, sonido, movimiento e interfaces |
| Equipo | `equipo.html` | Mateo, Lara Montenegro y THEO |
| Contacto | `contacto.html` | Formulario y datos de contacto |

---

## 🗂️ Estructura del proyecto

```
mathewiacs/
├── index.html · servicios.html · proyectos.html
├── laboratorio.html · equipo.html · contacto.html
├── assets/
│   ├── css/
│   │   └── global.css        ← TODO el estilo de la web, en un único archivo
│   ├── js/
│   │   ├── index.js          ← lógica de inicio, servicios y proyectos
│   │   ├── laboratorio.js    ← carrusel de experimentos
│   │   ├── equipo.js         ← página de equipo
│   │   ├── contacto.js       ← formulario y menú traducible
│   │   └── theo-chatbot.js   ← chatbot THEO
│   └── img/
│       ├── theo-640.webp     ← THEO (chatbot y tarjeta del equipo)
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

Todas las páginas cargan únicamente `assets/css/global.css`. Dentro está ordenado por secciones:

1. **Variables** (colores, tipografías, capas)
2. **Estilos de la web**: base, cabecera, hero, botones, servicios, footer, Equipo, Laboratorio, páginas internas, Contacto y responsive
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
- Los diccionarios están dentro de cada archivo JS de página (`index.js`, `equipo.js`, `laboratorio.js`).
- En **Contacto** se traducen la cabecera y el footer; el contenido propio de esa página está en español.

---

## 🤖 THEO, el robot del estudio

THEO es el chatbot mascota: un robot verde menta con ruedas que responde en el cristal de su pantalla.

- Es un chatbot **por reglas**: busca palabras clave en la pregunta y contesta con textos escritos de antemano. No usa ninguna API externa.
- Las respuestas están en la lista `TEMAS` de `assets/js/theo-chatbot.js`.
- `conocimiento.md` es el documento donde se escribe, con palabras normales, lo que THEO debe saber. Sirve de base para actualizar sus respuestas.
- La imagen es `assets/img/theo-640.webp`. Las posiciones de la pantalla (donde se dibuja el texto) están calibradas para esa imagen cuadrada: **si la cambias, mantén la proporción 1:1** o habrá que reajustarlas en `global.css`.

---

## ✏️ Cómo editar la web

**Cambiar un texto.** Edita el HTML de la página. Si el texto tiene `data-i18n`, cambia también su traducción en el JS de esa página.

**Cambiar un color.** Modifica la variable en el bloque `:root` de `global.css`.

**Añadir una página nueva.**
1. Copia una página existente (por ejemplo `servicios.html`).
2. Cambia el título, la descripción, la URL canónica y los textos.
3. Añade el enlace en el menú de **todas** las páginas.
4. Añade la página en `sitemap.xml`.

**Cambiar las imágenes del Laboratorio.** Ahora son imágenes de relleno de `picsum.photos`. Sustitúyelas por las tuyas (mejor en formato `.webp`) en `laboratorio.html`.

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
- Cada página tiene título, descripción, URL canónica, favicon e imagen para compartir (Open Graph y Twitter).
- `sitemap.xml` y `robots.txt` configurados.
- Foco visible al navegar con teclado y animaciones desactivadas si el usuario pide «reducir movimiento».
- El efecto de cursor se desactiva en pantallas táctiles, y la lluvia de fondo si se pide «reducir movimiento».

---

## 📝 Pendiente

- **Formulario de contacto**: todavía no envía mensajes (la interfaz está lista, falta conectarlo a un servicio de envío).
- **Redes**: LinkedIn, YouTube, TikTok y Spotify están en el footer pero aún sin enlace (`#`).
- **Servicios**: sustituir el aviso «EN CONSTRUCCIÓN» por el contenido real.
- **Laboratorio**: sustituir las imágenes de relleno por las reales.

---

© 2026 Mathew IA Creative Studio · Jerez de la Frontera
