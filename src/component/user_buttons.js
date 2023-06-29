import React from "react";
import "./user_area.css";
import {
  handleMuteMyself,
  muteAllParticipants,
} from "../apis/meetingFunctions";
import { currentUserId } from "../keys/screen";

const UserButtons = ({ user }) => {
  return (
    <div>
      <button
        onClick={() =>
          currentUserId == user.userId ? handleMuteMyself(user.userId) : {}
        }
      >
        {user.isMuted ? "Unmute Microphone" : "Mute Microphone"}
      </button>
      {user.isAdmin && (
        <button onClick={muteAllParticipants}>Mute All Participants</button>
      )}
    </div>
  );
};

export default UserButtons;
