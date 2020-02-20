const notesapp = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
//creating ADD command
yargs.command({
    command: 'ADD',
    describe: 'Adding a new note',
    builder:{
        title:{
            describe:'Add a note',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Firstnote added',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notesapp.addnote(argv.title,argv.body)
    }
    
})

//creating Remove command
yargs.command({
    command:'REMOVE',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'removing the title',
            demandOption:true,
            type:'string'
        } //removing the title alone which is why body is not included//
    },
    handler(argv){
        notesapp.removenote(argv.title)
        }
})

//creating list command
yargs.command({
    command:'LIST',
    describe:'Listing the notes taken',
    handler(){
        notesapp.listNotes()
    }
    
})

//creating read command
yargs.command({
command:'READ',
describe:'Read the notes',
builder:{
    title:{
        describe:'Read the user notes',
        demandOption:true,
        type:'string'
    }
},
handler(argv){
    notesapp.readnote(argv.title)
}
})
yargs.parse()