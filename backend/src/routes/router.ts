import express, { Application } from "express";
import { studentRouter } from "./student";

const router: Application = express();

router.use("/api/student", studentRouter);

export { router };