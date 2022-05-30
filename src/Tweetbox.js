import { Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Tweetbox.css";
import db from "./firebase";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // Send tweet to firebase with my init base
    db.collection("posts").add({
      name: "Andy Phan",
      username: "andyphan0508",
      profileVerifed: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar className="avatar" />
          <input
            placeholder="What's on your mind"
            className="input"
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
          />
        </div>

        <Button variant="contained" className="button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
      <input
        placeholder="Express yourself with an image: "
        onChange={(e) => setTweetImage(e.target.value)}
        className="image"
        type={"text"}
      />
    </div>
  );
};

export default Tweetbox;
