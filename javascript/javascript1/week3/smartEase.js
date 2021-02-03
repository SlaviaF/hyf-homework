//SAVE A NOTE
const notes = [];


function saveNote(content, id) {
    const addNotes = { content: content, id: id }
    notes.push(addNotes);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("PickUp Kids", 3);
saveNote("Cook Dinner", 4);
saveNote("Shower Kids ", "5pm")
console.log(notes);

//GET A NOTE

function getNote(id) {

    for (i = 0; i < notes.length; i++) {

        notes[i].id;
        if (!Number.isFinite(id)) {
            console.error('Id should be a valid number')
        } else if (notes[i].id === id) {
            console.log(notes[i])
            break;


        }
    }
}
getNote(3);


//LOG OUT NOTES


function logOutNotesFormatted(content, id) {
    for (i = 0; i < notes.length; i++) {
        console.log('The note with id: ' + notes[i].id + ' has the following notetext: ' + notes[i].content)
    }
}
logOutNotesFormatted();



//Additional feature to check if the task has been completd.
//PENDING NOTES

function displayPendingNotes(id, done = false) {
    for (i = 0; i < notes.length; i++) {
        if (done && notes[i].id === id) {

            console.log('Id ' + notes[i].id + ' has been completed');
            break;

        }

    }
}

displayPendingNotes(2, true);


