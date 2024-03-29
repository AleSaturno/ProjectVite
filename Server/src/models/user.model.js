import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
        
    },
    password:{
        type: String,
        require: true
    },
},{timestamps:true});

export default mongoose.model("User", UserSchema);