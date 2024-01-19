var express = require('express');
var router = express.Router();
const BOOKS = [
  {
    id:2,
    name:"John Doe",
    author:"UK Dian",
    description:"This is Description",
    page:50,
    prize:100,
    year:2018,
    image:"https://images.unsplash.com/photo-1623771702313-39dc4f71d275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  BOOKS.push(req.body)
  res.redirect("/show")
});

router.get('/show', function(req, res, next) {
  res.render('show', { book: BOOKS });
});

router.get('/details/:index', function(req, res, next) {
  const dets = BOOKS[req.params.index];
  res.render('details', { books: dets,index:req.params.index });
});

router.get('/delete/:index', function(req, res, next) {
   BOOKS.splice[req.params.index];
  res.redirect("/show")
});

router.get('/update/:index', function(req, res, next) {
  const dets = BOOKS[req.params.index];
  res.render('update', { books: dets,index:req.params.index });
});

router.post('/update/:index', function(req, res, next) {
  BOOKS[req.params.index] = req.body;
  res.redirect(`/details/${req.params.index}`);
});



module.exports = router;
