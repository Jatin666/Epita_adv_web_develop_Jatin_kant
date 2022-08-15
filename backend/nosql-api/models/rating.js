const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_URL = "mongodb+srv://admin:admin@cluster1.otlagiy.mongodb.net/movies?retryWrites=true&w=majority";

const RatingSchema = new Schema({
    movie: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

mongoose.connect(DB_URL)

mongoose.connection.on("connected", () => {
    console.log("Mongoose Connected.");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Error.", err);
});

// mongoose.connection.on("disconnected", () => {
//     console.log("Mongoose Disconnected.");
//     process.exit(0);
// });

const Rate = mongoose.model("Rate", RatingSchema);

module.exports = Rate