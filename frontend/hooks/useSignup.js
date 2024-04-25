import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async (
    fullName,
    username,
    password,
    confirmPassword,
    gender
  ) => {
    const isValidated = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!isValidated) return;

    setLoading(true);

    try {
      // Make a request to the server
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await response.json();
      if (data.message) throw new Error(data.message);

      localStorage.setItem("authUser", JSON.stringify(data));

      setAuthUser(data);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(`Error signing up: ${error}`);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default UseSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
};
