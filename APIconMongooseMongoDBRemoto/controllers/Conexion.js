const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const dbConeection = async() => {
    try {
    //mongoose.connect("mongodb://" + process.env.DB_URL + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE);
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useCreateIndex: true,
            //useFindAndModify: false
        });
    console.log('Base de datos online');
    }
    catch(error){
        console.log(error);
        throw new Error('Error al iniciar la bd');
    }
}  

    

module.exports = dbConeection;
