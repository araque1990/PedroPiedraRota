Pagina Web que utilizo como proyecto para mi amigo PEDRO 'PIEDRA ROTA' CIVERA SANCHEZ,
Utilizo la libreria de Normalize para dar ajustar los estilos predeterminados de los navegadores
Utilizo Sass para agrupar todas las hojas de estilos y luego compilarlas en CSS para que el navegador pueda aplicar los estilos
Utilizo Gulp para automatizar tareas como recompilación observando cambios en los archivos que elijo, y para al final minificar mi codigo para que sea mas ligero una vez lo envíe a producción
Mediante el archivo gulpfile.js voy creando las funciones o tareas que quiero ir ejecutando automaticamente
El package.json guarda los paquetes que instalo con npm y asi como los paquetes que dependan de esos paquetes para poder compartir mis proyectos y que lo desarrolladores puedan iniciar el proyecto con npm start, esto descarga las dependencias que tengo en mi archivo en mi caso son dependencias de desarrollo, lo que me permite ahorrar espacio ya que lo necesito solamente para desarrollar. Al instalar esas dependencias localmente, puedo omitir o incluso borrar la carpeta node_modules.
En mi caso la he puesto en archivo .gitignore para no subirlas al repositorio

Creo mixins para abreviar las medias queries para hacer la página responsive, así puedo agilizar mi codigo y me permite hacer mas facil la tarea de mantenimimento.

Aplico los estilos del header, con el video y aplicando una capa encima con transparencia, donde texto y posiciono el video para que no se superponga con la capa anterior y me permita seleccionar el texto
