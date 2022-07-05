const express = require('express')
const htmlRoute = require('./routes/html')
const apiRoute = require('./routes/apiroutes')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute)
app.use('/',htmlRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

