
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
    try{
        const multiplication= Object.values(req.query).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc*val)
       
           if (isNaN(multiplication)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${multiplication}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.get("/calculator/add", (req, res) => {
    try{
        const addition= Object.values(req.query).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc+val)
       
           if (isNaN(addition)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${addition}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.get("/calculator/subtract", (req, res) => {
    try{
        const subtract= Object.values(req.query).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc-val)
       
           if (isNaN(subtract)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${subtract}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.get("/calculator/division", (req, res) => {
    try{
        const division= Object.values(req.query).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc/val)
       
           if (isNaN(division)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${division}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.post("/calculator/multiply", (req, res) => {
    try{
        const multiplication= Object.values(req.body).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc*val)
       
           if (isNaN(multiplication)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${multiplication}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.post("/calculator/add", (req, res) => {
    try{
        const addition= Object.values(req.body).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc+val)
       
           if (isNaN(addition)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${addition}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.post("/calculator/subtract", (req, res) => {
    try{
        const subtract= Object.values(req.body).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc-val)
       
           if (isNaN(subtract)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${subtract}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})

app.post("/calculator/division", (req, res) => {
    try{
        const division= Object.values(req.body).flat().map((parameter)=>parseInt(parameter)).reduce((acc, val)=>acc/val)
       
           if (isNaN(division)){
               res.status(404).send("Parameters should be interger value")
           }
           else {
               res.send(`${division}`)
           }
       }
           catch(error){
               res.status(500).send({error:"Internal server error"})
       }
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));