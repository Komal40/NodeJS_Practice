const express = require('express')
const app = express()
const db=require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello World')
})



app.get('/food', function (req, res) {
    var food={
        chawal:'2kg',
        daal:'3kg',
        chole:'1kg'
    }
    res.send(food)
  })

app.listen(3001)


