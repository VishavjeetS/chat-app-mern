const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-slate-500">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="chat-footer opacity-50">12:12</div>
    </div>
  );
};

export default Message;
