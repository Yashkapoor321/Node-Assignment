const express = require("express")
const morgan = require("morgan")
const app = express();


app.use(morgan("dev"))

const requestLogging = (req, res, next) => {
    console.log(`Request Method : ${req.method}`)
    console.log(`Request URL : ${req.url}`)
    console.log(`Request for IP address : ${req.ip}`)
    console.log(`Timestamp : ${new Date().toLocaleString()}`)

    next()
}
app.use(requestLogging);


app.get("/login", (req, res) => {
    res.json({
     message: "successfully logged in"
    })
 })

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})