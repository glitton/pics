import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a99cb25ac35e99ac574cbe761886959945094242db39d4e41528408284c9075f"
  }
});
