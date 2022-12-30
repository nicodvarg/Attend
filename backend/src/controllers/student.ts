import { Request, Response } from 'express';
import DatabaseOperations from "../services/database-operations";
import StudentMongoDB from "../services/student-mongodb";
import Student from "../services/classes/student";
import { sendOk, sendError400 } from './utils';

class StudentController {
    private database: DatabaseOperations;

    constructor() {
        this.database = new StudentMongoDB();
    }

    public async save(req: Request, res: Response): Promise<void> {
        try {
            const newStudent: Student = this.createStudent(req.body);
            const dbResponse: JSON = await this.database.save(newStudent);
            sendOk(dbResponse, res);
        } catch (error) {
            sendError400(error, res);
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

    private createStudent(studentData: any): Student {

        let student = new Student();

        student.setNID(Number(studentData.nid));
        student.setNames(studentData.names);
        student.setSurnames(studentData.surnames);
        student.setDateOfBirth(studentData.dateOfBirth);
        student.setAddress(studentData.address);
        student.setContactNumber(studentData.contactNumber);

        return student;
    }

}

export default StudentController;