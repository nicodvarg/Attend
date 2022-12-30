import { getDateFromString } from "../utils";

class Student {
    private nid: number | null;
    private names: string | null;
    private surnames: string | null;
    private dateOfBirth: Date | null;
    private address: string | null;
    private contactNumber: string | null;

    constructor() {
        this.nid = null;
        this.names = null;
        this.surnames = null;
        this.dateOfBirth = null;
        this.address = null;
        this.contactNumber = null;
    }

    public setNID(newNID: number) {
        if (newNID)
            this.nid = newNID;
    }

    public getNID(): number | null {
        return this.nid;
    }

    public setNames(newNames: string) {
        if (newNames)
            this.names = newNames;
    }

    public getNames(): string | null {
        return this.names;
    }

    public setSurnames(newSurnames: string) {
        if (newSurnames)
            this.surnames = newSurnames;
    }

    public getSurnames(): string | null {
        return this.surnames;
    }

    public setDateOfBirth(newDateOfBirth: string) {
        if (newDateOfBirth) {
            this.dateOfBirth = getDateFromString(newDateOfBirth);
        }
    }

    public getDateOfBirth(): Date | null {
        return this.dateOfBirth;
    }

    public setAddress(newAddress: string) {
        if (newAddress)
            this.address = newAddress;
    }

    public getAddress(): string | null {
        return this.address;
    }

    public setContactNumber(newContactNumber: string) {
        if (newContactNumber)
            this.contactNumber = newContactNumber;
    }

    public getContactNumber(): string | null {
        return this.contactNumber;
    }

}

export default Student;