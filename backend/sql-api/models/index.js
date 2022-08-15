const fs = require('fs')
const path = require('path')
const { DB, HOST, USER, PASSWORD, pool, dialect } = require('../config/db_config')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD, {
        host: HOST,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: pool.max,
            min: pool.min,
            acquire: pool.acquire,
            idle: pool.idle
        }
    }
)

sequelize.authenticate().then(() => console.log('connected...')).catch((err) => console.log('Error' + err))

let db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.contact = require('./contactModel.js')(sequelize, DataTypes)
db.role = require('./roleModel.js')(sequelize, DataTypes)
db.address = require('./addressModel.js')(sequelize, DataTypes)
db.movies = require('./moviesModel.js')(sequelize, DataTypes)
db.seen_movies = require('./seenMoviesModel.js')(sequelize, DataTypes)

// relationships

// console.dir(db.users)
db.users.hasOne(db.contact)
db.contact.belongsTo(db.users)

db.contact.hasOne(db.address)
db.address.belongsTo(db.contact)

db.users.hasOne(db.role)
db.role.belongsTo(db.users)

db.users.hasMany(db.seen_movies)
db.seen_movies.belongsTo(db.users)

db.movies.hasMany(db.seen_movies)
db.seen_movies.belongsTo(db.movies)

db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done')
    loadMovies()

})


function loadMovies() {
    db.movies.findAll()
        .then((movies) => {
            if (movies.length === 0) {
                const raw = fs.readFileSync(path.join(__dirname, "..", "data.json"));
                console.log({ raw })
                const movies = JSON.parse(raw);
                db.movies.bulkCreate(movies);
                console.log("Movies Loaded");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = db