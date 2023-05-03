const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const port = 3000 || process.env.PORT

app.use(express.static('public'))
app.use(express.json({"limit": "1mb"}))

app.listen(port, () => console.log(`Listening to port ${port}`))