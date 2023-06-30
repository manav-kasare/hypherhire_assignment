import mongoose from "mongoose";

const book = new mongoose.Schema(
    {
        title: { type: String, trim: true, required: true },
        description: { type: String, required: true },
        discount: { type: String, required: true },
        cover: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

book.virtual("id").get(function () {
    return this._id.toHexString();
});

book.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
    },
});

const Book = mongoose.model("book", book);

export default Book;
