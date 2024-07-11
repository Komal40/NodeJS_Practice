const mongoose=require('mongoose')

// Define mongodb url
const mongoURL='mongodb://127.0.0.1:27017/hotels'


// set up connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true, // Remove this line
    // useUnifiedTopology: true, // Remove this line
    // Other options as needed
  })

// get default connection
const db=mongoose.connection

// add event listeners
db.on('connected',()=>{
    console.log("MongoDB connected")
})

db.on('error',(err)=>{
    console.log("Mongoose Error ",err)
})
db.on('disconnected',()=>{
    console.log("MongoDB disconnected")
})

// export db 
module.exports=db