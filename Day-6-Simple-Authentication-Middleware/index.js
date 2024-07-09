const express = require("express")
// const responseTime = require("response-time");
const morgan = require('morgan');

const app = express();

// Use morgan middleware for logging
app.use(morgan('Morgan Data => :method :url :status :res[content-length] - :response-time ms'));
//response-time:- Used specifically within morgan for logging request durations.


// Custom logging middleware
const logging = (req, res, next) => {
    const startTime = Date.now()
    console.log("Name : Yash Kapoor");
    console.log(`Request Method : ${req.method}`)
    console.log(`Request URL  : ${req.url}`);
    console.log(`Timestamp : ${new Date().toLocaleString()}`);
    
//This line sets up an event listener for the finish event on the response object. 
//The finish event is emitted when the response has been sent to the client.
    res.on("finish", () => { 
      const ProcessingTime = Date.now() - startTime
      console.log(`Time for processing request and response send to client ${ProcessingTime}ms`);
    });
    
    next()
}

app.use(logging)
// app.use(responseTime());


app.get("/login", (req, res) => {
   res.json({
    message: "successfully logged in"
   })
})

//Start the server
app.listen(3000, ()=> {
    console.log("Express server is up and running at port 3000");
})