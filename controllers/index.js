const router = require('express').Router()
const blogPosts = require('../models/blogPosts')


router.get('/', (req, res) => res.render('index', {
    name: 'Alex',
    date: new Date()               

}))
router.get('/about', (req, res) => res.render('about'))
router.get('/contact', (req, res) => res.render('contact'))
router.get('/services', (req, res) => res.render('services'))
router.get('/blog', (req, res) => {res.render('blog',{
    post : blogPosts
    })
})

module.exports = router