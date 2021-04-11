import axios from "axios";

const baseURL = "http://52.66.239.92/api/batch/getBatchInfoAll";

export const instance = axios.create({
  baseURL: baseURL,
});
