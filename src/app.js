const express = require('express')
const path = require('path')
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");
const {
    error
} = require('console');
const port = process.env.PORT || 3000

const app = express()
const publicDirectoryPathFile = path.join(__dirname, "../public");
const partiaslPath = path.join(__dirname, "../partials");

app.set('view engine', 'hbs')
hbs.registerPartials(partiaslPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Manas Kshatriya"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Manas Kshatriya"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "this is some helpful text",
        title: "Help",
        name: "Manas Kshatriya"
    })
})



app.use(express.static(publicDirectoryPathFile))


app.get('/weather', (req, res) => {


    if (!req.query.address) {
        return res.send({
            error: "YOU MUST PROVIDE AN ADDRESS"
        })
    }

    geocode(req.query.address, (error, data) => {

        if (error) {
            return res.send({
                error: error
            })
        }

        forecast(data.longitude, data.latitude,(error, forecastdata) => {

            if (error) {
                return res.send({
                    error: error
                })
            }
            
            res.send({
                forecast : forecastdata,
                location : data.location,
                address : req.query.address
            })
        })
    })



    // res.send({
    //     forecast : 50 ,
    //     location : "Nasik",
    // })
})

// app.get("/products", (req,res)=> {
//     if(!req.query.search){
//         return res.send({
//             error: "YOu MUST PROVIDE A SEARCH QUERY"
//         })
//     }

//     console.log(req.query)

//     res.send({
//         products: []
//     })
// })

app.get('/help/*', (req, res) => {
    //res.send("Help articel not found")
    res.render('404'), {
        title: "400",
        name: "Manas Kshatriya",
        message: "Help arcticle not Found"
    }
})

app.get('*', (req, res) => {
    res.render('404'), {
        title: "404",
        name: "Manas Kshatriya",
        message: "Page not Found"
    }
})

app.listen(port, () => {
    console.log('Server is up on port 3000.')
})