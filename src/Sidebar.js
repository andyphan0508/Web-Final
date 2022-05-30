import React from "react";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/List";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebarTwitterIcon" />
      <SidebarOption text={"Home"} Icon={HomeIcon} />
      <SidebarOption text={"Search"} Icon={SearchIcon} />
      <SidebarOption text={"Notifications"} Icon={NotificationsNoneIcon} />
      <SidebarOption text={"Message"} Icon={MailOutlineIcon} />
      <SidebarOption text={"Bookmarks"} Icon={BookmarkBorderIcon} />
      <SidebarOption text={"List"} Icon={ListIcon} />
      <SidebarOption text={"Profile"} Icon={PermIdentityIcon} />
      <SidebarOption text={"More"} Icon={MoreHorizIcon} />
      <Button className="sidebarTweet" variant="contained">
        Tweet/Post
      </Button>
    </div>
  );
};

export default React.memo(Sidebar);
