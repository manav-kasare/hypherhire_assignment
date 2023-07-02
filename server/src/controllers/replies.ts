import repliesMock from '../mocks/replies.json';
import { IControllerArgs } from "../types";

export const getReplies: IControllerArgs = async (req, res) => {
    try {
        const {commentId} = req.params;
        return res.json({ data: repliesMock.filter(item => item.commentId === commentId), message: "Got replies successfully!", error: false });
    } catch (error: any) {
        console.log("Error getting replies", error);
        return res.json({ data: null, message: "An unexpected error occured", error: true });
    }
};