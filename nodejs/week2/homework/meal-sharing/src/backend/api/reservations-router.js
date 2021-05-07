const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");
router.get("/", async (request, response) => {

    response.send(reservations);
});

router.get("/:id", async (request, response) => {
    try {
        const reservationsId = parseInt(request.params.id);

        if (reservationsId <= reservations.length) {
            const findReservationsWithId = reservations.find(reservations => reservations.id == reservationsId)
            response.send(findReservationsWithId);
        }
        else if (isNaN(reservationsId)) {
            response.status(400).send(`Sorry. The reservations id you requested should be an integer`);
        }
        else {
            response.status(404).send(`Sorry. The reservations with id: ${reservationsId} doesn't exist`);
        }
    }

    catch (error) {
        response.status(500).send({ error: "Internal Server Error." });
    }
})
module.exports = router;



