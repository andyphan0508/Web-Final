import React from "react";
import "./Widgets.css";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import { TextField, FormControl, InputAdornment, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widget">
      <h2>Widgets</h2>
      <div className="widgetInput">
        <Input
          type="text"
          placeholder="Search"
          className="inputText"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <div className="widgetContainer">
        <h2>What's happening </h2>
        <TwitterTweetEmbed tweetId={"1529666069626990592"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="twitterdev" />
      </div>
    </div>
  );
};

export default Widgets;
