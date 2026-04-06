// src/js/fetch.js koodissa on yleinen fetchData-funktio, jota käytetään API-kutsuihin. Se käsittelee virheitä ja palauttaa joko datan tai virheilmoituksen.
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    
    // Tarkista content-type ennen JSON parsintaa
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response:", text);
      return { error: "Backend palautti ei-JSON vastauksen: " + text.substring(0, 100) };
    }

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || data.message || "Server error" };
    }

    return data;
  } catch (error) {
    console.error("fetchData() error:", error.message);
    return { error: "Network error: " + error.message };
  }
};

export { fetchData };
