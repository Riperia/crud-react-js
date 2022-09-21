import "./app-info.css";
import React from "react";

const AppInfo = ({ data, increased, rised }) => {
  return (
    <div className="app-info">
      <div className="app-infoa">
        <h1>Employees</h1>
        <h2>Counte of employess: {data}</h2>
        <h2>Increased: {increased}</h2>
        <h2>Rised: {rised}</h2>
      </div>
      <div className="ogo"></div>
    </div>
  );
};

export default AppInfo;
