const http = require('http');
const fs=require('fs');

http.createServer((req,res) => {

    res.writeHead(200,{'content-Type':'text/html'});

if(req.url === '/home' || req.url ==='/' ){
    let data = fs.readFileSync('project/index.html');
    res.write(data);
}else if(req.url ==='/veg'){
    let data = fs.readFileSync('project/veg.html');
    res.write(data);
}else if(req.url ==='/fruits'){
    let data = fs.readFileSync('project/fruits.html');
    res.write(data);
    
}else{
    let data = fs.readFileSync('project/about.html');
    res.write(data);
}

res.end();
   

}).listen(process.env.PORT, () => {console.log("server started")});