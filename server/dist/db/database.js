import mongoose from "mongoose";
const mongooseSchema = new mongoose.Schema({
    room: { type: String, require: true },
    author: { type: String, require: true },
    message: { type: String, require: true },
    time: { type: String, require: true },
});
export const Message = mongoose.model("Message", mongooseSchema);
