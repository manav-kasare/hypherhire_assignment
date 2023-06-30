import booksMock from '../mocks/books.json';
import { IControllerArgs } from "../types";

export const getBooks: IControllerArgs = async (req, res) => {
    try {
        const { offset, limit } = req.query;

        const offsetNum = parseInt(offset, 10);
        const limitNum = parseInt(limit, 10);

        if (offsetNum >= booksMock.length) {
            return res.json({ data: booksMock.slice(0, limitNum), message: "Pagination reset", error: false }); // Return an empty array

        }

        const data = booksMock.slice(offsetNum, offsetNum + limitNum)
        return res.json({ data, message: "Got books successfully!", error: false });
    } catch (error: any) {
        console.log("Error getting books", error);
        return res.json({ data: null, message: "An unexpected error occured", error: true });
    }
};