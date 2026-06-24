# 🚀 Colorfly Studio

Esta es una herramienta web simple que permite generar paletas de colores de forma rápida e intuitiva.

---

## 🛠️ Decisiones Técnicas y Buenas Prácticas

Para el desarrollo de este MVP, se priorizó la simplicidad, el rendimiento y las bases del desarrollo web profesional (Vanilla Architecture). A continuación se detallan las decisiones clave:

### 1. Arquitectura de Archivos (Separación de Conceptos)
Se rechazó la idea de mezclar código en un solo archivo. El proyecto se estructuró dividiendo estrictamente las responsabilidades:
* **HTML5** se encarga exclusivamente de la estructura y semántica.
* **CSS3** maneja de forma centralizada todo el diseño visual.
* **JavaScript (Vanilla)** controla la lógica de negocio y la interactividad.

### 2. Maquetación con CSS Grid (Diseño Responsivo)
En lugar de utilizar librerías externas o frameworks pesados, se utilizó **CSS Grid** nativo mediante la propiedad `repeat(auto-fit, minmax(180px, 1fr))`.
*Beneficio:* Permite que las tarjetas de colores se acomoden de forma automática y fluida en cualquier resolución de pantalla (Desktop, Notebook o Celulares), cumpliendo con el principio de *Responsive Web Design* con una sola línea de código.

### 3. Manipulación del DOM Dinámica y Eficiente
Para el renderizado de la paleta (6, 8 o 9 colores), JavaScript limpia el contenedor y genera los elementos mediante un bucle `for` tradicional, inyectando los bloques directamente. 
*Beneficio:* Evita la sobrecarga de la página y responde inmediatamente a los cambios de configuración del usuario en tiempo real.

### 4. Microfeedback Accesible (UI/UX)
Se implementó un sistema de notificaciones temporales (*Toasts*) mediante la API nativa `navigator.clipboard`. Al hacer clic en cualquier tarjeta, el código de color se guarda en el portapapeles del sistema y se despliega un aviso visual.
*Beneficio:* El usuario recibe una confirmación clara y rápida de que su acción fue exitosa sin interrumpir su navegación.

### 5. Accesibilidad Nativa (A11y)
El proyecto fue diseñado pensando en todos los usuarios:
* Uso de **etiquetas semánticas** (`<main>`, `<section>`, `<header>`) en lugar de divs genéricos.
* Vinculación explícita de elementos de formulario mediante `label for` e `id`.
* Atributos `aria-live` (`polite` y `assertive`) para que las tecnologías de asistencia (lectores de pantalla) detecten los cambios dinámicos cuando se genera o se copia un color.

---

## 📦 Pasos para Ejecutar la Aplicación en Local

Para abrir este proyecto en tu computadora, sigue estos pasos:

1. **Descarga el proyecto** o clónalo desde GitHub.
2. **Abre la carpeta** en tu editor de código (ej. Visual Studio Code).
3. **Ejecuta la app:**
   * *Si es HTML puro:* Haz doble clic en el archivo `index.html` o usa la extensión "Live Server".
   * *Si usa Node.js:* Abre la terminal y escribe `npm install` y luego `npm run dev` (o el comando que uses).

---

## 🚀 Pasos para el Despliegue (Deployment)

Para que cualquier persona pueda ver la app en internet:

1. La aplicación está subida a internet en: [Pega aquí el enlace de GitHub Pages, Vercel o Netlify si la subiste. Si no la has subido, pon: "Pendiente de subir a producción"].
2. Se desplegó conectando el repositorio de GitHub con la plataforma [Nombre de la plataforma].