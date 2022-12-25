import express, { Application } from "express";
import StudentController from "../controllers/student";

const studentRouter: Application = express();
const studentController: StudentController = new StudentController();

studentRouter.get("/", (req, res) => studentController.getAll(req, res));
studentRouter.get("/search", (req, res) => studentController.search(req, res));
studentRouter.get("/:id", (req, res) => studentController.getOne(req, res));
studentRouter.post("/", (req, res) => studentController.save(req, res));
studentRouter.put("/:id", (req, res) => studentController.update(req, res));
studentRouter.delete("/:id", (req, res) => studentController.delete(req, res));

export { studentRouter };