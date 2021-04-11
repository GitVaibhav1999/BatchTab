import axios from "axios";

const baseURL = "http://52.66.239.92/api/batch";

const instance = axios.create({
  baseURL: baseURL,
});

export async function getData(request) {
  var reqData;
  reqData = await instance.get(request);

  return reqData;
}
