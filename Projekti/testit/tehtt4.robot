*** Settings ***
Library    Browser

*** Variables ***
${URL}         http://localhost:5500
${USERNAME}    testi
${PASSWORD}    testi123

*** Test Cases ***

Uuden päiväkirjamerkinnän lisäys
    New Browser
    New Page    ${URL}

    # Kirjautuminen
    Fill Text    id=username    ${USERNAME}
    Fill Text    id=password    ${PASSWORD}
    Click        id=loginBtn

    # Avataan päiväkirjasivu
    Wait For Elements State    id=newEntryBtn    visible
    Click                      id=newEntryBtn

    # Täytetään lomake
    Wait For Elements State    id=sleep    visible
    Fill Text    id=sleep      7
    Select Options By    id=mood    value    3
    Fill Text    id=comment    Automaattitesti

    # Lähetetään lomake
    Click    id=submitBtn

    Close Browser
