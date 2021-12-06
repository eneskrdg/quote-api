import axios from "axios";
import { BASE_URL } from "../constants/";

export const fetchRandomQuote = async () => {
  return axios.get(`${BASE_URL}/random`);
};

export const getAuthorList = async () => {
  return axios.get(`${BASE_URL}/authors`);
};
