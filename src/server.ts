import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'ts_node_dev'})
})

app.listen(3333, () => {
  console.log('🚀 Server start on 3333 port')
})
