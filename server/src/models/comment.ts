import mongoose from "mongoose";


const comment = new mongoose.Schema(
    {
        text: { type: String, required: true },
        user: { type: { avatar: String, username: String, verified: Boolean }, required: true },
        likes: { type: Number, required: true },
        replies: { type: Number, required: true },
    },
    { timestamps: true }
);

comment.virtual("id").get(function () {
    return this._id.toHexString();
});

comment.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
    },
});

const Comment = mongoose.model("comment", comment);

export default Comment;
