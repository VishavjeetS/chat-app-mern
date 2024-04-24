import Messages from "./Mesasges";
import MessageInput from "./MessageInput";

import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-400 px-4 py-2 mb-2 text-start">
            <span className="label-text text-gray-700">To:</span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome <span className="font-bold">John Doe.</span>
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="etxt-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
