import { getDateFromString } from "./utils";

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

    public setNID(nid: number): void {
        if (nid)
            this.nid = nid;
    }

    public getNID(): number | null {
        return this.nid;
    }

    public setNames(names: string): void {
        if (names)
            this.names = names;
    }

    public getNames(): string | null {
        return this.names;
    }

    public setSurnames(surnames: string): void {
        if (surnames)
            this.surnames = surnames;
    }

    public getSurnames(): string | null {
        return this.surnames;
    }

    public setDateOfBirth(dateOfBirth: string): void {
        if (dateOfBirth) {
            this.dateOfBirth = getDateFromString(dateOfBirth);
        }
    }

    public getDateOfBirth(): Date | null {
        return this.dateOfBirth;
    }

    public setAddress(address: string): void {
        if (address)
            this.address = address;
    }

    public getAddress(): string | null {
        return this.address;
    }

    public setContactNumber(contactNumber: string): void {
        if (contactNumber)
            this.contactNumber = contactNumber;
    }

    public getContactNumber(): string | null {
        return this.contactNumber;
    }

}

export default Student;