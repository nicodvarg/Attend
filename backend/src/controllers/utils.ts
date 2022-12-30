import { Response } from "express";
import ResponseStatus from "./response-status";

let response: Response;
let status: number;

function sendOk(data: any, res: Response): void {
    setStatus(ResponseStatus.Ok);
    setResponse(res);
    sendData(data);
}

function sendBadRequest(data: any, res: Response): void {
    setStatus(ResponseStatus.BadRequest);
    setResponse(res);
    sendData(data);
}

function sendInternalServerError(data: any, res: Response): void {
    setStatus(ResponseStatus.IntertalServerError);
    setResponse(res);
    sendData(data);
}

function setStatus(newStatus: number) {
    status = newStatus;
}

function setResponse(newResponse: Response) {
    response = newResponse;
}

function sendData(data: any) {
    response.status(status).json({
        ok: isOkStatus(status),
        data
    });
}

function isOkStatus(status: number) {
    if (status === 200) {
        return true;
    }
    return false;
}

export {
    sendOk,
    sendBadRequest,
    sendInternalServerError
};