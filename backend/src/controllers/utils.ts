import { Response } from "express";

function sendOk(data: any, res: Response): void {
    sendData(200, data, res);
}

function sendError400(data: any, res: Response): void {
    sendData(400, data, res);
}

function sendError500(data: any, res: Response): void {
    sendData(500, data, res);
}

function sendData(status: number, data: any, res: Response) {
    res.status(status).json({
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
    sendError400,
    sendError500
};