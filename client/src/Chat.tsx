import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
interface messageContentProp {
  room: string;
  author: string;
  message: string;
  time: string;
}

function Chat({
  socket,
  username,
  room,
}: {
  socket: Socket;
  username: string;
  room: string;
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<messageContentProp[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).toLocaleString(),
      };

      // Emit the message to the server
      await socket.emit("send_message", messageData);

      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("load_messages", (data: []) => {
      data.map((eachData: messageContentProp) => {
        setMessageList((list) => [...list, eachData]);
      });
    });
  }, [socket]);

  useEffect(() => {
    const receiveMessageHandler = (data: messageContentProp) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", receiveMessageHandler);

    return () => {
      // Clean up the event listener
      socket.off("receive_message", receiveMessageHandler);
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((message: messageContentProp, key) => {
            return (
              <div
                className="message"
                key={key}
                id={username === message.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">{message.message}</div>
                  <div className="message-meta">
                    <p id="time">{message.time} </p>
                    <p id="author">{message.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
