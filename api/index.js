// const express = require('express')
// const routes = require('./routes')

// const app = express()
// const port = 3000

// routes(app)

// app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

// module.exports = app

import express from 'express'
// import routes  from'./routes'
import axios from 'axios'

const app = express()
const port = 3000

const api = axios.create({
    baseURL: 'http://192.168.117.207:5030/'
  })

const setup = await api.get('/setup')
  .then(response => {
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })

// routes(app)

console.log(setup)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

// module.exports = app