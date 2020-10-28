module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("products", {
        id = {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name = {
            type: STRING(45),
            allownull: NotNull
        },
        description = {
            type : dataTypes.STRING(300),
            allowNull : false
        },
        image = {
            type: STRING(100),
            allownull: NotNull
        },
        talle = {
            type: INTEGER(2, 0).UNSIGNED,
            allownull: NotNull
        },
        price = {
            type : dataTypes.DECIMAL(5, 2).UNSIGNED,
            allowNull : false
        },
        discount = {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull : false
        },
        created_at: {
            type: DataTypes.DATE()
        },
        updated_at: {
            type: DataTypes.DATE()
        },
        id_categoria : {
            type : dataTypes.INTEGER(11)
        }
    })
    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const products = sequelize.define(alias,cols,config);

    return products;
}