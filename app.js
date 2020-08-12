// DOM
const 
    nameValue   =   document.getElementById('nameValue'),
    emailValue  =   document.getElementById('emailValue'),
    refreshData  =   document.getElementById('refreshData')
    ;

var
    names = ['John', 'Claudia', 'Belen', 'Tomas', 'Emilio', 'Manuel', 'Arturo', 'Morice', 'Harry', 'Juan', 'Dorita', 'Maria', 'Guillermo', 'Onur'],
    lastname = ['Doe', 'Torres', 'Troncozo', 'Barros', 'Galleguillos', 'Galleguillos', 'Torre', 'Paris', 'Styles', 'Torres', 'Saez', 'Ramos', 'Guzman', 'Fatmagul'],
    domains = ['.com', '.cl', '.biz', '.club', '.net', '.com.pe'],
    subdomains = ['netlify', 'gmail', 'hotmail', 'msn', 'live', 'mailgoogle', 'yahoo'],
    fdsfsgdf = "a"
    ;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function genData() {
    // looking for a random result in the array 'names' and 'lastname'
    let
        firstName = names[Math.floor(Math.random() * names.length)],
        lastName = lastname[Math.floor(Math.random() * lastname.length)],
        finalName = `${firstName} ${lastName}`,
        emailType = getRandomInt(1, 10),
        finalEmailID = 0,
        finalEmail = 'nan',
        finalDomain = `${subdomains[Math.floor(Math.random() * subdomains.length)]}${domains[Math.floor(Math.random() * domains.length)]}`
    ;

    switch (emailType) {
        case 1, 3, 5, 8, 10:
            finalEmailID = 1;
            break;
    
        default:
            finalEmailID = 2;
            break;
    }

    if (finalEmailID === 1) {
        let emailName = firstName.toLowerCase(),
            emailLName = lastName.toLowerCase(),
            rNumber = getRandomInt(0, 99)
        ;

        finalEmail = `${emailName}${emailLName}${rNumber}@${finalDomain}`;

    } else {
        let emailName = firstName.toLowerCase(),
            emailLName = lastName.toLowerCase(),
            rNumber = getRandomInt(0, 99)
        ;

        finalEmail = `${emailLName}${emailName}${rNumber}@${finalDomain}`;
    }

    console.log(finalEmail);

    nameValue.innerHTML = finalName;

   emailValue.innerHTML = finalEmail;
}

genData();

refreshData.addEventListener('click', genData);