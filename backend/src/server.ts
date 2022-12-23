import "./config/config";

import express, { Application } from "express";
import bodyParser from "body-parser";
import mainRoute from "./routes/main";
import DBConnection from "./database/db-connection";
import MongoDBConnection from "./database/mongo-db-connection";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(mainRoute);

const dbConnection: DBConnection = new MongoDBConnection();
dbConnection.connect();

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});