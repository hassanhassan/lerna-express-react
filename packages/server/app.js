
if(process.env.NODE_ENV === "development"){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 8080

app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello World!'})
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/../client/build'))
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
