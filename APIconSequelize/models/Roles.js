const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/connection');
const RolesAsignados = require('./RolesAsignados');


//https://sequelize.org/docs/v6/core-concepts/model-basics/
//https://stackoverflow.com/questions/29233896/sequelize-table-without-column-
//https://sebhastian.com/sequelize-timestamps/
//https://www.bezkoder.com/sequelize-associate-one-to-many/
const Roles = db.define('roles', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true      //La establecemos como PK. En lugar de id por defecto.
    },
    descripcion: {
        type: DataTypes.STRING,
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'roles'
});
//Quitamos los atributos por defecto que trae de id, createdAt y updatedAt.
// Persona.removeAttribute('id');
// Persona.removeAttribute('createdAt');
// Persona.removeAttribute('updatedAt');

Roles.hasMany(RolesAsignados, {as: 'RolesAsignados', foreignKey: 'idRol'});
module.exports =  Roles;