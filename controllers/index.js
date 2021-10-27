const router = require('express').Router()
const slugify = require('slugify')
const blogPosts = require('../models/blogPosts')

// html routes
router.get('/', (req, res) => {
  res.render('index', { 
    name: 'Josh',
    date: new Date()
  })
})

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

router.get('/services', (req, res) => res.render('services'))

router.get('/add-post', (req, res) => {
  res.render('add-post')
})

router.get('/blog', (req, res) => {
  res.render('blog', {
    post: blogPosts.map(post => {
      
      const slug = slugify(post.name, { lower: true })
      post.slug = slug
      return post
    })
  })
})

router.get('/blog/:slug', (req, res) => {
  const postObj = blogPosts
    .find(post => req.params.slug === post.slug)

  res.render('post', postObj)
})

router.post('/api/blogpost', (req, res) => {
  const body = req.body
  body.date = new Date()
  blogPosts.push(body)
  res.status(200).send('Post added succesfully!')
})

module.exports = router