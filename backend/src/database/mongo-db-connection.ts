import DBConnection from "./db-connection";
import mongoose from "mongoose";

class MongoDBConnection implements DBConnection {
    connect(): void {
        mongoose.connect(process.env.DBURI!, (err) => {
            if (err) {
                throw err;
            }
            console.log("Conectado a MongoDB");
        });
    }
}

export default MongoDBConnection;