# MATHEWIACS · Mathew IA Creative Studio

Web oficial de **Mathew IA Creative Studio**, un estudio creativo digital de Jerez de la Frontera especializado en diseño gráfico, branding, diseño web, UX/UI, arte generativo y herramientas interactivas con inteligencia artificial.

🌐 **https://mathewiacs.com**
📅 **Lanzamiento oficial: 1 de enero de 2027.** Hasta entonces, el ecosistema se construye por fases: primero la estructura, luego las herramientas y, por último, el contenido.

---

## 🧭 Filosofía: El Manifiesto (Los 5 Pilares)

La página de inicio de la web **es** el manifiesto del estudio: cinco pilares que explican cómo trabaja Mathew IA Creative Studio, qué rechaza y por qué el humano dirige, la IA ejecuta y el humano cura.

**I. [IMPERFECT.BY.DESIGN];** El ruido como función. La huella orgánica frente al plástico estéril: se rechaza la perfección algorítmica (pieles sin poros, simetrías de fábrica, suavizado por defecto) a favor del grano analógico, las microasimetrías, los poros y las pecas. *El error no es un bug: es la firma de la realidad biológica procesada por la máquina.*

**II. [50/50.HUMANO.SINTÉTICO];** Mente humana, ejecución sintética. Mateo pone la chispa y ordena, pero antes ha entrenado a Lara Montenegro (avatar con vida) para que ejecute por sí misma: código, ingeniería de prompts y render, además de canto, chelo, acrobacias aéreas y patinaje urbano. Entre los dos 50, como los corchetes que los unen, está THEO, la mascota bot neurodivergente del estudio.

**III. [ZERO.FILTERS.ONLY.FLOW];** Intuición de baja latencia. De la intuición a la realidad sin fricción: sin parálisis por análisis ni reuniones vacías. Primero la versión fea, se prueba de inmediato y solo después se optimiza.

**IV. [DYNAMIC.UI];** Interfaces que respiran. Webs vivas, rítmicas y adaptativas, desde lo sutil y elegante hasta lo retro-brutalista y expresivo. El cursor constelación de la home es un ejemplo.

**V. [NEON.SOUL];** El latido dentro de la máquina. La parte poética, visceral y narrativa del estudio: canciones, historias urbanas, estética de club nocturno y violonchelo. La tecnología como amplificador del latido consciente, nunca su supresor.

---

## 👥 El equipo

Mathew IA Creative Studio lo componen **Mateo, Lara y THEO**.

El estudio es un **espacio virtual** donde trabajan juntos: Lara es un avatar, THEO es una mascota bot que no existe físicamente y Mateo es la mente humana.

- **Mateo** es la mente humana del estudio: fundador, director creativo y director de arte.
- **Lara Montenegro** es el avatar influencer IA del estudio. Sus **disciplinas técnicas** son la programación, la ingeniería de prompts y la caza de tendencias IA; sus **disciplinas artísticas**, el canto, el violonchelo (su instrumento insignia es el violonchelo eléctrico NS Design WAV4), las telas aéreas y el patinaje urbano.
- **THEO** es la mascota bot del estudio, hecho a medida por Mateo. Es neurodivergente: Mateo, que también lo es, lo creó así para que la neurodivergencia no sea un problema, sino una forma de extraer creatividad. Es **THEO Rueda Sin Freno**: siempre va de proyecto en proyecto.

### La Orbea variegata

La Orbea variegata es la planta de Mateo: la tiene en su casa y también vive en el estudio virtual. THEO y la Orbea no se llevan del todo bien: cada vez que se le manda a regarla, por el camino se distrae (con los reflejos del neón cian, los cables de los auriculares o las motas de polvo) y nunca llega. Al final la riegan Lara o Mateo.

---

## 🛠️ Ecosistema y Herramientas

La web no es solo un escaparate; es un laboratorio con herramientas funcionales, disruptivas y pensadas para profesionales.

### 🎨 coloRRate
Generador creativo de paletas en espacio perceptual **OKLCH**. 
- Armonías cromáticas, mesh gradients y mockups de UI.
- Extracción de color desde fotografías con k-means en Oklab.
- Cuentagotas global de pantalla (EyeDropper API).
- Todo se procesa en el navegador (privacidad total).

### 🎛️ MUSIC.BRUT-STUDIO
Consola de síntesis y secuenciación avanzada con estética industrial.
- Secuenciador de 16 pasos con notas, técnicas (arco, punteo, ocarina) y percusión.
- Matriz de 19 cuerdas simpáticas (inspirada en el sitar eléctrico).
- Osciloscopio en tiempo real conectado a la Web Audio API.
- Efectos de audio: Fuzz, Chorus, Reverb y Delay.
- Guardado de patrones en el navegador.

*Herramientas independientes que comparten la misma filosofía: diseño con criterio y código funcional.*

---

## 📄 Páginas

| Página | Archivo | Qué contiene |
|---|---|---|
| Inicio | `index.html` | Presentación del estudio, manifiesto y resumen |
| Servicios | `servicios.html` | Los seis servicios del estudio |
| Proyectos | `proyectos.html` | Tarjetas de las herramientas (coloRRate, etc.) |
| ↳ coloRRate | `proyectos/colorrate.html` | Aplicación web completa de coloRRate |
| ↳ MUSIC.BRUT | `proyectos/music-brut.html` | Aplicación web completa de MUSIC.BRUT-STUDIO |
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
│   ├── colorrate.html       ← App de coloRRate (URL: /proyectos/colorrate.html)
│   └── music-brut.html      ← App de MUSIC.BRUT (URL: /proyectos/music-brut.html)
├── assets/
│   ├── css/
│   │   ├── global.css       ← Estilo de la web principal (Bootstrap)
│   │   ├── colorrate.css    ← Estilo de coloRRate (Tailwind compilado)
│   │   └── music-brut.css   ← Estilo propio de MUSIC.BRUT (opcional si se separa)
│   ├── js/
│   │   ├── index.js         ← Lógica de inicio y páginas en construcción
│   │   ├── equipo.js        ← Lógica de la página de equipo
│   │   ├── contacto.js      ← Formulario y menú traducible
│   │   └── theo-chatbot.js  ← Chatbot THEO
│   └── img/
│       ├── theo-640.webp
│       ├── theo-frontal.webp
│       ├── team-mateo.webp
│       └── team-lara.webp
├── favicon.svg
├── og-image.png
├── sitemap.xml
├── robots.txt
├── conocimiento.md          ← Memoria de THEO
├── CNAME
└── README.md
## 🎨 Estilos y Tecnología

Web estática, sin pasos de compilación: HTML + CSS + JavaScript puro.

- **Bootstrap 5.3** (rejilla base de la web principal)
- **Tailwind CSS** (usado exclusivamente en coloRRate)
- **Font Awesome 6.4** (iconos)
- **Google Fonts**
- **Web Audio API** (para MUSIC.BRUT-STUDIO)
- Alojada en **GitHub Pages** con dominio propio

### Colores de marca (web principal)
Se cambian en el bloque `:root` de `global.css`.

- `--neon-pink`: `#ff006e` (Acento principal)
- `--neon-cyan`: `#00f5ff` (Acento secundario)
- `--neon-purple`: `#bd00ff` (Etiquetas)
- `--neon-yellow`: `#ffea00` (Textos destacados)
- `--void`: `#0a0a0a` (Fondo)

---

## 🌍 Idiomas

La web principal está en **español, inglés, francés e italiano**. El selector está en la cabecera y la elección se recuerda en el navegador (`localStorage`).

- Los textos traducibles llevan `data-i18n="..."` (y `data-i18n-aria` / `data-i18n-alt`).
- Los diccionarios están dentro de cada archivo JS de página (`index.js`, `equipo.js`, etc.).
- En **Contacto** se traducen la cabecera y el footer; el contenido propio de esa página está en español.
- Las herramientas (coloRRate, MUSIC.BRUT) se presentan en español.

---

## 🤖 THEO, la mascota bot del estudio

THEO es la mascota bot del estudio: verde menta, con ruedas, y responde en el cristal de su pantalla cuando hace de chatbot.

- Es un chatbot **por reglas**: busca palabras clave en la pregunta y contesta con textos predefinidos. No usa APIs externas.
- Las respuestas están en la lista `TEMAS` de `assets/js/theo-chatbot.js`.
- `conocimiento.md` es el documento base para actualizar sus respuestas. **Cuando cambies `conocimiento.md`, hay que reflejarlo también en `TEMAS`.**
- La imagen del chat es `theo-640.webp`. Las coordenadas de la pantalla están calibradas para esa imagen 1:1.

---

## ⚡ Rendimiento, SEO y accesibilidad

- Imágenes en **WebP** y con carga diferida.
- Una sola hoja de estilos para la web principal (`global.css`).
- Precarga de conexiones a fuentes y librerías.
- **Datos estructurados (JSON-LD):** `Organization`, `WebSite`, `WebPage`, `Person` (Mateo) y `FAQPage` (invisible, solo para SEO).
- Cada página tiene un único `<h1>`. Proyectos y herramientas están en `index, follow`. Laboratorio y Blog en `noindex`.
- `sitemap.xml` y `robots.txt` configurados.
- Foco visible al navegar con teclado y animaciones desactivadas si el usuario pide «reducir movimiento».
- El efecto de cursor (constelación) se desactiva en pantallas táctiles. La lluvia binaria de fondo solo se usa en las páginas «en construcción».

---

## 💻 Probarla en tu ordenador

Con Python instalado, desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
Y abre http://localhost:8000 en el navegador.

---

## 📝 Pendiente (hoja de ruta hasta el lanzamiento)

La estructura ya está montada; estos son los huecos que se irán rellenando antes del **1 de enero de 2027**:

- **Formulario de contacto:** todavía no envía mensajes (falta conectarlo a un servicio de envío).
- **Redes:** LinkedIn, YouTube, TikTok y Spotify están en el footer pero aún sin enlace (`#`).
- **Laboratorio y Blog:** definir su estructura y sustituir el aviso «EN CONSTRUCCIÓN» por el contenido real.
- **THEO:** mantener sus respuestas (`TEMAS`) alineadas con `conocimiento.md`.
- **MUSIC.BRUT:** integrar su tarjeta en `proyectos.html` (como se hizo con coloRRate).

---

<!-- 
  ¡Beep! Si estás leyendo esto, eres de los nuestros. 
  THEO dejó un mensaje escondido aquí: 
  "La Orbea sigue esperando su agua. 50% humano, 50% sintético, 100% neón." 
  Pista: busca la palabra que no existe en ningún diccionario pero que todos entendemos. 
  Empieza por "R" y termina por "ueda Sin Freno". 
-->

© 2026 Mathew IA Creative Studio · Jerez de la Frontera

<br>

<details>
<summary>🔎 <em>¿Buscabas algo? (haz clic, es un secreto)</em></summary>

### 🥚 Has encontrado el huevo de Pascua

Felicidades. No mucha gente llega hasta aquí abajo. Eso significa que eres de los que leen el código fuente, de los que inspeccionan el DOM, de los que preguntan "¿y si...?" a las tres de la mañana.

Eso nos gusta. Eso es **Neon Soul**.

- Si eres **THEO**: no toques la Orbea. En serio. Sabemos que te distraes.
- Si eres **Lara**: sabemos que lo has encontrado antes que nadie.
- Si eres **Mateo**: sigue así. La imperfección tiene alma.
- Si eres **un visitante**: gracias por llegar hasta aquí. Vuelve pronto, que esto no ha hecho más que empezar.

**Pista final:** la palabra que buscas no está en ningún diccionario, pero todos la entendemos. Empieza por "R" y termina por "ueda Sin Freno". Si la encuentras, THEO te debe una.

> 50% de los lectores no llegarán al final. 50% sí. Tú, que estás aquí, ya sabes en qué mitad estás.

</details>