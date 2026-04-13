---
layout: default
title: Päiväkirja - Ulla2.0
---
#Päiväkirja - Ulla2.0 Projekti

## Päiväkirjan raportoinissa ja bugien korjauksessa hyödynetty Claude ai 4.6 

## 2026-03-17 tehtävä 1

### Tekemät tehtävät

#### 1. Robot Framework -työkalujen asennus
- **Tehtävä:** Asentaa seuraavat kehitystyökalut omalle koneelle
- **Status:** ✅ Valmis

**Asennetut paketit:**
- Robot Framework (versio 7.4.2)
- Browser Library (robotframework-browser versio 19.12.5)
- Requests library (versio 2.32.5)
- CryptoLibrary (robotframework-crypto versio 0.4.2)
- Robotidy (robotframework-tidy versio 4.18.0)

**Asennuksessa käytetyt komennot
```bash
pip install --user robotframework robotframework-browser requests robotframework-crypto robotframework-tidy
```

**Tulokset:**
- Kaikki paketit asennettu onnistuneesti
- Kaikki riippuvuudet (dependencies) asennettu automaattisesti

**Huomiot:**
- `robotidy` -paketin oikea nimi on `robotframework-tidy` (ei `robotidy`)

---

## 24.3.2026  tehtävä 2 & 3– Robot Framework GUI-testaus

### Mitä tehtiin
Opeteltiin Robot Framework -testauksen perusteet käyttäen Browser Library -kirjastoa.
Testattiin ensin oman VitalFit-sovelluksen kirjautumissivua, 
sen jälkeen Seleniumin web-form-esimerkkisivua.

### Asennetut työkalut
- `robotframework` – Robot Framework -testauskirjasto
- `robotframework-browser` – Browser Library selaintestaukseen
- `rfbrowser init` – asensi Chromium-selaimen testikäyttöön

### Testitiedostot
| Tiedosto | Kuvaus |
|----------|--------|
| `browser_demo.robot` | Testaa VitalFit-sovelluksen kirjautumisen |
| `web_form_test.robot` | Testaa Seleniumin web-form-kentät |
| `Keywords.robot` | Muuttujat: käyttäjänimi ja salasana |

### Testien tulokset
- `browser_demo.robot` – kirjautuminen onnistui 
- `web_form_test.robot` – tekstikentät, dropdown, checkbox, radio button ja lomakkeen lähetys testattu 

### Raportit
Kaikki loki- ja raporttitiedostot ohjattu kansioon:
```
k2026-hyte-projekti-vite/outputs/
├── log.html       ← yksityiskohtainen loki
├── report.html    ← yhteenveto testeistä
└── output.xml     ← koneluettava tulos
```

### Komento jolla testit ajettiin
```bash
python -m robot -d outputs web_form_test.robot
python -m robot -d outputs browser_demo.robot
```

### Opitut asiat
- Robot Framework-tiedoston rakenne (Settings, Variables, Test Cases)
- `Type Text` vs `Type Secret` – salasana piilotetaan lokista
- Selektorit: `id=`, `[name=""]`, `text=`
- Testiraporttien ohjaaminen `-d outputs` lipulla

---

## 2024-10-XX Tehtävät 4-6 – Lisätestaukset

## 5.4.2026 - Tehtävät 4, 5 ja 6
kaikki testit löytyvät testit kansiossa

### Tehtävä 4: Päiväkirjamerkinnän lisäys
**Status:** ✅ Valmis

**Tehty:**
- Kirjoitettu Robot Framework -testi joka simuloi käyttäjän toimintaa selaimessa
- Testi kirjautuu sisään VitalFit-sovellukseen, avaa päiväkirjasivun ja lisää uuden merkinnän
- Lomakkeelle täytetään nukutut tunnit, olotila ja kommentti
- Käytetty Browser Library -selektoreita: `css=#newEntryBtn`, `id=sleep`, `id=mood`, `id=comment`
- Korjattu ongelma: dropdown vaati `index`-valintaa koska ä-kirjain aiheutti enkoodausongelman
- Tiedosto: `testit/teht4.robot`

**Komennot:**
```bash
python -m robot --outputdir outputs/teht4 testit/teht4.robot
```

**Tulokset:** Testi läpäisty onnistuneesti. Raportti: `outputs/teht4/report.html`

---

### Tehtävä 5: Kirjautuminen .env-tiedostolla
**Status:** ✅ Valmis

**Tehty:**
- Luotu `.env`-tiedosto johon käyttäjätunnus ja salasana piilotettu
- Lisätty `.env` gitignore-listaan jotta tunnukset eivät mene GitHubiin
- Testi lukee tunnukset ympäristömuuttujista `Get Environment Variable` -keywordilla
- Tiedosto: `testit/teht5.robot`

**Komennot:**
```bash
python -m robot --outputdir outputs/teht5 testit/teht5.robot
```

**Tulokset:** Testi läpäisty onnistuneesti. Raportti: `outputs/teht5/report.html`

---

### Tehtävä 6: Kirjautuminen CryptoLibraryllä
**Status:** ✅ Valmis

**Tehty:**
- Luotu avainpari CryptoLibraryn `generate_key` -komennolla
- Salattu käyttäjätunnus ja salasana `crypt:...` -muotoon
- Salatut arvot tallennettu suoraan robot-tiedostoon turvallisesti
- CryptoLibrary purkaa salauksen automaattisesti testin ajon aikana
- Tiedosto: `testit/teht6.robot`

**Komennot:**
```bash
python -m robot --outputdir outputs/teht6 testit/teht6.robot
```

**Tulokset:** Testi läpäisty onnistuneesti. Raportti: `outputs/teht6/report.html`


## Testiraportit
- [Teht�v� 4 - Raportti](outputs/teht4/report.html)
- [Teht�v� 4 - Loki](outputs/teht4/log.html)
- [Teht�v� 5 - Raportti](outputs/teht5/report.html)
- [Teht�v� 5 - Loki](outputs/teht5/log.html)
- [Teht�v� 6 - Raportti](outputs/teht6/report.html)
- [Teht�v� 6 - Loki](outputs/teht6/log.html)
