import mongoose from "mongoose";

type ConnectionType = {
    isConnected?: number;
};

const connection: ConnectionType = {}

const connectMongoDB = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB_URI || "");
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectMongoDB;