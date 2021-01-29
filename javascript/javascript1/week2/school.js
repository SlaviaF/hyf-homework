const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "Queen") {
        console.log('Welcome Your Highness');
    }


    else if (studentName === " ") {
        console.log('Please enter your name');
    }


    else if (class07Students.length > 5) {
        console.log('Cannot add more students to class 07');

    } else if (existingStudent(studentName)) {
        console.log('We already have ' + studentName + ' in the class')
    }



    else {
        return class07Students.push(studentName);
    }

}
addStudentToClass('Slavia')
addStudentToClass('Mahi')
addStudentToClass(' ')
addStudentToClass('Norman')
addStudentToClass('Ethan')
addStudentToClass('Mahi')
addStudentToClass('Nicole')
addStudentToClass('Stacia')

addStudentToClass('Sean')
addStudentToClass('Ava')
addStudentToClass('Queen')


console.log(class07Students);

function existingStudent(student) {
    for (i = 0; i < class07Students.length; i++) {
        if (class07Students[i] === student) {
            return true;
        }

    }

}
console.log(existingStudent('Mahi'));
















































/*notes for self reference  from other homework
 to check if you have the same student name: we can also do the below code

    else if (class07Students.includes(studentName)) {
        console.log('We already have ' + studentName + 'in the class')
    }


go check if there are any empty strings

if (!studentName){
    console.log('Please enter a name')
}







*/