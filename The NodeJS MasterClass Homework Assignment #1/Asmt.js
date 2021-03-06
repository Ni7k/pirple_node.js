/*
 *Primary file of API
 */
 //Dependencies
 var http = require('http');
 var url = require('url');
 var StringDecoder = require('string_decoder').StringDecoder;

 //The server should respond to all requests with a string
 var server = http.createServer(function(req,res){

	 //Get the URl and parse it
	 var parsedUrl = url.parse(req.url,true);

	 //Get the path
	 var path = parsedUrl.pathname;
	 var trimmedPath = path.replace(/^\/+|\/+$/g,'');

     //Get the query string as an object
     var queryStringQbject = parsedUrl.query;

     //Get the HTTP Method
     var method = req.method.toLowerCase();

     //Get the headers as an object
     var headers = req.headers;

     //Get te payload, if any
     var decoder = new StringDecoder('utf-8');
     var buffer = '';
     req.on('data',function(data){
         buffer += decoder.write(data);
     });
     req.on('end',function(){
         buffer += decoder.end();

        //Send the response
	 
     res.end('Hello this is Nick Coding\n');

	 //Log the request path
	  console.log('Request received on path:'+ trimmedPath+' with method:'+method+' with query string:',queryStringQbject);
      console.log('Request received with this payload:',buffer);

  });

 });

 //Start the server, and have it listen on port 3000
 server.listen(7000,function(){
	 console.log("The server is listening on port 7000 now")
 });
