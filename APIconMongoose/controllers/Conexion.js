const mongoose = require("mongoose");
const usuarios = require('../models/usuarioMongoose.js');

class Conexion {

    constructor(options) {
        mongoose.connect("mongodb://" + process.env.DB_URL + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE);
    }

    
    /**
     * Faltaría por meter las instrucciones de consulta en métodos asíncronos para un acceso más eficiente.
     */
    
    getlistado = async() => {
       
    }

    getUsuario = async(dni) => {
        
    }

    registrarUsuario = async(dni, nombre, clave, tfno) => {
       
    }

    modificarUsuario = async(dni, nombre, clave, tfno) => {
        
    }

    borrarUsuario = async(dni) => {
       
    }

    
}

module.exports = Conexion;
