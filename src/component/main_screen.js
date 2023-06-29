import React, { useEffect, useState } from "react";
import UserArea from "./user_area";
import { getMeetingName, fetchMeetingUsers } from "../apis/meetingFunctions";

const VideoConference = () => {
  const [usersList, setUsersList] = useState([]);
  const meetingName = getMeetingName();

  useEffect(() => {
    setUsersList(fetchMeetingUsers());
  });

  return (
    <div>
      <h1>Welcome to the {meetingName} Meeting</h1>
      {usersList.map((user) => (
        <UserArea user={user} />
      ))}
    </div>
  );
};

export default VideoConference;
