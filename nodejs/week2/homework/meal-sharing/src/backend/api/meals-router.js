const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  const mealId = parseInt(request.params.id);

  if (mealId <= meals.length) {
    const findMealWithId = meals.find(meal => meal.id == mealId)
    response.send(findMealWithId);
  }
  else if (isNaN(mealId)) {
    response.status(400).send(`Sorry. The meal id you requested should be an integer`)

  }
  else {
    response.send();
  }
});

router.get("/", async (request, response) => {
  try {
    const validParams = ["maxPrice", "createdAfter", "title", "limit"];
    const requestParams = Object.keys(request.query)
    const isParamValid = param => validParams.includes(param)

    if (!requestParams.every(isParamValid)) {
      response.status(400).send("The query you requested does not exist")
      return;
    }

    const mealTitle = request.query.title;

    if ('maxPrice' in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).send(`Sorry. Maximum price should be an integer`)
        return
      }
      const getMealsWithMaxPrice = meals.filter(meal => meal.price <= maxPrice)
      console.log(`check it:${(Object.keys(request.query))}`)
      response.send(getMealsWithMaxPrice)
    }


    else if (mealTitle) {
      const filterWithMealTitles = meals.filter(meal => meal.title.toLowerCase().includes(mealTitle.toLowerCase()))
      response.send(filterWithMealTitles)

    }
    else if ('createdAfter' in request.query) {
      const createdAfter = request.query.createdAfter;
      const createdAfterDate = new Date(createdAfter)
      console.log(createdAfterDate.getDate)
      if (!createdAfterDate.getDate()) {
        return response.status(400).send('Sorry. Date must be a valid date')
      }
      const findMealOnSpecifiedDate = meals.filter(meal => new Date(meal.createdAt) > new Date(createdAfter))
      response.send(findMealOnSpecifiedDate);

    }
    else if ('limit' in request.query) {
      const limit = request.query.limit;
      if (isNaN(limit)) {
        response.status(400).send(`Sorry. Limit should be an integer`)
        return;
      }
      const getLimitedMeals = meals.slice(0, limit)
      response.send(getLimitedMeals);
    }

    else {
      response.send(meals)
    }
  }
  catch (error) {
    response.status(500).send({ error: "Internal Server Error." });
  }

});

function validateParamter() {
  if (Object.keys(request.query) != ("maxPrice" || "createdAfter" || "title" || "limit")) {
    return response.status(404).send("The query you requested does not exist")
  }
}


module.exports = router;
