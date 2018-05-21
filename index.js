const express     = require('express')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const data        = require('./data.json')
const app         = express()
const PORT        = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

function filterById(data, id){
  return data.filter(instructor => instructor.id == id)
}

app.get('/', (req, res) => res.json({data}))

app.get('/:id', (req, res) => {
  let result = filterById(data, req.params.id)
  if (!result[0]){
    res.status(404).json({
      error: {
        message: "No record found!"
      }
    })
  } else {
    res.json({
    data: result
    })
  }
})

app.listen(PORT)
