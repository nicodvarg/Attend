import DBConnection from "./db-connection";
import mongoose from "mongoose";

class MongoDBConnection implements DBConnection {
    start(): void {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DBURI!, (err) => {
            if (err) {
                throw err;
            }
            console.log("Conectado a MongoDB");
        });
    }
}

export default MongoDBConnection;