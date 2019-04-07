var express=require('express');

var app=express();

var mongoose=require('mongoose');
const config=require('./config/database');
const path=require('path');
var _dirname='/Users/akashtated/Desktop/feedback/client/dist/client';

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
	if (err){
		console.log('could not connect to database');
	}
	else
	{

		console.log(' connected to database '+config.db);
	}
});

app.use(express.static(_dirname));

app.get('*',function(req,res){
	res.sendFile(path.join(_dirname + '/index.html'));
});

app.listen(8000);