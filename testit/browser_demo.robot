*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot

*** Test Cases ***
Test Login VitalFit
    New Browser    chromium    headless=No
    New Page       http://localhost:5175/src/html/login.html
    Get Title      ==    Kirjaudu

    Type Text      id=username    ${Username}    delay=0.1 s
    Type Secret    id=password    $Password      delay=0.1 s
    Click          button

    Get Title      ==    Kotisivu