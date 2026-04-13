*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot

*** Test Cases ***
Test Web Form Fields
    New Browser    chromium    headless=No
    New Page       https://www.selenium.dev/selenium/web/web-form.html
    Get Title      ==    Web form

    # Tekstikentät
    Type Text      [name="my-text"]        ${Username}    delay=0.1 s
    Type Secret    [name="my-password"]    $Password      delay=0.1 s
    Type Text      [name="my-textarea"]    ${Message}     delay=0.1 s

    # Dropdown
    Select Options By    [name="my-select"]    text    Two
    Get Selected Options    [name="my-select"]    text    ==    Two

    # Checkbox
    Check Checkbox      id=my-check-2
    Get Element States  id=my-check-2    contains    checked

    # Radio button
    Click               id=my-radio-2
    Get Element States  id=my-radio-2    contains    checked

    # Datalist
    Type Text    [name="my-datalist"]    New York    delay=0.1 s

    # Lähetä lomake ja tarkista tulos
    Click With Options    button    delay=2 s
    Get Text    id=message    ==    Received!