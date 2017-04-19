var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/public'))

// views is directory for all template files
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.send('hey xD')
})

app.get('/random-joke', function(req, res) {
})

app.get('/cuteness', function (req, res) {
})

app.get('*', function(req, res) {
  res.render('404.ejs', {'url': req.url })
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
})
