const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const pedido = sequelize.define('pedido', {
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    itens: {
        type: DataTypes.JSON,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendente'
    }
}, {
    tableName: 'pedidos'
});

module.exports = pedido;