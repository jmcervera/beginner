var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function process(response) {
  console.log("Request handler 'process' was called.");

  exec("find /",
       {timeout: 5000, maxBuffer: 10000 * 1024},
       function(error, stdout, stderr){
         content = stdout;
         response.writeHead(200, {"Content-Type": "text/plain"});
         response.write(stdout);
         response.end();
   });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.process = process;
