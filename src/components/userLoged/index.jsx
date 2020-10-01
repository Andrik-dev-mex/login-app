import React from "react";

const userLoged = ({ user, onLogout }) => {
  const logout = () => {
    onLogout();
    window.FB.logout(() => {});
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      {user.picture && (
        <img
          src={user.picture.data.url}
          alt={user.name}
          style={{
            width: 40 + "px",
            height: 40 + "px",
            borderRadius: 20 + "px",
            marginRight: 10 + "px"
          }}
        />
      )}
      <span className = "text-white">{user.name}</span>
      <a href="/logout" className="nav-item nav-link text-white" onClick={logout}>
        Salir
      </a>
    </nav>
  );
};

export default userLoged;
