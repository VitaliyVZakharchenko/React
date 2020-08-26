import React from "react";

const Offline = ({ onLogout }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button onClick={onLogout} className="status__btn">
        Reconnect
      </button>
    </>
  );
};

export default Offline;
