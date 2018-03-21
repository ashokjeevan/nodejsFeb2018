const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var argument = argv._[0];

if(argument === 'list') {
    console.log('List notes');
} else if(argument === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(argument === 'read') {
    notes.readNote(argv.title);
} else if(argument === 'remove') {
    notes.deleteNote(argv.title);
} else {
    console.log('Command not recognized');
}


