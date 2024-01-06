import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://alesaturno64:X9L0NjDU3MKOAUWk@sodastereologin.vc7gzuw.mongodb.net/");
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}