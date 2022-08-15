const db = require('../../sql-api/models')
const Rating = require("../models/rating.js");
const addRate = async (req, res, next) => {
    try {
      const id = req.params.id;
      const { rating } = req.body;
      const movie = await db.movies.findByPk(id);
      if (!movie) {
        return res.json({message:"Movie Not Found!"});
      }

      if(!rating) return res.json({message: "Specify rating"})
      else{
        const rate = new Rating({
          movie: id,
          rating,
        })
        console.dir(rate)
  
        await rate.save()

      }

      const ratings = await Rating.find({ movie: id });
      let total = 0;
      for (const e of ratings) {
        total += e.rating;
      }
      const average = total / ratings.length;
      await movie.update({
        rating: average.toFixed(2),
      });
      res.status(200).send(movie);
    } catch (error) {
      // console.log({error})
      // next(error)
      return res.json({message: error});
    }
};


module.exports = {
    addRate
}