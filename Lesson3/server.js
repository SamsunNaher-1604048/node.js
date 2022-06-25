const http=require('http');
const port=4000;
const hostname='127.0.0.1'
const myServer=http.createServer((req,res)=>{
    res.end("hello i am your frist server")

});
myServer.listen(port,hostname,()=>{
    console.log(`your server running at http://${hostname}:${port}`)

});
