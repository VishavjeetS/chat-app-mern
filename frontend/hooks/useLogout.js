import { useState } from "react";
import { useAuthContext } from "../src/context/AuthContext";
import toast from "react-hot-toast";

const UseLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (data.error) throw new Error(data.message);
      localStorage.removeItem("authUser");
      setAuthUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error(`Error logging out: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default UseLogout;
