import { useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";
import "./App.css";

const socket = io("http://localhost:4000/users");
socket.on("connect", () => {});

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    // join room
    if (username != "" && room != "") {
      socket.emit("join_room", { room, username });
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {/* toggle Chat */}
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
          />

          <button onClick={joinRoom}>join Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
