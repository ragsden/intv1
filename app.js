
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var sum = require('./routes/sum');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.post('/sum', sum.sum());

app.post('/sum', function(req, res) {
	var num1 = req.body.text1;
	var num2 = req.body.text2;
	var result = sum.sum(num1, num2);
	res.send({sum: parseInt(result)});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
