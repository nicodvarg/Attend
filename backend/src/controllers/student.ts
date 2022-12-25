import { Request, Response } from 'express';
import DatabaseOperations from "../services/database-operations";
import StudentMongoDB from "../services/student-mongodb";
import Student from "../services/classes/student";
import { sendResponse } from './utils';

class StudentController {
    private database: DatabaseOperations;

    constructor() {
        this.database = new StudentMongoDB();
    }

    public async save(req: Request, res: Response): Promise<void> {
        let student: Student = this.createStudent(req);
        try {
            const studentSaved = await this.database.save(student);
            sendResponse(200, studentSaved, res);
        } catch (error) {
            sendResponse(400, error, res);
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {

    }

    public async getOne(req: Request, res: Response): Promise<void> {

    }

    public async search(req: Request, res: Response): Promise<void> {

    }

    public async update(req: Request, res: Response): Promise<void> {

    }

    public async delete(req: Request, res: Response): Promise<void> {

    }


    private createStudent(req: Request): Student {
        let student = new Student();
        //TODO: Tomar datos del body en request
        //TODO: Validar datos
        student.setNID(1)
        student.setNames("Juan");
        student.setSurnames("Perez");

        return student;
    }

}

export default StudentController;