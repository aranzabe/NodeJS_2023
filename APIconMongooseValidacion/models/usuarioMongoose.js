const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const userSchema = new mongoose.Schema({
    id: { type: Number, 
          unique: true, 
          required : [true, 'Id obligatorio'] 
        },
    nombre: { type: String, 
              required : [true, 'Nombre obligatorio']
            },
    email: {
        type:String,
        required : [true, 'email obligatorio']
    },
    edad: { type: Number, 
            required : [true, 'Edad obligatoria'] 
          },
    rol: { type: String, 
           required : true,
           enum : ['Admin','Mindundi']
         },
    activo : {
        type: Boolean,
        default : false
    }
}, { collection: 'ejemplo2.usuarios' });


const User = mongoose.model('user', userSchema);

module.exports = User;