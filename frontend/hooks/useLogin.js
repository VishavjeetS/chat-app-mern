import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const isValidated = handleInputErrors({ username, password });

    if (!isValidated) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.error) toast.error(data.error);

      localStorage.setItem("authUser", JSON.stringify(data));

      setAuthUser(data);

      setAuthUser(data);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default UseLogin;

function handleInputErrors(inputs) {
  for (const input in inputs) {
    if (!inputs[input]) {
      toast.error(`Please enter your ${input}.`);
      return false;
    }
  }

  return true;
}
