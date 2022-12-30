import ResponseStatus from "./response-status";

class Message {

    private payload: any;
    private status: number;

    constructor() {
        this.payload = {};
        this.status = 200;
    }

    public setPayload(payload: any): void {
        this.payload = payload;
    }

    public getPayload(): any {
        return this.payload;
    }

    public setStatus(status: number): void {
        this.status = status;
    }

    public getStatus(): number {
        return this.status;
    }

    public isOkStatus(): boolean {
        if (this.status === ResponseStatus.Ok) {
            return true;
        }
        return false;
    }

}

export default Message;