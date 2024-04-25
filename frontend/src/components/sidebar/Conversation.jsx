import { useSocketContext } from "../../context/SocketContext";
import { useConversation } from "../../zustand/useConversation";

const Conversation = ({ conversation, lastidx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelectedChat = selectedConversation?._id === conversation._id;

  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-orange-600 rounded p-2 py-1 cursor-pointer ${
          isSelectedChat ? "bg-orange-600" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="ml-2">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
        </div>
      </div>
      {!lastidx && <div className="divider my-1 py-0 h-1" />}
    </>
  );
};

export default Conversation;
