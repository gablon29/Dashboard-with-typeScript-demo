import "./navBar.scss";

export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="logo.svg" alt="logos" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/noavatar.png" alt="avatar" />
          <span>User Name</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  );
};
//noavatar.png
