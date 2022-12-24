class Student {
    private nid: Number;
    private names: String;
    private surnames: String;
    private dateOfBirth: Date;
    private address: String;
    private contactNumber: String;

    constructor() {
        this.nid = -1;
        this.names = "";
        this.surnames = "";
        this.dateOfBirth = new Date(0);
        this.address = "";
        this.contactNumber = "";
    }

    setNID(newNID: Number) {
        this.nid = newNID;
    }

    getNID(): Number {
        return this.nid;
    }

    setNames(newNames: String) {
        this.names = newNames;
    }

    getNames(): String {
        return this.names;
    }

    setSurnames(newSurnames: String) {
        this.surnames = newSurnames;
    }

    getSurnames(): String {
        return this.surnames;
    }

    setDateOfBirth(newDateOfBirth: Date) {
        this.dateOfBirth = newDateOfBirth;
    }

    getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    setAddress(newAddress: String) {
        this.address = newAddress;
    }

    getAddress(): String {
        return this.address;
    }

    setContactNumber(newContactNumber: String) {
        this.contactNumber = newContactNumber;
    }

    getContactNumber(): String {
        return this.contactNumber;
    }

}

export default Student;