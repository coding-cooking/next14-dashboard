import mongoose from "mongoose";

type connectionProps = {
    isConnected?: boolean;
}

export const connectToDB = async () => {

    const connection: connectionProps  = {}

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
}