const { Sequelize } = require('sequelize')

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
          this.conectar();
    }

    /**
     * Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, 
     * call sequelize.close() (which is asynchronous and returns a Promise).
     */
    conectar = async() => {
        try {
            await this.db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    desconectar = () => {
        this.db.close();
    }

    getlistado = async() => {
        let resultado = ['Fake'];
        this.conectar();
        console.log('Accediendo a los datos...')
        this.desconectar();
        return resultado;
    }

    getUsuario = async(dni) => {
        let resultado = [];
        this.conectar();
        try {
            resultado = await this.query('SELECT * FROM personas WHERE DNI = ?', [dni]);
            // console.log('Y aquí');
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    registrarUsuario = async(dni, nombre, clave, tfno) => {
        let resultado = 0;
        this.conectar();
        try {
            resultado = await this.query('INSERT INTO personas VALUES (?,?,?,?)', [dni, nombre, clave, tfno]);
            // console.log('Y aquí');
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    modificarUsuario = async(dni, nombre, clave, tfno) => {
        let resultado = 0;
        this.conectar();
        try {
            resultado = await this.query('UPDATE personas SET Nombre=?,Clave=?,Tfno=? WHERE DNI = ?', [nombre, clave, tfno, dni]);
            // console.log('Y aquí');
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }

    borrarUsuario = async(dni) => {
        let resultado = 0;
        this.conectar();
        try {
            resultado = await this.query('DELETE FROM  personas  WHERE DNI = ?', [dni]);
            // console.log('Y aquí');
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }
}

module.exports = ConexionSequilze;
