const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var argument = argv._[0];

if(argument === 'list') {   //list notes
    console.log('List notes');
} else if(argument === 'add') { //add a note
    var note = notes.addNote(argv.title, argv.body);

    if(note) {
        console.log('Note created');
        console.log(`Title : ${note.title} Body : ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if(argument === 'read') {    //read a note
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note found");
        console.log(`Title : ${note.title} Body : ${note.body}`);
    } else {
        console.log("Note not found");
    }
} else if(argument === 'remove') {  //remove a note
    var returnedValue = notes.deleteNote(argv.title);
    var message = returnedValue ? 'Note was removed' : 'No change';
    console.log(message);

} else {
    console.log('Command not recognized');
}


