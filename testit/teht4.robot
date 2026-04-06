*** Settings ***
Library     Browser
Resource    Keywords.robot

*** Test Cases ***
Uuden Paivakirjamerkinnan Lisays
    New Browser    chromium    headless=No
    New Page    http://localhost:5173/src/html/login.html

    # Kirjautuminen
    Type Text       id=username    ${Username}    delay=0.1 s
    Type Secret     id=password    $Password
    Browser.Click   button[type="submit"]

    # Siirry paivakirjasivulle
    Go To    http://localhost:5173/src/html/paivakirja.html
    Click    css=#newEntryBtn
    Wait Until Page Contains Element    css=#entryForm

    # Tayta lomake
    Type Text           id=sleep      7.5                   delay=0.1 s
    Select Options By   id=mood       value    hyva
    Type Text           id=comment    Testi sujui hyvin!    delay=0.1 s

    # Tallenna merkinta
    Click    css=#saveEntryBtn
    Sleep    2s
