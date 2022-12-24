import "./config/config";

import express, { Application } from "express";
import bodyParser from "body-parser";
import mainRoute from "./routes/main";
import DBConnection from "./databases/db-connection";
import MongoDBConnection from "./databases/mongodb-connection";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(mainRoute);

const dbConnection: DBConnection = new MongoDBConnection();
dbConnection.start();

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});