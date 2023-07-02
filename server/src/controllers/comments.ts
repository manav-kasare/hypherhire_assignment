import commentsMock from '../mocks/comments.json';
import { IControllerArgs } from "../types";

export const getComments: IControllerArgs = async (req, res) => {
    try {
        return res.json({ data: commentsMock, message: "Got comments successfully!", error: false });
    } catch (error: any) {
        console.log("Error getting comments", error);
        return res.json({ data: null, message: "An unexpected error occured", error: true });
    }
};