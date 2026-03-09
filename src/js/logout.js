const btn = document.getElementById("logoutBtn");

if (btn) {
  btn.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
}
