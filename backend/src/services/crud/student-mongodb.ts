import Student from "../classes/student";
import CRUDOperations from "./crud-operations";
import StudentModel from "../../models/student";

class StudentMongoDB implements CRUDOperations {
    async save(newStudent: Student): Promise<JSON> {
        let studentModel = new StudentModel(newStudent);
        const result: JSON = await studentModel.save()
            .then((dbResult: any) => {
                return dbResult;
            })
            .catch((err: Error) => {
                throw err;
            });

        return result;
    }

    async getAll(): Promise<JSON[]> {
        throw new Error("Method not implemented.");
    }

    async getOne(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }

    async search(): Promise<JSON[]> {
        throw new Error("Method not implemented.");
    }

    async update(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }

    async delete(): Promise<JSON> {
        throw new Error("Method not implemented.");
    }
}

export default StudentMongoDB;