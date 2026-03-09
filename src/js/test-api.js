import { login, getEntries } from "./api.js";
console.log("test-api.js ladattu!");


document.addEventListener("DOMContentLoaded", () => {
  console.log("API testisivu ladattu");

  const loginBtn = document.getElementById("testLogin");
  const entriesBtn = document.getElementById("testEntries");

  // LOGIN TESTI
  loginBtn.addEventListener("click", async () => {
    const res = await login("testi", "testi123");

    console.log("Login vastaus:", res);

    if (res.token) {
      localStorage.setItem("token", res.token);
      console.log("Token tallennettu:", res.token);
    } else {
      console.log("Login epäonnistui");
    }
  });

  // ENTRIES TESTI
  entriesBtn.addEventListener("click", async () => {
    const data = await getEntries();
    console.log("Entries vastaus:", data);
  });
});
