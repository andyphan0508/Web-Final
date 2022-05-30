import React from "react";
import "./SidebarOption.css";
import { Router, Route, browserHistory, indexRoute } from "react-router";

const SidebarOption = ({ isActive, text, Icon }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`sidebarOption ${isActive && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default React.memo(SidebarOption);
