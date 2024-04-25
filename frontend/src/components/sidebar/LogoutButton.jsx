import { CiLogout } from "react-icons/ci";
import UseLogout from "../../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = UseLogout();
  return (
    <div className="mt-10">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <CiLogout
          onClick={logout}
          className="w-8 h-8 outline-none text-white cursor-pointer"
        />
      )}
    </div>
  );
};

export default LogoutButton;
