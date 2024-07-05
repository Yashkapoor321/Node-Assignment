
const express = require("express")

const jokesData = require("./data")

const app = express()

app.get("/randomjokes", (req, res)=> {
    const params = req.query
    // console.log(params);
    const randomJokeIndex = Math.floor(Math.random() * jokesData.length)

    const joke = jokesData.find((j) => j.id == params.id) 

// If id is not provided, return all jokesData
    if(!params.id){  
        return res.status(200).json({
            sucess: true,
            message: "random jokes are getting",
            result: jokesData[randomJokeIndex] 
        })
    }

 // If the joke with the given id is not found, return an error
 //Use this type of URL for particular id =>   http://127.0.0.1:3000/randomjokes?id=9
    if(!joke){
        return res.status(404).json({
            sucess: false,
            message: `Joke not found with this id ${params.id}`
        })
    }
 // If the joke with the given id is found, return that id and joke
    else{
        return res.status(200).json({
            sucess: true,
            message: `Data found with the given id ${params.id}`,
            result: joke
        })
    }
})


app.listen(3000, () => {
    console.log("server is up and running at port 3000");
})