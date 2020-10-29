module.exports = (sequelize, DataTypes) => {
    let alias = "Products";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type: dataTypes.STRING(45),
            allownull: false
        },
        description : {
            type : dataTypes.STRING(300),
            allowNull : false
        },
        image : {
            type: dataTypes.STRING(100),
            allownull: false
        },
        talle : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allownull: false
        },
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false
        },
        discount : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false
        },
        created_at : {
            type: DataTypes.DATE()
        },
        updated_at: {
            type: DataTypes.DATE()
        },
        id_categoria : {
            type : dataTypes.INTEGER(11)
        }
    }
    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const Products = sequelize.define(alias,cols,config);

    Products.associate = function(models){
        Products.belongsTo(models.Categorias,{
            as : 'categorias',
            foreignKey : 'id_categoria'
        })
    }

    return Products;
}