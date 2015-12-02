/******************************************************************************
** NAME: Nickolas A. Williams 
** DATE: 11/15/2015               
** CLASS: CS 290, Section 400
** PROJECT: GET and POST checker
** FILENAME: post-get.js
******************************************************************************/

//dependencies
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

//activate middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3002); //will use 3002 for this

//lets me know it's running
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

//all requests are get requests, so on access w/no info this
//will say "get request received" and have no information
app.get('/', function(req, res) //if get request received
{
	res.render('index', context);
});

//errors
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});