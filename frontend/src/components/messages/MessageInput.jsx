import { FiSend } from "react-icons/fi";
import useSendMessage from "../../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-slate-400 placeholder:text-black  text-black focus:border-orange-500 focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <FiSend className="text-orange-500" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
