const { Sequelize, DataTypes, Model }= require('sequelize');
const db = require('../controllers/connection');
// const Persona = require('./Persona');
// const Rol = require('./Roles');


//https://sequelize.org/docs/v6/core-concepts/model-basics/
//https://stackoverflow.com/questions/29233896/sequelize-table-without-column-
//https://sebhastian.com/sequelize-timestamps/
//https://www.bezkoder.com/sequelize-associate-one-to-many/
//https://codehandbook.org/implement-has-many-association-in-sequelize/
const RolesAsignados = db.define('rolesasignado', {
    idra: {
        type: DataTypes.BIGINT,
        primaryKey: true      //La establecemos como PK. En lugar de id por defecto.
    },
    DNIRol: {
        type: DataTypes.STRING,
        // references: {
        //     model: Persona,
        //     key: 'DNI'
        //   }
    },
    idRol: {
        type: DataTypes.BIGINT,
        // references: {
        //     model: Rol,
        //     key: 'id'
        //   }
    },
},
{ 
    timestamps: false 
},
{
    tableName: 'rolesasignado'
});
//Quitamos los atributos por defecto que trae de id, createdAt y updatedAt.
// Persona.removeAttribute('id');
// Persona.removeAttribute('createdAt');
// Persona.removeAttribute('updatedAt');
// RolesAsignados.belongsTo(Rol);
// RolesAsignados.belongsTo(Persona);
// Persona.belongsToMany(Rol, { through: RolesAsignados });
//RolesAsignados.belongsToMany(Rol, {as: 'Rol', foreignKey: 'id'});
// RolesAsignados.hasMany(Rol, {as: 'Rol', foreignKey: 'id'});
// RolesAsignados.hasMany(Persona, {as: 'Persona', foreignKey: 'DNI'});
// Rol.belongsToMany(Persona, { through: RolesAsignados });
module.exports = RolesAsignados;