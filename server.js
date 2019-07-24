const express = require('express')
const hbs = require('hbs')
const app = express()

// app.use(date=(req,res,next)=>{
//     let requesAt = new Date()
//     console.log(requesAt)
//     next()
// })

// app.use(express.static(__dirname+'/public'))

// date = (req, res, next) => {
//     let requesAt = new Date()
//     console.log(requesAt)
//     next()
// }

app.set('view engine', hbs)
app.get('/',(req,res)=>{
     res.render('index.hbs',{name:"rabeh"})
})

app.get('/List', (req, res) => {
    res.render('List.hbs')
})

app.get('/Contact', (req, res) => {
    res.render('Contact.hbs')
})


// app.get('/home', date,(req,res)=>{
//     res.send('Hello, this the home page')
//    console.log(req.get('Content-Type')) ;   
// })

// app.get('/user/:nom',(req,res)=>{
//     res.send(req.params.nom+' is connected')
// }) 

// app.get('/page',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })

app.listen( 3000,(err)=>{
    if(err)
        {console.log("server is not running")}
    else
        {console.log("server is running on port 3000 ")}
})