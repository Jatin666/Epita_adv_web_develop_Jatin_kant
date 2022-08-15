module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trailer: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        rating: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
    });
    return Movie
}