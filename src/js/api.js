import { fetchData } from "./fetch.js";
const API = import.meta.env.VITE_API_URL;
export const API_URL = API;

console.log("API URL:", API);

// LOGIN
export const login = async (username, password) => {
  return fetchData(`${API}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
  });
};

// GET ENTRIES
export const getEntries = async () => {
  const token = localStorage.getItem("token");

  return fetchData(`${API}/entries`, {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  });
};
