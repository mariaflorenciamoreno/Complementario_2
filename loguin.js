class User {
    constructor(nombre, apellido, dni, email, pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.pass = pass
    }
}
const usuarios = [];
usuarios.push(new User("Jose", "Gonzalez" , 35330189, "jose@gmail.com", "admin"));
usuarios.push(new User("Florencia", "Moreno" , 3606551, "flor@gmail.com", "contraseña"));
usuarios.push(new User("Lara", "Weber" , 53564789, "lara@gmail.com", "clave"));
usuarios.push(new User("Bruno", "Gomes" , 28325977, "bruno@gmail.com", "password"));
usuarios.push(new User("Javier", "Gutierrez" , 13649156, "javier@gmail.com", "123456"));
console.log(usuarios);

function reestablecer(usuario, dni)
    {
        return usuarios.find(objeto => objeto.dni === dni);
    }
let opcion =  prompt("SELECCIONE 1 PARA REESTABLECER CONTRASEÑA");
    while (opcion != 'ESC') 
        {
            switch (opcion) 
                {
                    case "1":
                        let user = reestablecer(usuarios, parseInt(prompt('INGRESE DNI')));
                        if(user != undefined)
                            {
                                alert("SE ENVIO CORREO PARA REESTABLECER CONTRASEÑA A: "+user.email);
                            }
                        else
                            {
                                opcion = reestablecer(usuarios, parseInt(prompt('INGRESE 1 PARA REESTABLECER')));
                            }
                        break;
                    default:
                        opcion=prompt("INGRESE OPCION CORRECTA");
                        break;
                }
        }