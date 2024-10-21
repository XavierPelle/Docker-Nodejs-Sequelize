const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {
}
Product.init({
    name: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    metadata: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
});
module.exports = Product;