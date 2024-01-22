import mongoose from "mongoose";
const dbURL = "mongodb://localhost:27017/chat";
mongoose.connect(dbURL);
const db = mongoose.connection;
db.on("error", () => console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("connected to db successfully");
});
const messageSchema = new mongoose.Schema({
    room: String,
    author: String,
    message: String,
    time: String,
});
export const Message = mongoose.model("message", messageSchema);
