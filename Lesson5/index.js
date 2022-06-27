const http =require('http');
const fs=require('fs')

const port=3000;
const hostName='127.0.0.1';

const server=http.createServer((req,res)=>{
    const read=(fileName,status)=>{
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(status,{'Content-type':'text/html'})
            res.write(data);
            res.end();
        })
        
    }

   if(req.url==='/'){
    read("index.html",200)
   }

   else if(req.url==='/about'){
    read('about.html',200)
   }

   else if(req.url==='/contact'){
    read('contact.html',200)
   }

   else{
    read('error.html',404)
   }
})

server.listen(port,hostName,()=>{
    console.log(`server is running at:http://${hostName}:${port}`)
})