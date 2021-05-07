const express = require("express");
const app = express();
const calculationRoute = require("./routes/calculationRoute")

//app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.use("/number", calculationRoute);


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
