const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
//app.use(express.Router())

app.get("/", (request, response) => {
    console.log(request)
    console.log("body", request.body)
    console.log("params", request.params)
    console.log("query", request.query)
    //response.status(404).end()
    response.send({
        body: request.body,
        params: request.params,
        query: request.query,
        success: true
    })
    //console.log(response.json)
})
app.post("/", (request, response) => {
    console.log(request)
    console.log("body", request.body)
    console.log("params", request.params)
    console.log("query", request.query)
    //response.status(404).end()
    response.send({
        body: request.body,
        params: request.params,
        query: request.query,
        success: true
    })
    //console.log(response.json)
})
// app.get("/userid/:userId", (request, response) => {
//     console.log(request.headers)
//     console.log(request.params)
//     console.log(request.query)
//     response.status(404).end()
// })

//app.post("/")

app.listen(3000, err => {
    if (err) {
        return console.log(err)
    }
    console.log("Listening.")
})