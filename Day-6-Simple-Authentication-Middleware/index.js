const express = require("express")
const responseTime = require("response-time");
// const morgan = require('morgan');

const app = express();

const logging = (req, res, next) => {
    console.log(`Request Method : ${req.method}`)
    console.log(`Request URL  : ${req.url}`);
    console.log(`Timestamp : ${new Date().toLocaleString()}`);
    next()
}

app.use(logging)
app.use(responseTime());
// app.use(morgan('dev'));

app.get("/login", (req, res) => {
   res.json({
    message: "successfully logged in"
   })
})


app.listen(3000, ()=> {
    console.log("Express server is up and running at port 3000");
})