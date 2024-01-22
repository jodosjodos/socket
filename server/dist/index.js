import { Server } from "socket.io";
import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import mongoose from "mongoose";
import { Message } from "./db/database.js";
// config dotenv
dotenv.config();
// initialize http Server
const app = express();
app.use(cors());
const httpServer = createServer(app);
// db initialization
mongoose
    .connect("mongodb://localhost:27017/messages")
    .then(() => {
    console.log("connected successfully");
})
    .catch((err) => console.log(err + "during connection"));
// io initialization
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    },
});
io.on("connection", (socket) => {
    console.log("someone connected", socket.id);
    socket.on("join_room", (data) => {
        socket.join(data.room);
        console.log(`user with this id :${socket.id} have join this :${data.username} room`);
        Message.find().then((data) => {
            socket.emit("load_messages", data);
        });
    });
    socket.on("send_message", async (data) => {
        const message = new Message(data);
        message.save().then(() => {
            socket.to(data.room).emit("receive_message", message);
        });
    });
    // when user disconnected
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});
// listening to port
const PORT = process.env.PORT;
httpServer.listen(PORT, () => {
    console.log(`reaching out on port ${PORT}`);
});
