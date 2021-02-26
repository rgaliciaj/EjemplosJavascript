const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// official doc : http://expressjs.com/en/starter/installing.html


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.post('/SampleServlet', (request, response)=>{
    let data = request.body;
    console.log('data ' , data )
    response.json({
        greeting:  `hola ${data.name}`
    }); 
});


app.listen(3000, ()=>{
    console.log('server up....')
}) 