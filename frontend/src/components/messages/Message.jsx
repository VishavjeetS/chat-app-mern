import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import { useConversation } from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const isMine = message.senderId === authUser._id;
  const chatClassName = isMine ? "chat-end" : "chat-start";
  const bubbleClassName = isMine
    ? "chat-bubble text-white bg-slate-500 text-start"
    : "chat-bubble text-black bg-slate-200 text-start";
  const footerClassName = isMine ? "text-end" : "text-start";
  const profilePicture = isMine
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;

  const formattedTime = extractTime(message.createdAt);
  const shake = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePicture} />
        </div>
      </div>
      <div className={`${bubbleClassName} ${shake}`}>{message.message}</div>
      <div className={`chat-footer ${footerClassName} opacity-50`}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
