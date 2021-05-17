const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/multiply", (req, res) => {
    if ("firstParam" in req.query && "secondParam" in req.query) {
        const firstParam = [...req.query.firstParam];
        const secondParam = [...req.query.secondParam]
        const firstParaMult = firstParam.reduce((acc, currentValue) => parseFloat(acc) * parseFloat(currentValue));
        const secondParamMult = secondParam.reduce((acc, currentValue) => parseFloat(acc) * parseFloat(currentValue));
        const multiplication = parseFloat(firstParaMult) * parseFloat(secondParamMult)
        res.send(`${multiplication}`)

    }
})

app.get("/calculator/add", (req, res) => {
    if ("firstParam" in req.query && "secondParam" in req.query) {
        const firstParam = [...req.query.firstParam];
        const secondParam = [...req.query.secondParam]
        const firstParaAdd = firstParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const secondParamAdd = secondParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const addition = parseFloat(firstParaAdd) + parseFloat(secondParamAdd)
        res.send(`${addition}`)
    }
})

app.get("/calculator/subtract", (req, res) => {
    if ("firstParam" in req.query && "secondParam" in req.query) {
        console.log(req.query)
        const firstParam = [...req.query.firstParam];
        const secondParam = [...req.query.secondParam]
        const firstParasub = firstParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const secondParamsub = secondParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const subtraction = parseFloat(firstParasub) - parseFloat(secondParamsub)
        res.send(`${subtraction}`)
    }
})

app.get("/calculator/division", (req, res) => {
    if ("firstParam" in req.query && "secondParam" in req.query) {
        console.log(req.query)
        const firstParam = [...req.query.firstParam];
        const secondParam = [...req.query.secondParam]
        const firstParaDiv = firstParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const secondParamDiv = secondParam.reduce((acc, currentValue) => parseFloat(acc) + parseFloat(currentValue));
        const division = parseFloat(firstParaDiv) / parseFloat(secondParamDiv)
        res.send(`${division}`)
    }
})


app.post("/calculator/multiply", (req, res) => {
    console.log(req.body.firstParam);
    const firstParam = parseFloat(req.body.firstParam)
    const secondParam = parseFloat(req.body.secondParam);
    const multiplication = parseFloat(firstParam * secondParam);
    res.send(`multiplication: ${multiplication}`)

})

app.post("/calculator/division", (req, res) => {
    console.log(req.body.firstParam);
    const firstParam = parseFloat(req.body.firstParam)
    const secondParam = parseFloat(req.body.secondParam);
    const division = parseFloat(firstParam / secondParam);
    res.send(`division: ${division}`)

})
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));