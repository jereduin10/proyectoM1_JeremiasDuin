🎨 Colorfly Studio

Colorfly Studio es una aplicación web que permite generar paletas de colores aleatorias para proyectos de diseño y desarrollo web.

El usuario puede elegir la cantidad de colores que desea generar y el formato de visualización (HEX o HSL). Cada color puede copiarse al portapapeles con un solo clic.

🚀 Características
Generación aleatoria de paletas de colores.
Selección de 6, 8 o 9 colores.
Soporte para formatos HEX y HSL.
Copiado de colores al portapapeles.
Notificaciones visuales (Toast).
Diseño responsive.
Implementación de buenas prácticas de accesibilidad.
🛠️ Tecnologías utilizadas
HTML5
CSS3
JavaScript (ES6)
📁 Estructura del proyecto
Colorfly-Studio/
│
├── index.html
├── style.css
├── script.js
└── README.md
▶️ Cómo ejecutar la aplicación
Clonar el repositorio:
git clone https://github.com/TU-USUARIO/Colorfly-Studio.git
Acceder a la carpeta del proyecto:
cd Colorfly-Studio
Abrir el archivo index.html en cualquier navegador moderno.

No requiere instalación de dependencias ni herramientas adicionales.

🌐 Despliegue

Este proyecto puede desplegarse fácilmente en plataformas de hosting estático como:

GitHub Pages
Netlify
Vercel
GitHub Pages
Subir el proyecto a GitHub.
Ir a Settings.
Seleccionar Pages.
Elegir la rama main.
Guardar los cambios.

GitHub generará automáticamente una URL pública para acceder a la aplicación.

💡 Decisiones técnicas

Durante el desarrollo se tomaron las siguientes decisiones:

Uso de HTML semántico para mejorar la organización y accesibilidad.
Separación del proyecto en archivos independientes (HTML, CSS y JavaScript).
Uso de Flexbox para construir un diseño adaptable a diferentes resoluciones.
Implementación de funciones independientes para facilitar el mantenimiento del código.
Creación dinámica de las tarjetas mediante JavaScript utilizando createElement() y appendChild().
Implementación de la API navigator.clipboard para copiar colores al portapapeles.
Uso de atributos aria-label y aria-live para mejorar la experiencia de usuarios que utilizan tecnologías asistivas.
Tipografía responsive mediante clamp().
📱 Responsive Design

La interfaz fue desarrollada para adaptarse correctamente a distintos tamaños de pantalla mediante:

Flexbox.
Distribución flexible de las tarjetas.
Tipografías adaptables.
Ajuste automático del contenido para dispositivos móviles y escritorio.
🔮 Mejoras futuras
Bloquear colores individuales.
Guardar paletas favoritas con Local Storage.
Exportar la paleta en formato JSON o CSS Variables.
Implementar modo oscuro.
Calcular contraste entre colores según WCAG.
Descargar la paleta como imagen.
👨‍💻 Autor

Jeremías Duin

Proyecto desarrollado como práctica de desarrollo Frontend utilizando HTML, CSS y JavaScript.