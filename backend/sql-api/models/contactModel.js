module.exports = (sequelize, DataTypes)=>{

    const Contact = sequelize.define("contact",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Contact
}