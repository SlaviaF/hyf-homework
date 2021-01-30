//Smar-ease -Goes Global!

//Flight booking fullname function

/*let fullname1 = "Slavia";
let fullname2 = "Furtado";
function getFullname(firstname, surname) {
    return firstname + (' ' + surname)
    fullname1 = firstname;
    fullname2 = surname;
}

console.log(getFullname(fullname1, fullname2));*/

//Be super formal
let fullname1 = getFullName();
let fullname2 = getFullName();

function getFullName(firstname = 'Dear', surname = 'Customer', useFormalName = true, gender) {
    if (useFormalName && gender === 'male') {
        return 'Lord ' + firstname + (' ' + surname);
    }
    else if (useFormalName && gender === 'female') {
        return 'Lady ' + firstname + (' ' + surname);
    }

    else {
        return firstname + (' ' + surname);
    }


}

console.log(getFullName('Rita', 'Lobo', true, 'female'));
