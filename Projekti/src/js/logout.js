// Haetaan logout-nappi
const logoutBtn = document.getElementById("logoutBtn");

// Kun käyttäjä painaa "Kirjaudu ulos"
logoutBtn.addEventListener("click", () => {
  // Poistetaan token localStoragesta
  localStorage.removeItem("token");

  // Ohjataan käyttäjä takaisin kirjautumissivulle
  window.location.href = "login.html";
});
