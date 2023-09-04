import { Link } from "react-router-dom";
import "./menu.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/profile.svg" alt="profile" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
    </div>
  );
};
