import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d321e58961394fc9b7e78bd62e2ba5e4"
  }
});
