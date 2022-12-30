import { Response } from "express";
import ResponseStatus from "./response-status";
import Message from "./message";

class Responder {

    private response: Response | null;
    private message: Message;

    constructor() {
        this.response = null;
        this.message = new Message();
    }

    public sendOk(payload: any, res: Response): void {
        this.setMessage(payload, ResponseStatus.Ok);
        this.setResponse(res);
        this.sendData();
    }

    public sendBadRequest(payload: any, res: Response): void {
        this.setMessage(payload, ResponseStatus.BadRequest);
        this.setResponse(res);
        this.sendData();
    }

    public sendInternalServerError(payload: any, res: Response): void {
        this.setMessage(payload, ResponseStatus.IntertalServerError);
        this.setResponse(res);
        this.sendData();
    }

    private setMessage(payload: any, status: number): void {
        let message = new Message();
        message.setPayload(payload);
        message.setStatus(status);
        this.message = message;
    }

    private setResponse(response: Response): void {
        this.response = response;
    }

    private sendData(): void {
        this.response?.status(this.message.getStatus()).json({
            ok: this.message.isOkStatus(),
            data: this.message.getPayload()
        });
    }

}

export default Responder;