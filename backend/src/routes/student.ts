import express, { Application, Request, Response } from "express";
import CRUDOperations from "../services/crud/crud-operations";
import StudentMongoDB from "../services/crud/student-mongodb";
import Student from "../services/classes/student";

const app: Application = express();

const studentDB: CRUDOperations = new StudentMongoDB();

app.get("/", (req: Request, res: Response) => {
    res.send("get todos los estudiantes");
});

app.get("/search", (req: Request, res: Response) => {
    res.send("get estudiantes según campos de búsqueda");
});

app.get("/:id", (req: Request, res: Response) => {
    res.send("get un estudiante");
});

app.post("/", async (req: Request, res: Response) => {
    let student: Student = createStudent(req);
    try {
        const studentSaved = await studentDB.save(student);
        sendOkResponse(studentSaved, res);
    } catch (error) {
        sendError(400, error, res);
    }
});

app.put("/:id", (req: Request, res: Response) => {
    res.send("put un estudiante");
});

app.delete("/:id", (req: Request, res: Response) => {
    res.send("delete un estudiante");
});

const createStudent = (req: Request): Student => {
    let student = new Student();
    //TODO: Tomar datos del body en request
    //TODO: Validar datos
    student.setNID(1)
    student.setNames("Juan");
    student.setSurnames("Perez");

    return student;
}

const sendOkResponse = (data: JSON, res: Response): void => {
    res.json({
        ok: true,
        data
    });
}

const sendError = (status: number, error: any, res: Response): void => {
    res.status(status).json({
        ok: false,
        error
    });
}

export default app;