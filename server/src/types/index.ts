import { NextFunction, Request, Response } from "express";

export type IConfig = {
    PORT: string;
};

export type IBook = {
    id: number;
    title: string;
    description: string;
    discount: number;
    cover: string;
    price: number;
};

export type IControllerArgs = {
    (
        req: Request<any, any, any, any, Record<string, any>> | any,
        res: Response<any, any>,
        next?: NextFunction
    ): any;
};
