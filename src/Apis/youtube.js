import axios from "axios";
const KEY = "AIzaSyA9U06A1rmR6Q7ieyWbPMvuqzV09j96-F4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
