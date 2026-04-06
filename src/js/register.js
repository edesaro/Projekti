import { API_URL } from "./api.js";
// register.js käsittelee käyttäjien rekisteröitymisen. Se kuuntelee lomakkeen lähettämistä, hakee syötetyt tiedot ja tekee POST-pyynnön backendille uuden käyttäjän luomiseksi. Onnistuneen rekisteröinnin jälkeen käyttäjää ohjataan login-sivulle.
console.log("register.js loaded");

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json(); // Logataan backendin vastaus konsoliin debuggausta varten
        console.log("Response:", data); // Tämä auttaa näkemään, mitä backend palauttaa, erityisesti virhetilanteissa

        if (response.ok) {
            alert("Käyttäjä luotu! Voit nyt kirjautua sisään.");
            window.location.href = "login.html";
        } else {
            alert(data.error || "Rekisteröinti epäonnistui");
        }

    } catch (err) {
        console.error("Fetch error:", err);
        alert("Yhteysvirhe backendin kanssa");
    }
});// Tämä koodi kuuntelee rekisteröitymislomakkeen lähettämistä, 
// hakee syötetyt tiedot ja tekee POST-pyynnön backendille uuden käyttäjän luomiseksi. 
// Onnistuneen rekisteröinnin jälkeen käyttäjää ohjataan login-sivulle.
