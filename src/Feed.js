import React, { useEffect } from "react";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPost] = React.useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="feed">
      <div>
        <h2 className="feedHeader">Home</h2>
      </div>
      <Tweetbox />
      {posts.map((post) => (
        <Post
          key={post.text}
          name={post.name}
          username={post.username}
          profileVerified={false}
          avatar={post.avatar}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default Feed;
