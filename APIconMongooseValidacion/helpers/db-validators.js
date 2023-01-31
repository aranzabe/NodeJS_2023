const Usuario = require('../models/usuarioMongoose.js');
const Conexion = require('../controllers/Conexion');
const conx = new Conexion();

const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findOne({"id": id});
    if ( existeUsuario ) {
        throw new Error(`El id ${ id } existe `);
    }
}

const edadCorrecta = async(edad)=>{
    if (edad <0){
        throw new Error('Edad incorrecta');
    }
}


module.exports = {
    emailExiste,
    existeUsuarioPorId,
    edadCorrecta
}

