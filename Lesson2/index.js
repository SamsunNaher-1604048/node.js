const fs =require('fs')
//data write
 fs.writeFile('one.txt','this is nodejs day 2',(err)=>{
    if(err){
         console.log(err)
     }
    else{
        console.log("successful")
         }
 })

 fs.appendFile('one.txt',' .here we learn abour fs',(err)=>{
     if(err){
        console.log(err)
     }else{
        console.log('successful')
    }
 })

//data read

 fs.readFile('one.txt','utf-8',(err,data)=>{
    if(err){
       console.log(err)
     }
    else{
        console.log(data)
     }
 })

//rename file name

fs.rename('one.txt','two.txt',(err)=>{
     if(err){
         console.log(err)
    }else{
       console.log('successfull')
    }
 })

//delete file

fs.unlink('two.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('successfull')
    }
})