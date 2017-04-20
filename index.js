var express = require('express')
var app = express()
const path = require('path')

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.resolve(__dirname, 'public')))

// views is directory for all template files
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.send('<h1>hey xD</h1>')
})

var jokes = [
  'Knock, knock!<br/>Who’s there?<br/>Gorilla<br/>Gorilla who?<br/>Gorilla me a burger or three!',
  'Knock, knock!<br/>Who’s there?<br/>Opportunity!<br/>That is impossible. Opportunity doesn’t come knocking twice!',
  'Knock knock.<br/>Who’s there?<br/>An extraterrestrial.<br/>Extraterrestrial who?<br/>What – how many extra-terrestrials do you know?',
  'Knock knock.<br/>Who’s there?<br/>Beats.<br/>Beats who?<br/>Beats me.',
  'Knock knock.<br/>Who’s there?<br/>The interrupting cow.<br/>Interrupting cow wh-<h2>Moooooo!</h2>' ]

app.get('/random-joke', function (req, res) {
  res.render('joke.ejs', {'joke': jokes[Math.floor(Math.random() * jokes.length)]})
})

app.get('/cuteness', function (req, res) {
  res.render('cat.ejs', {})
})

app.get('*', function (req, res) {
  res.render('404.ejs', {'url': req.url})
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
