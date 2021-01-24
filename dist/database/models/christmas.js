'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class christmas extends Model {
        static associate(models) {
        }
    }
    ;
    christmas.init({
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'christmas',
    });
    return christmas;
};
