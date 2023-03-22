Pagina Web que utilizo como proyecto para mi amigo PEDRO 'PIEDRA ROTA' CIVERA SANCHEZ,
Utilizo la libreria de Normalize para dar ajustar los estilos predeterminados de los navegadores
Utilizo Sass para agrupar todas las hojas de estilos y luego compilarlas en CSS para que el navegador pueda aplicar los estilos
Utilizo Gulp para automatizar tareas como recompilación observando cambios en los archivos que elijo, y para al final minificar mi codigo para que sea mas ligero una vez lo envíe a producción
Mediante el archivo gulpfile.js voy creando las funciones o tareas que quiero ir ejecutando automaticamente
El package.json guarda los paquetes que instalo con npm y asi como los paquetes que dependan de esos paquetes para poder compartir mis proyectos y que lo desarrolladores puedan iniciar el proyecto con npm start, esto descarga las dependencias que tengo en mi archivo en mi caso son dependencias de desarrollo, lo que me permite ahorrar espacio ya que lo necesito solamente para desarrollar. Al instalar esas dependencias localmente, puedo omitir o incluso borrar la carpeta node_modules.
En mi caso la he puesto en archivo .gitignore para no subirlas al repositorio

Creo mixins para abreviar las medias queries para hacer la página responsive, así puedo agilizar mi codigo y me permite hacer mas facil la tarea de mantenimimento.

Aplico los estilos del header, con el video y aplicando una capa encima con transparencia, donde texto y posiciono el video para que no se superponga con la capa anterior y me permita seleccionar el texto

añado una seccion con contenido y le aplico estilos.

creo un mixin para agilizar tareas de estilo con grid, descargo el paquete con npm gulp-webp, implemento la funcionalidad de parallel para que una vez ejcute la tarea dev paralelamente mientras esta observando cambios en los archivos me vaya convirtiendo mis imagenes en webp.
Como estoy añadiendo tareas a mi gulpfile, ejecuto estas tareas con npx gulp tarea

Instalo una version especifica del paquete gulp-imagemin concretamente la 7.1.0 para minificar las imagenes ya que la versión mas reciente no funciona en este momento la 8.0.0
adicionalmente instalo el paquete gulp-cache, ya que el procesamiento de las imagenes con imagemin va a requerir tenerlas en caché
creo la tarea de minimizar imagenes exitosamente
instalo el paquete gulp-avif que es otro formato de imagenes muy reciente para tenerla como opcion de imagenes minificadas, a veces pesan menos que los generados con webp con el inconveniente que en este momento aun no lo soportan todos los navegadores
Una vez terminada la parte frontend del proyecto procedo a minificar el codigo, instalo las librerias de npm cssnano autoprefixer postcss y gulp-postcss
Instalo el paquete gulp-terser-js, que me ayuda a comprimir el archivo javaScript 
