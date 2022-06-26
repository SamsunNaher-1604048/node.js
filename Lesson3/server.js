const http=require('http');
const port=4000;
const hostname='127.0.0.1'
const myServer=http.createServer((req,res)=>{
    //set status code
    res.writeHead(202,{'content-type':'plan text'})
    res.write('hello i am nishi')
    res.end()

});
myServer.listen(port,hostname,()=>{
    console.log(`your server running at http://${hostname}:${port}`)

});
