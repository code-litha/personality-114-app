const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use( express.urlencoded({ extended : true }))

app.get('/', Controller.renderHome)
app.get('/add', Controller.renderAdd)
app.post('/add', Controller.handleAdd)
app.get('/delete/:id', Controller.handleDelete)

app.listen(PORT, () => {
    console.log('Besok libur yeayyy', PORT);
})