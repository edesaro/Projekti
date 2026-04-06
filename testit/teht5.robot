*** Settings ***
Library     Browser
Library     OperatingSystem
Resource    Keywords.robot

*** Test Cases ***
Kirjautuminen ENV-tiedostolla
    ${username}=    Get Environment Variable    USERNAME    default=testi
    ${password}=    Get Environment Variable    PASSWORD    default=testi123

    New Browser    chromium    headless=No
    New Page    http://localhost:5173/src/html/login.html

    Type Text      id=username    ${username}    delay=0.1 s
    Type Secret    id=password    $password
    Browser.Click  button[type="submit"]

    Sleep    2s
