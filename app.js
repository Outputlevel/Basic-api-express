import 'dotenv/config'
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/api', (req, res) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const data = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')
    res.status(201).send(data)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})