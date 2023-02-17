# YAPAE - Yet another Ports & Adapters (a.k.a. Hexagonal Architecture) example
(El título queda en inglés, que si no, no se entiende).

He hablado de vez en cuando con varios equipos de desarrollo sobre el patrón de puertos y adaptadores y la arquitectura hexagonal. El hexágono habitual que muestra dónde se encuentran los modelos y los casos de uso y los puertos que muestran cuán bien se conectan ahora a una base de datos PostgreSQL y luego se migran casi sin esfuerzo a una base de datos No-SQL no les dice nada.

Siento que no he podido transmitir la ventaja de esta arquitectura a los miembros más jóvenes del equipo. Las personas mayores pueden recordar muchos casos en los que esta arquitectura podría ahorrarles horas de trabajo tedioso para actualizar una dependencia o migrar a un proveedor de servicios de correo electrónico o SMS diferente o cambiar la tecnología del repositorio de SQL a No-SQL.

Como resultado, después de 45 minutos de escucharme, las personas que ya sabían sobre arquitectura hexagonal no obtuvieron nada y las personas que no sabían sobre arquitectura hexagonal se confundieron. Tienen una nueva herramienta que los obliga a codificar más (un puerto y un adaptador) para algo que generalmente pueden resolver en 1 o 2 líneas de código.

Una situación no-win - no-win... :-S
## ¿Ahora que?
OK, la idea es crear un nuevo ejemplo con algunos pasos adicionales como POC de algunas de las ventajas de usar la arquitectura hexagonal. Como ejemplo, la aplicación de lista TODO habitual se implementa como una lambda sin servidor con un puerto principal para crear, actualizar, obtener o eliminar tareas de la lista.

Además, la documentación se facilitará en inglés y español. Siento que hay muy poca información en español. Lo sé, lo sé, el idioma universal del oficio es el inglés, pero agregar la complejidad de la traducción mientras se aprenden conceptos que a primera vista resultan extraños y complejos no es el mejor enfoque pedagógico. Como vivo en Portugal, espero aprender suficiente portugués para traducir también este documento (con la ayuda de la IA, por supuesto) a este idioma, que será muy pedagógico para mí :-D.

##La aplicación de lista TODO
El caso de uso es realmente simple. El usuario puede administrar una lista de tareas a través de las operaciones CRUD habituales. Se desarrollará un modelo simplista para la lista de tareas ya que la parte interesante de esta muestra son los puertos y los adaptadores.

La estructura de puertos y adaptadores será:

- Puerto principal: este es el puerto de comando que administra las solicitudes del usuario para crear, eliminar, actualizar y obtener tareas.
  - Adaptador primario CLI: se utilizará para ejecutar el programa para desarrollo y prueba. Sí, sé que existe un modelo de aplicación sin servidor, pero creo que de esta manera el código se integra mejor en el proceso de desarrollo de software para el equipo.
  - Adaptador principal de Lambda: este es el punto de entrada cuando se invoca el código como una función lambda. Es notable
- Puerto de persistencia: este puerto implementa los métodos para ejecutar las acciones CRUD en el repositorio.
  - Adaptador de persistencia simulado: Demasiado simplista para el caso real, pero permite desarrollar y probar sin una base de datos instalada. En la vida real, nunca pasaría a un código de producción que no haya sido probado con una infraestructura real.
  - Adaptador de persistencia de DynamoDb: la implementación de DynamoDB.
- Puerto de inicio de sesión: necesitamos un registro para almacenar todas las acciones
  - Adaptador de registro de archivos de texto: almacena todas las entradas de registro en un archivo de texto en la unidad local.
  - Adaptador de registro de S3: almacena todas las entradas de registro en un archivo de texto en un depósito de S3.