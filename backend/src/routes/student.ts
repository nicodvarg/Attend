import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/student", (req: Request, res: Response) => {
    res.send("get todos los estudiantes");
});

app.get("/student/:id", (req: Request, res: Response) => {
    res.send("get un estudiante");
});

app.post("/student", (req: Request, res: Response) => {
    res.send("post un estudiante");
});

app.put("/student/:id", (req: Request, res: Response) => {
    res.send("put un estudiante");
});

app.delete("/student/:id", (req: Request, res: Response) => {
    res.send("delete un estudiante");
});

export default app;