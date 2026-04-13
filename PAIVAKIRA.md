# Päiväkirja - Ulla2.0 Projekti

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

**Asennuksessa käytetyt komennot:**
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

## Robot Framework -testiraportit

### Tehtävä 4 - Päiväkirja-testit
 [Tehtävä 4 Raportti](Projekti/outputs/teht4/report.html)

### Tehtävä 5 - Testit
 [Tehtävä 5 Raportti](Projekti/outputs/teht5/report.html)

### Tehtävä 6 - Testit
📊[Tehtävä 6 Raportti](Projekti/outputs/teht6/report.html)

---
