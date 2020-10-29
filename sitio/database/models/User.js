module.exports = (sequelize,dataTypes) => {

    let alias = "Users";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        first_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        last_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        password : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        avatar : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        created_at: {
            type: DataTypes.DATE()
        },
        updated_at: {
            type: DataTypes.DATE()
        }
    }

    let config = {
        tableName : "users",
        timestamps : true,
        underscored : true
    }

    const Users = sequelize.define(alias,cols,config);

    return Users;
}