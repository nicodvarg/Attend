import "./config/config";

import express, { Application } from "express";
import bodyParser from "body-parser";
import { router } from "./routes/router";
import DatabaseConnection from "./databases/database-connection";
import MongoDBConnection from "./databases/mongodb-connection";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

const databaseConnection: DatabaseConnection = new MongoDBConnection();
databaseConnection.start();

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});