import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
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
});

export default mongoose.model("User", UserSchema);