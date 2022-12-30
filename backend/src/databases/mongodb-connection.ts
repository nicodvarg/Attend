import DatabaseConnection from "./database-connection";
import mongoose from "mongoose";

class MongoDBConnection implements DatabaseConnection {
    public start(): void {
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