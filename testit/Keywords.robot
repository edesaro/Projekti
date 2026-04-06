*** Variables ***
${VITE_URL}     http://localhost:5173
${Username}     testi
${Password}     testi123
${TEST_USERNAME}    ${Username}
${TEST_PASSWORD}    ${Password}
${PAIVAKIRJA_URL}    ${VITE_URL}/paivakirja.html
${Message}      Hello, Robot Framework!\nHow are you today?

*** Keywords ***
Open Browser To VitalFit
    New Browser    chromium    headless=false
    New Page    ${VITE_URL}

Close Browser
    Close Browser

Login
    [Arguments]    ${username}    ${password}
    New Page    ${VITE_URL}/login.html
Fill Text    #username    ${username}    delay=0.5s
Fill Secret    #password    ${password}    delay=0.5s
    Click    button[type="submit"]

Go To
    [Arguments]    ${url}
    New Page    ${url}

Wait Until Page Contains
    [Arguments]    ${text}
    Wait For Elements State    body:text="${text}"    10s

Click
    [Arguments]    ${locator}
    Browser.Click    ${locator}

Wait Until Page Contains Element
    [Arguments]    ${locator}
    Wait For Elements State    ${locator}    visible    10s

Fill Weight
    [Arguments]    ${value}
    Fill Text    #weight    ${value}

Fill Sleep Hours
    [Arguments]    ${value}
    Fill Text    #sleep    ${value}

Fill Condition
    [Arguments]    ${value}
    Select Options By Value    #mood    ${value}

Fill Comment
    [Arguments]    ${value}
    Fill Text    #comment    ${value}

Entry Box Should Contain
    [Arguments]    ${text}
    Wait For Elements State    css:.entry-box:last-child:text="${text}"    visible
