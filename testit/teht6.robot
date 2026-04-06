*** Settings ***
Library     Browser
Library     CryptoLibrary    variable_decryption=True
Resource    Keywords.robot

*** Test Cases ***
Kirjautuminen CryptoLibraryllä
    ${username}=    Set Variable    crypt:fpJRNzMFdVANGTzfNY5FvV1XiQQTxmRnELIZZTHo6WmaQHKRlwLm0NtN7vpkjRnbmmiBHmw=
    ${password}=    Set Variable    crypt:/JMwg6z8xA+J0vAyxr7o+m7itH25Q5jPXi2cembX515bz5fi0A3/wN1xhksQyXvPzcV4Sw==

    New Browser    chromium    headless=No
    New Page    http://localhost:5173/src/html/login.html

    Type Text      id=username    ${username}    delay=0.1 s
    Type Secret    id=password    $password
    Browser.Click  button[type="submit"]

    Sleep    2s
