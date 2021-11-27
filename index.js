import express from 'express'
const app = express()

app.use('/data', (req, res) => {
  res.json({
    message: 'passed'
  })
})

app.listen(4000)