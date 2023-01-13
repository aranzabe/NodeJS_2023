const { Sequelize } = require('sequelize');
const Persona = require('../models/Persona');

class ConexionSequilze {

    constructor() {
        this.db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
             },
          });
    }

    /**
     * Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, 
     * call sequelize.close() (which is asynchronous and returns a Promise).
     */
    conectar = () => {
        this.db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    desconectar = () => {
        //this.db.close();
        process.on('SIGINT', () => conn.close())
    }

    getlistado = async() => {
        let resultado = [];
        this.conectar();
        //console.log('Accediendo a los datos...')
        resultado = await Persona.findAll();
        this.desconectar();
        return resultado;
    }

    getUsuario = async(dni) => {
        let resultado = [];
        this.conectar();
        resultado = await Persona.findByPk(dni);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    //registrarUsuario = async(dni, nombre, clave, tfno) => {
    registrarUsuario = async(body) => {
        let resultado = 0;
        this.conectar();
        const usuarioNuevo = new Persona(body); //Con esto añade los timeStamps.
        await usuarioNuevo.save();
        this.desconectar();
        return resultado;
    }

    //modificarUsuario = async(dni, nombre, clave, tfno) => {
    modificarUsuario = async(dni, body) => {
        this.conectar();
        let resultado = await Persona.findByPk(dni);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarUsuario = async(dni) => {
        this.conectar();
        let resultado = await Persona.findByPk(dni);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionSequilze;
