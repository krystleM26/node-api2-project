const express= require('express')
const router = express.Router()

const Posts = require('./posts-model')


router.get('/', (req ,res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
              message: 'The post information could not be retrieved'
            });
          });
})

router.get('/:id', (req,res)=> {
    Posts.findById(req.params.id)
        .then(posts => {
            if(posts) {
                res.status(200).json(posts)
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
              message: 'The post with the specified ID does not exist'
            });
        })
})

router.post('/', (req,res) => {
    console.log('hey post');
    const { title, contents} = req.body
            if(!title || !contents) {
                res.status(400).json
                ({message: "Please provide title and contents for the post"
            })
            } 
            else {
                Posts.insert({title, contents}) 
                .then(posts => {
                    res.status(201).json(posts)
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message:  "There was an error while saving the post to the database"
                    })
            
                 })
            }
        })



module.exports = router
