const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/connection');
const RolesAsignados = require('./RolesAsignados');

//https://sequelize.org/docs/v6/core-concepts/model-basics/
//https://stackoverflow.com/questions/29233896/sequelize-table-without-column-
//https://sebhastian.com/sequelize-timestamps/

//https://stackoverflow.com/questions/53882278/sequelize-association-called-with-something-thats-not-a-subclass-of-sequelize-m
const Persona = db.define('persona', {
    DNI: {
        type: DataTypes.STRING,
        primaryKey: true      //La establecemos como PK. En lugar de id por defecto.
    },
    Nombre: {
        type: DataTypes.STRING
    },
    Clave: {
        type: DataTypes.STRING
    },
    Tfno: {
        type: DataTypes.STRING
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'personas'
});
//Quitamos los atributos por defecto que trae de id, createdAt y updatedAt.
// Persona.removeAttribute('id');
// Persona.removeAttribute('createdAt');
// Persona.removeAttribute('updatedAt');
// Persona.hasMany(RolAsignado);
// Persona.belongsTo(RolesAsignados);
// Persona.belongsToMany(Roles, { through: RolesAsignados });
Persona.hasMany(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'DNIRol'});
module.exports = Persona;
// module.exports = (db, DataTypes) => Persona