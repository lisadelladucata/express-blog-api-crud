const express = require('express')
const blogs = require('../data/blog')


const router = express.Router()

//index
router.get('/' , (req, res) =>{
    res.json(blogs)
})

// show
router.get('/:id', (req, res) =>{
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }    

    const post = blogs.find((elm) => elm.id == req.params.id)
    if(!post){
        res.sendStatus(404)
    }
    res.json(post)
})

// create
router.post('/', (req, res) =>{
    res.send('creazione nuovo post')
})

// update
router.put('/:id', (req, res) =>{
    res.send(` modifica integrale del post: ${req.params.id}` )
})

// modify
router.patch('/:id', (req, res) =>{
    res.send(` modifica parziale post: ${req.params.id}` )
})

// destroy
router.delete('/:id', (req, res) =>{
    res.send(` eliminazione del post: ${req.params.id}` )
})




module.exports = router;