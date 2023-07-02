import mongoose from "mongoose";


const reply = new mongoose.Schema(
    {
        text: { type: String, required: true },
        user: { type: { avatar: String, username: String, verified: Boolean }, required: true },
        likes: { type: Number, required: true },
        commentId: { type: String, required: true },
    },
    { timestamps: true }
);

reply.virtual("id").get(function () {
    return this._id.toHexString();
});

reply.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
    },
});

const Reply = mongoose.model("reply", reply);

export default Reply;
