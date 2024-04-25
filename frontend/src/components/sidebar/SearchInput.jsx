import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useConversation } from "../../zustand/useConversation";
import useGetConversations from "../../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search query must be at least 3 characters long.");

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (!conversation) return toast.error("No conversation found.");

    setSelectedConversation(conversation);
    setSearch("");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full input input-bordered rounded-full"
      />

      <button type="submit" className="btn btn-circle bg-orange-700 text-white">
        <CiSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchInput;
