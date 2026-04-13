import { API_URL } from "./api.js";

const newEntryBtn = document.getElementById("newEntryBtn"); // Lisää uusi merkintä -nappi
const entryForm = document.getElementById("entryForm"); // Lomake, joka sisältää kentät painolle, unille, olotilalle ja kommentille
const saveEntryBtn = document.getElementById("saveEntryBtn"); // Tallenna merkintä -nappi
const calcBmiBtn = document.getElementById("calcBmiBtn");// BMI-laskurin nappi
const entriesContainer = document.getElementById("entriesContainer");// Kontti, johon merkinnät renderöidään

// Näytä/piilota lomake
newEntryBtn.addEventListener("click", () => {
  entryForm.classList.toggle("hidden");
});

// BMI-laskuri
calcBmiBtn.addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value); // Paino kilogrammoina
  const height = parseFloat(document.getElementById("height").value);// Pituus senttimetreinä

  if (!weight || !height) {
    alert("Syötä paino ja pituus.");
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  // Päivitä BMI-kenttä
  document.getElementById("bmi").value = bmi;
});

// Lataa merkinnät
async function loadEntries() {// Haetaan token localStoragesta
  const token = localStorage.getItem("token");
// Haetaan merkinnät backendistä
  const res = await fetch(`${API_URL}/entries`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
// Näytä merkinnät
  const entries = await res.json();
  entriesContainer.innerHTML = "";
// Muodostetaan merkinnät HTML:ksi
  entries.forEach(entry => {
    const box = document.createElement("div");
    box.classList.add("entry-box");

    // Muotoillaan päivämäärä nätiksi
    const date = new Date(entry.entry_date);
    const formattedDate = date.toLocaleDateString("fi-FI");

    box.innerHTML = ` // Tässä on merkinnän HTML-rakenne, joka sisältää päivämäärän, nukutut tunnit, painon, olotilan ja kommentit
      <h4>${formattedDate}</h4>
      <p><strong>Nukutut tunnit:</strong> ${entry.sleep_hours}</p>
      <p><strong>Paino:</strong> ${entry.weight} kg</p>
      <p><strong>Olotila:</strong> ${entry.mood}</p>
      <p class="comment">${entry.notes}</p>
    `;

    entriesContainer.appendChild(box);
  });
}

// Tallenna uusi merkintä
saveEntryBtn.addEventListener("click", async () => {
  const weight = document.getElementById("weight").value;
  const sleep = document.getElementById("sleep").value;
  const mood = document.getElementById("mood").value;
  const comment = document.getElementById("comment").value;

  // Backend VAATII entry_date → lisätään automaattisesti
  const today = new Date().toISOString().split("T")[0];

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      entry_date: today,
      mood,
      weight,
      sleep_hours: sleep,
      notes: comment
    })
  });

  if (res.ok) { // Jos tallennus onnistui, piilotetaan lomake ja ladataan merkinnät uudestaan
    entryForm.classList.add("hidden");
    loadEntries();
  } else {
    alert("Tallennus epäonnistui");
  }
});

// Lataa merkinnät sivun avautuessa
loadEntries();
