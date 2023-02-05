const express = require('express');
const fileUpload = require('express-fileupload');
// const body_parser = require('body-parser');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        this.uploadsPath  = '/api/uploads';

        //Middlewares
        this.middlewares();

        this.routes();
        
    }

    middlewares() {
        //En esta sección cargamos una serie de herramientas necesarias para todas las rutas.
        //Para los middlewares como estamos acostumbrados a usarlos en Laravel ver userRoutes y userMiddlewares.
        //Para cors
        this.app.use(cors());
        //Para poder recibir la información que venga del body y parsearla de JSON, necesitamos importar lo siguiente.
        this.app.use(express.json());
        // this.app.use(body_parser.json());
        // this.app.use(body_parser.urlencoded({ extended: false }));

        // Fileupload - Carga de archivos.
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true  //Con esta opción si la carpeta de destino no existe, la crea.
        }));


        //Directorio públco: http://localhost:9090/  --> Habilitamos esto para ver como se cargaría una imagen desde el cliente.
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath , require('../routes/userRoutes'));
        this.app.use(this.uploadsPath, require('../routes/uploads'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;