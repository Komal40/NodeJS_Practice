const mongoose=require('mongoose')

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:["chef", "waiter", "manager"],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String
    }
   
})


// create Person Model
const Person=mongoose.model('Persons', personSchema)
module.exports=Person


