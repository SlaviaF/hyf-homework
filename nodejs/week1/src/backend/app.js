const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations")

//console.log(meals);

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send(`Meal Sharing Web App`);
});


const getMealsAndReviews = () => {
  const mealWithReview = meals.map(meal => {
    meal['reviews'] = reviews.filter(review => meal.id == review.mealId)
    return meal;
  })
  return mealWithReview;
}

const mealWithAllReviews = getMealsAndReviews();

app.get("/meals", (req, res) => {
  res.json(mealWithAllReviews);
});

app.get("/cheap-meals", (req, res) => {
  let cheapMeals = mealWithAllReviews.filter(meal => {
    return meal['price'] < 55
  });
  res.json(cheapMeals);
});


app.get("/large-meals", (req, res) => {
  let largeMeals = mealWithAllReviews.filter(meal => {
    return meal['maxNumberOfGuests'] > 7

  });
  res.json(largeMeals);
});


app.get("/meal", (req, res) => {
  const randomMeal = mealWithAllReviews[Math.floor(Math.random() * meals.length)];
  res.json(randomMeal);
});

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.get("/reservation", (req, res) => {
  const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
  res.json(randomReservation);
});
module.exports = app;


