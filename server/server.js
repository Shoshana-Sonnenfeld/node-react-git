const express = require("express")
const { girls } = require("./girls")
const app = express()
const {log}=require("./middleware")
const PORT = process.env.PORT || 1100


app.get('/', (req,log, res) => {
    res.send("hello")
})

app.get('/homepage/', (req, res) => {
    res.send("welcome to homepage")
})

app.get('/girls', (req, res) => {
    res.json(girls)
})

app.get('/girls/:name', (req, res) => {
    const found = girls.find(girl => girl.name === req.params.name);
    if (found) {
        res.send(found);
    } else {
        res.send("לא נמצא השם המבוקש")
    }
})


app.listen(PORT, () => {
    console.log(`The server running on port ${PORT} `);
})