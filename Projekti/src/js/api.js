import { fetchData } from "./fetch.js";
export const API_URL = '/api';

console.log("API URL:", API_URL);

// LOGIN
export const login = async (username, password) => {
  return fetchData(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
  });
};

// GET ENTRIES
export const getEntries = async () => {
  const token = localStorage.getItem("token");

  return fetchData(`${API_URL}/entries`, {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  });
};
