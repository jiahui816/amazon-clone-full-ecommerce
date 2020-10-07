import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-dd298.cloudfunctions.net/api", //The API (Cloud function) URL
});

export default instance;

//http://localhost:5001/clone-dd298/us-central1/api
