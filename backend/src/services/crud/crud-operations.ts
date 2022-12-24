interface CRUDOperations {
    save(objectToSave: Object): Promise<JSON>;
    getAll(): Promise<JSON[]>;
    getOne(): Promise<JSON>;
    search(): Promise<JSON[]>;
    update(): Promise<JSON>;
    delete(): Promise<JSON>;
}

export default CRUDOperations;