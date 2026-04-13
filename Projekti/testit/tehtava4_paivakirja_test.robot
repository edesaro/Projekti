*** Settings ***
Documentation    Tehtävä 4: Päiväkirjamerkinnän luonti E2E testi
Library          Browser
Resource         Keywords.robot
Test Setup       Open Browser To VitalFit
Test Teardown    Close Browser

*** Test Cases ***
Luonti päiväkirjamerkintä
    Login    ${TEST_USERNAME}    ${TEST_PASSWORD}
    Go To    ${PAIVAKIRJA_URL}
    Wait Until Page Contains    Päiväkirja
    Click    css:.new-entry-btn
    Wait Until Page Contains Element    css:#newEntryForm
    # Täytä lomake
    Fill Weight    75.5
    Fill Sleep Hours    7.5
    Fill Condition    erinomainen
    Fill Comment    Testimerkintä - BLACKBOXAI
    # Laske BMI (183cm oletus)
    Click    css:#calculateBMI
    Wait Until Page Contains    BMI: 24.6
    Click    css:#saveEntryBtn
    Wait Until Page Contains    Merkintä tallennettu!
    Wait Until Page Contains Element    css:.entry-box:last-child
    Entry Box Should Contain    Testimerkintä - BLACKBOXAI
