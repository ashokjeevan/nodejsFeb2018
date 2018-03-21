const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var argument = argv._[0];

if(argument === 'list') {
    console.log('List notes');
} else if(argument === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if(note) {
        console.log('Note created');
        console.log(`Title : ${note.title} Body : ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if(argument === 'read') {
    notes.readNote(argv.title);
} else if(argument === 'remove') {
    notes.deleteNote(argv.title);
} else {
    console.log('Command not recognized');
}


