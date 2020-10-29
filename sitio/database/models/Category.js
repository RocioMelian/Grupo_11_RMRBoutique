module.exports = (sequelize,dataTypes) => {
    let alias = "Categorias";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        created_at: {
            type: DataTypes.DATE()
        },
        updated_at: {
            type: DataTypes.DATE()
        }
    }

    let config = {
        tableName: "categories",
        timestamps: true,
        underscored: true
    }

    const Categories = sequelize.define(alias,cols,config);

    Categories.associate = function(models){
        Categories.hasMany(models.Products,{
            as : 'products',
            foreignKey : 'id_categoria'
        })
    }

    return Categories

}