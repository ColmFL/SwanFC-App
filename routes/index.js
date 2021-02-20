var express = require('express');
var router = express.Router();
var version = require('./version');
var validator = require('validator');
var Comment = require('../models/comments');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Get version API*/
router.get('/version', function(req, res, next) {
  res.json({version: 'This version number is 0.0.02'});
  });	
  
  /* POST comment */
router.post('/comment', function(req,res,next){
	var username = req.body.Username;
	var comment = req.body.Comment;
	
	
	if(req.body.username)
	{
		if(validator.isAlphanumeric(req.body.username)) //=> true
		{
			res.json({"Sucess" : "This is a valid username."});
		}		
		else
		{
			res.json({"Error" : "This is not a valid username, please enter your username again."});
		}
		}
	else
	{
		res.json({"Error" : "An error has occurred"});
	}

	if(req.body.comment)
	{		
	if(validator.isAlphanumeric(req.body.comment)) //=> true
		{
			res.json({"Sucess" : "This is a valid username."});
		}		
		else
		{
			res.json({"Error" : "This is not a valid username, please enter your username again."});
		}
		}
	else
	{
		res.json({"Error" : "An error has occurred"});
	}
	
});

/*Adds comments to our database*/
router.post('/addComment', function(req, res, next) {
if(req.body.comment)
	{		
	if(validator.isAlphanumeric(req.body.comment)) //=> true
		{
			// Extract the request body which contains the comments
            comment = new Comment(req.body);
            comment.save(function (err, savedComment) {

                if (err)
                    throw err;

                res.json({
                    "id": savedComment._id
                });
            });
		}		
		else
		{
			res.json({"Error" : "This is not a valid entry, please try again."});
		}
		}
	else
	{
		res.json({"Error" : "An error has occurred"});
	}
            
});

/*Get comments from database*/
router.get('/getComments', function(req, res, next)
{
    Comment.find({}, function (err, comments) {
        if (err)
            res.send(err);

        res.json(comments);
    }).sort({date_created:-1}).limit(10);
});


/*Update comment by id*/
router.put('/updateComments/:id',  function(req, res, next) {
 var id = req.params.id;
 
 if(req.body.comment)
	{		
	if(validator.isAlphanumeric(req.body.comment)) //=> true
		{
			Comment.update({_id:id},{$set:{comment : req.body["comment"]}}, function(err, comments){
		
		if(err)
			res.send(err);
		
		res.json({"status" : "Comment updated"});
			});
		}		
		else
		{
			res.json({"Error" : "This is not a valid entry, please try again."});
		}
		}
	else
	{
		res.json({"Error" : "An error has occurred"});
	}
	
});

/* delete comment by id*/
router.delete('/deleteComment/:id', function(req,res, next){
var id = req.params.id;	
 
	Comment.remove({_id:id}, function(err, comments){
		
		if(err)
			res.send(err);
		
		res.json({"status" : "Comment deleted"});
 });
});

module.exports = router;