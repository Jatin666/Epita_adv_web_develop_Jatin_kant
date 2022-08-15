const db = require('../models')
const readAllMovies = async (req, res, next) => {
    try {
      let order = "release";
      if (req.query && req.query.order) {
        order = req.query.order;
      }
      const movies = await db.movies.findAll({
        order: [order],
      });
      if (!movies) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      res.status(200).send(movies);
    } catch (error) {
      console.log({error})
      return res.json({error: {errorType:"SOMETHING_WENT_WRONG"} })
    }
};
  
const readMovie = async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = await db.movies.findByPk(id);
      if (!movie) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      res.status(200).send(movie);
    } catch (error) {
      return res.json({error: {errorType:"SOMETHING_WENT_WRONG"} })
    }
  };
  
const watchMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const movie = await db.movies.findByPk(id);
      if (!movie) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      await movie.update({
        count: ++movie.count,
      });
  
      await db.seen_movies.create({
        MovieId: id,
        userId
      });
  
      res.status(200).send(movie);
    } catch (error) {
      return res.json({error: {errorType:"SOMETHING_WENT_WRONG"} })
    }
  };
  
  const recentMovies = async(req, res, next) => {
    const { id } = req.params;
    try {
        const seenMovies = await db.seen_movies.findAll({
            where: {
                userId: id,
            },
        });
        const ids = seenMovies.map((e) => e.MovieId);
        console.log(seenMovies);
        console.log(ids);
        const movies = await db.movies.findAll({
            where: {
                id: ids,
            },
        });
        if (!movies) {
            return next(createError(404, "Movies Not Found!"));
        }
        res.status(200).send(movies);
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports = { recentMovies, watchMovie, readMovie, readAllMovies }
  