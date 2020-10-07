const express = require('express')
const helmet = require('helmet') //provides security defaults

const db = require('./connections')

const server = express();

server.use(helmet());
server.use(express.json())

server.get('/'), (req, res) => {
    res.status(200).json({message: "Working."})
}
//read
server.get('/api/cars', (req, res) => {
    db.select('*')
        .from('cars')
        .then(car => {
            res.status(200).json({data: car})  
        })
        .catch(error => {
            res.status(500).json ({error: error.message})
        })
})

//create
server.post('/api/cars', (req, res) => {
    db('cars')
    .insert(req.body)
    .then(car => {
        res.status(201).json({data: car})
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`))