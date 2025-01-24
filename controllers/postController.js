const blogs = require('../data/blog')

//index
const index =(req, res) =>{
    let postsFiltered = blogs;
    if (req.query.tag){
        postsFiltered = postsFiltered.filter((post) => post.tags.includes(req.query.tag))
    }
    res.json(postsFiltered)
}

//show
const show = (req, res) =>{    

    const post = blogs.find((elm) => elm.id == req.params.id)
    if(!post){
        res.sendStatus(404)
    }
    res.json(post)
}

//create
const create =(req, res) =>{
    res.send('creazione nuovo post')
}

//update
const update = (req, res) =>{
    res.send(` modifica integrale del post: ${req.params.id}` )
}

//modify
const modify = (req, res) =>{
    res.send(` modifica parziale post: ${req.params.id}` )
}

//destroy
const destroy =(req, res) =>{
    const post = blogs.find((elm) => elm.id == req.params.id);

    if(!post) {
        return res.sendStatus(404)
    }

    blogs.splice(blogs.indexOf(post) , 1);
    console.log(blogs)

    res.sendStatus(204)
}
module.exports = {index, show, create, update, modify, destroy }