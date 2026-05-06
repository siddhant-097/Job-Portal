import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {

    //an event listener
    mongoose.connection.on('connected',() => console.log('Database Connected'))

    //connect with db
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)

}

export default connectDB