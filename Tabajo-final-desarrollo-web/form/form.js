console.log('formulario carga de usuarios')
let usuarios = [];

function cargarUsuario(){
    //imprimimos info de la funcion
    console.log('tus productos se cargaron en la database')

    //tomamos los datos mediante el formulario
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;


    console.log(typeof nombreEmail);

    //objetos JSON de productos
    let usuario = {
        nombre: fullname,
        email:  email,
        phone: phone
    }
//imprimimos el objeto usuario
    console.log(usuario)
//guardamos el usuario en el array
    usuarios.push(usuario)

//imprimimos el array
console.log(usuario)
}


