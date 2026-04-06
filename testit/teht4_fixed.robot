*** Settings ***
Library     Browser
Resource    Keywords.robot

*** Variables ***
${USERNAME}    dada
${PASSWORD}    dada
${VITE_URL}    http://localhost:5173/src/html

*** Test Cases ***
Uuden Päiväkirjamerkinnän Lisäys
Open Browser To VitalFit
    Login    ${USERNAME}    ${PASSWORD}

    # Kirjautuminen
    Type Text       id=username    ${USERNAME}    delay=0.5s
    Type Secret     id=password    $PASSWORD    delay=0.5s
    Browser.Click    button[type="submit"]
    Sleep    1s    # Odotetaan login

    # Siirry päiväkirjasivulle
    Go To    ${PAIVAKIRJA_URL}
Wait Until Page Contains    Päiväkirja

    # Avaa uusi merkintä formi
    Click    css:.new-entry-btn
Wait Until Page Contains Element    css:#newEntryForm

    # Täytä lomake (paivakirja.html:n mukaan)
    Fill Weight    75.5
    Fill Sleep Hours    7.5
    Fill Condition    hyvä
    Fill Comment    Testimerkintä - BLACKBOXAI FIXED

    # Tallenna merkintä
    Click    css:#saveEntryBtn
    Sleep    3s

    # Varmistus (päivitä jos erilainen selector)
    Entry Box Should Contain    Testimerkintä - BLACKBOXAI FIXED

    [Teardown]    Close Browser
