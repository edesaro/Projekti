import { API_URL } from "./api.js";

console.log("login.js loaded");

const form = document.getElementById("loginForm");

import { login } from "./api.js";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const result = await login(username, password);
    console.log("Login result:", result);

    if (result.token) {
        localStorage.setItem("token", result.token);
        window.location.href = "home.html";
    } else {
        alert(result.error || "Kirjautuminen epäonnistui");
    }
});
