import express from 'express'

const app = express()

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("pagina")
})

app.get('/teste', (req, res) => {
  res.render("teste")
})

app.get('/htmltest', (req, res) => {
  res.render("htmltest")
})

app.get('/julia', (req, res) => {
  res.render("julia")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})