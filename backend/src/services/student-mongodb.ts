import Student from "./classes/student";
import DatabaseOperations from "./database-operations";
import StudentModel from "../models/student";

class StudentMongoDB implements DatabaseOperations {
    public async save(student: Student): Promise<JSON> {
        let studentModel = new StudentModel(student);
        const result: JSON = await studentModel.save()
            .then((dbResult: any) => {
                return dbResult;
            })
            .catch((err: Error) => {
                throw err;
            });

        return result;
    }

    public async getAll(): Promise<JSON[]> {
        throw new Error("Method not implemented.");
    }

    public async getOne(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }

    public async search(): Promise<JSON[]> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }
}

export default StudentMongoDB;