import { Response } from "express";

function sendResponse(status: number, data: any, res: Response): void {
    res.status(status).json({
        ok: true,
        data
    });
}

export { sendResponse }