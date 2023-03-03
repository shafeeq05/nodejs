const express = require('express')
const path =require('path')
const fs= require('node:fs/promises')
let data= require('./data.json') //json file 
const parse = require('body-parser')
const cors = require('cors')
const app=express()
app.use(cors())
app.use(parse.urlencoded({extended:true}))
app.use(parse.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/',(req,res)=>{
    console.log(data);
    res.send(data)

})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


app.post('/',(req,res)=>{
    console.log(req.body);
    if(data[1]==null){
    data=[0,0]}
    let depo = req.body
    // console.log( Object.entries(depo)[0][0]);
    if(Object.entries(depo)[0][0]=='deposit'){
        console.log("if depo"+req.body.deposit);
        depo = req.body.deposit
        bank(depo,0)
    }else{
        console.log("if with "+req.body.withdraw);
        depo=req.body.withdraw
        bank(0,depo)
    }
   
   

    function bank(...arg){
        console.log(arg[1]);

        // data.push(req.body)
        // fs.writeFile('./data.json',JSON.stringify(data))
        if(arg[0]!=0){
    arg=Number(arg[0])
    let old = data[1]
    data = [0]
    // console.log(arg);

            data.push(arg+old)
    fs.writeFile('./data.json',JSON.stringify(data))
        
        }else{
            // console.log(arg[0]);


            let less =data[1]-arg[1]
            data=[0]     
            console.log(less);

            data.push(less)
            fs.writeFile('./data.json',JSON.stringify(data))

        }

    
    }
   
    
   
    
}).listen(3000)

