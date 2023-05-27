// declare server variables
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')

// set template engine: handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// set static files
app.use(express.static('public'))

// handle request and response
app.get('/', (req, res) => {
  res.render('index')
})

// set dynamic routes
app.get('/:page', (req, res) => {
  res.render(`${req.params.page}`)
})

// start and listen the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})