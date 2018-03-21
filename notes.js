const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var readNote = (title) => {
    console.log("Read note with title ", title);
};

var deleteNote =(title) => {
    console.log("Deleting note with title ", title);
};

var listNote = () => {
    console.log("Listing notes ");
}

module.exports = {
    addNote,
    readNote,
    deleteNote,
    listNote
};