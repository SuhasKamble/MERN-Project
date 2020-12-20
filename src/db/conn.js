const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mernproject",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database is connected..")
})
.catch((err)=>{
    console.log("Database is not connected..")
})