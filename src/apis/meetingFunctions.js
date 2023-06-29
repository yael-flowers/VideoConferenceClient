import axios from "axios";
import { meetingId, users } from "../keys/screen";
import {
  HANDLE_MUTE_PARTICIPANT,
  MUTE_ALL_PARTICIPANTS,
  GET_MEETING_NAME,
  GET_MEETING_PARTICIPANTS,
} from "./urls";

export const handleMuteMyself = async (user_id) => {
  await axios.post(`${HANDLE_MUTE_PARTICIPANT}${user_id}`);
};

export const muteAllParticipants = async () => {
  await axios.post(`${MUTE_ALL_PARTICIPANTS}${meetingId}`);
};

export const getMeetingName = () => {
  const response = axios.get(`${GET_MEETING_NAME}${meetingId}`);
  // return response?.data;
  return "meeting";
};

export const fetchMeetingUsers = () => {
  const response = axios.get(`${GET_MEETING_PARTICIPANTS}${meetingId}`);
  // return response?.data;
  return users;
};
