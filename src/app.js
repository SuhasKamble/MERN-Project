const express = require('express')
require('./db/conn')
const User  = require('./models/user')

const path = require('path')
const app = express()

const port  = process.env.PORT || 8000;
app.use(express.urlencoded({extended:false}))
app.use(express.json())


const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath))
app.set('view engine', 'hbs');

// Routing 
app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/",async(req,res)=>{
    try{
        const userData = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            msg:req.body.msg
        })
        console.log(userData)
        const user = await userData.save()
        res.render('index')
    }
    catch(e){
        res.send(e)
    }
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}..`)
})

