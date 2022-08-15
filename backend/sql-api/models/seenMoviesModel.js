module.exports = (sequelize, DataTypes)=>{

    const seenMovie = sequelize.define("seenMovie", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
    });
    return seenMovie
}