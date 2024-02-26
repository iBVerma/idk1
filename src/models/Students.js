import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
    
    

})

const Student = mongoose.models.students || mongoose.model("students", studentSchema);

export default Student;