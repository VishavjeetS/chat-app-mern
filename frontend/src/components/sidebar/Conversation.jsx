const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-orange-600 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
          </div>
        </div>

        <div className="ml-2">
          <p className="font-bold text-gray-200">John Doe</p>
        </div>
      </div>
      <div className="divider my-1 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
