const crud_command = process.argv[2];
const crud_argument = process.argv[3];
const ENTORNO = "CLI";
 

switch (command) {
  case "CREATE":
    if (argument) {
      console.log(`Comando ${crud_command} recibido con el argumento ${crud_argument}`);
    } else {
      console.log(`Falta el segundo argumento para el comando ${crud_command}`);
    }
    break;

  case "DELETE":
  case "UPDATE":
  case "READ":
    if (argument && !isNaN(crud_argument)) {
      console.log(`Comando ${crud_command} recibido con el argumento ${crud_argument}`);
    } else {
      console.log(`El segundo argumento debe ser un número para el comando ${crud_command}`);
    }
    break;

  default:
    console.log("Comando no reconocido. Los comandos válidos son: CREATE, DELETE, UPDATE, READ");
    break;
}