
const express = require("express")

const jokesData = require("./jokeData")  //joke data import

const imageData = require("./imageData")   //image data import

const app = express()

//.                      For Random Jokes
app.get("/randomjokes", (req, res)=> {
    const params = req.query
    // console.log(params);
    const randomJokeIndex = Math.floor(Math.random() * jokesData.length)

    const joke = jokesData.find((j) => j.id == params.id) 

// If id is not provided, return random joke
    if(!params.id){  
        return res.status(200).json({
            sucess: true,
            message: "random jokes are getting",
            result: jokesData[randomJokeIndex] 
        })
    }

 // If the joke with the given id is not found, return an error
    if(!joke){
        return res.status(404).json({
            sucess: false,
            message: `Invalid id ${params.id}`
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



//.                              For Random Images
app.get("/randomimages", (req, res) => {
    const params = req.query
    const randomImageIndex = Math.floor(Math.random() * imageData.length)

    const image = imageData.find((i) => i.id == params.id) 

// If id is not provided, return random image
    if(!params.id){  
        return res.status(200).json({
            sucess: true,
            message: "random images are getting",
            result: imageData[randomImageIndex] 
        })
    }

 // If the image with the given id is not found, return an error
    if(!image){
        return res.status(404).json({
            sucess: false,
            message: `Invalid id ${params.id}`
        })
    }
 // If the image with the given id is found, return that id and image
    else{
        return res.status(200).json({
            sucess: true,
            message: `Data found with the given id ${params.id}`,
            result: image
        })
    }
})



app.listen(3000, () => {
    console.log("server is up and running at port 3000");
})