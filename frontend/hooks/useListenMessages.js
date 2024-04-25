import { useEffect } from "react";
import { useSocketContext } from "../src/context/SocketContext";
import { useConversation } from "../src/zustand/useConversation";
import sound from "../src/assets/Sounds/notification.mp3";

const UseListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      message.shouldShake = true;
      const soundNotification = new Audio(sound);
      soundNotification.play();
      setMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
};

export default UseListenMessages;
