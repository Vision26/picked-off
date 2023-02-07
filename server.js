const express = require("express")
const app = express()
app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("The items api is executed...")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = {
        name: "baden",
        age:4,
        type: "dog",
    }
    next()
})

app.use("/items", (req, res, next) => {
    res.send(req.body)
})

app.listen(5000, () => {
    console.log(`Cuurently connected to host 5000...`)
})