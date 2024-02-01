import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function HandleClick() {
    logout();
    navigate("/");
  }
  return (
    <div className={styles.user}>
      <img src="/8881290.jpg" alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={HandleClick}>Logout</button>
    </div>
  );
}

export default User;
