*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    http://localhost:3000

*** Test Cases ***

POST Login onnistuu oikeilla tunnuksilla
    Create Session    api    ${BASE_URL}
    ${body}=    Create Dictionary    username=testi    password=testi123
    ${response}=    POST On Session    api    /users/login    json=${body}
    Should Be Equal As Strings    ${response.status_code}    200

POST Login epäonnistuu väärillä tunnuksilla
    Create Session    api    ${BASE_URL}
    ${body}=    Create Dictionary    username=vaara    password=vaara123
    ${response}=    POST On Session    api    /users/login    json=${body}    expected_status=any
    Should Not Be Equal As Strings    ${response.status_code}    200