import { API_URL } from "./api.js";

console.log("login.js loaded");

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log("Login response:", data);

        if (response.ok && data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "home.html";
        } else {
            alert(data.error || "Kirjautuminen epäonnistui");
        }

    } catch (err) {
        console.error("Fetch error:", err);
        alert("Yhteysvirhe backendin kanssa");
    }
});
