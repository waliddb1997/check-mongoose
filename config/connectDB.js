const mongoose=require('mongoose');


const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/firstapp')
        console.log("data base is connected")
    } catch (error) {
        console.log(error)
        
    }
    

}

module.exports=connectDB;