const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});
router.get("/:id", async (request, response) => {
    try {
        const reviewsId = parseInt(request.params.id);

        if (reviewsId <= reviews.length) {
            const findReviewsWithId = reviews.find(reviews => reviews.id == reviewsId)
            response.send(findReviewsWithId);
        }
        else if (isNaN(reviewsId)) {
            response.status(400).send(`Sorry. The reviews id you requested should be an integer`);
        }
        else {
            response.status(404).send(`Sorry. The reviews with id: ${reviewsId} doesn't exist`);
        }
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;


