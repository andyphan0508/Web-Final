import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import PropTypes from "prop-types";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ name, username, text, profileVerified, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar />
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {name}
                <span className="postHeaderSpecial">
                  {profileVerified ? (
                    <VerifiedIcon className="postBadge" />
                  ) : null}
                </span>
              </h3>
              <p>{username}</p>
            </div>
            <div className="postHeaderDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={avatar} alt="" />
          <div className="postFooter">
            <ChatBubbleOutlineIcon className="postIcon" />
            <RepeatIcon className="postIcon" />
            <FavoriteBorderIcon className="postIcon" />
            <PublishIcon className="postIcon" />
          </div>
        </div>
      </div>
    );
  }
);

// Create props type for each components
Post.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  profileVerified: PropTypes.bool.isRequired,
  timeStamp: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default React.memo(Post);
