// src/js/fetch.js koodissa on yleinen fetchData-funktio, jota käytetään API-kutsuihin. Se käsittelee virheitä ja palauttaa joko datan tai virheilmoituksen.
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return { error: data.error || data.message || "An error occurred" };
    }

    return data;
  } catch (error) {
    console.error("fetchData() error:", error.message);
    return { error: error.message };
  }
};

export { fetchData };
