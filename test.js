const express =require('express')
const app=express()
const path=require('path')
const middleware =require ("./middleware")

app.get('/error.html',(req,res)=>{
    res.sendFile(`${__dirname}/error.html`)
})
app.use(middleware)
app.use(express.static('Pages'))

// app.get("/",middleware,(req,res)=>{
//     res.status(200)
//     res.sendFile(path.join(__dirname,"Pages",'index.html'))
    
// })


// app.get("/home",(req,res)=>{
//     res.status(200)
//     res.sendFile(path.join(__dirname,"Pages",'home.html'))
    
// })
/*
app.get("/contact",(req,res)=>{
res.sendFile(`${__dirname}/Pages/contact.html`)

})

app.get("/service",(req,res)=>{
    res.sendFile(`${__dirname}/Pages/service.html`)
    
    })
 */

app.listen(5000,()=>{
    console.log("server is running...🏃‍♂️🏃‍♂️")
})