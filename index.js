const express = require('express')
const bodyParser = require ('body-parser')
const path = require('path')
const app = express()
const port = 55555

//setup for recieving post requests
app.use(bodyParser.json())
//app.use(express.json())

//routing
app.get('/', function (req,res){
    console.log('request recieved')
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.post('/', function (req, res){
    console.log(req.body.name)
    BasePostAction(req.body.name)
    res.end("Recieved")
})

//functions for executing the code on post
function BasePostAction(postName){
    console.log("Got a post request!")
    
    if(postName == "PizzaTime")
        PizzaTime()
}


function PizzaTime()
{
    console.log("IT'S PIZZA TIME!~")
    var player = require('play-sound')(opts = {})
    
    var audio = player.play('audio/pizzaTheme.mp3', function(err){
        if (err) throw err
    })
}

//start the server
app.listen(port, () => console.log(`Server listening on port ${port}!`))
