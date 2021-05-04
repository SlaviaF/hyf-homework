const express = require("express")
const router = express.Router();

router.get("/add", (req, res) => {
    console.log(req.query);

    const firstNum = parseInt(req.query.first);
    const secondNum = parseInt(req.query.second);
    console.log(firstNum)
    console.log(typeof (firstNum))
    const sum = firstNum + secondNum;
    res.send(`Sum : ${sum}`);

})
router.get("/multiply/:first/:second", (req, res) => {
    console.log(req.params);
    const firstNum = parseInt(req.params.first);
    const secondNum = parseInt(req.params.second);
    console.log(firstNum)
    const multiply = firstNum * secondNum;
    res.send(`multiplication : ${multiply}`)
})
module.exports = router;