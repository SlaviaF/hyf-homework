const express = require("express");
const router = express.Router();
const path = require("path");
const movies = require("../data/movies.json");
console.log(__dirname);


//https://www.youtube.com/watch?v=MuMs1pLuT7I   (request params)



router.get("/", async (request, response) => {
  console.log(request.query);
  const beginYear = parseInt(request.query.beginYear)
  const endYear = parseInt(request.query.endYear)
  const minRating = parseInt(request.query.minRating)
  const getMoviesBetweenSpecifiedYears = movies.filter(movie => movie.year >= beginYear && movie.year <= endYear)

  if (beginYear && endYear && minRating) {
    console.log(getMoviesBetweenSpecifiedYears)
    const getMoviesWithMinRating = getMoviesBetweenSpecifiedYears.filter(movie => movie.rating >= minRating)
    response.send(getMoviesWithMinRating)

  }
  else if (beginYear && endYear) {
    response.send(getMoviesBetweenSpecifiedYears)
  }
  else if (isNaN(beginYear) || isNaN(endYear)) {
    response.status(404).json({ error: "Year must be integer" })
    return
  }
  else {
    const getAllMovies = movies.map(movie => movie)
    response.send(getAllMovies)
  }
});


router.get("/:id", async (request, response) => {
  const id_no = parseInt(request.params.id);
  const getMovieWithID = movies.find(movie => movie.id == id_no);

  response.send({ data: getMovieWithID })
});



module.exports = router;