const fs = require('fs')
const chalk =require('chalk')
//Adding a new note by defining a new function//

const addnote =(title,body)=> {

    const notes=loadnotes() //loading the notes by using the fn loadnotes()//

    //using "find method instead of using array filter method" to prevent duplicate title from being added and to stop the check once the duplicate gets caught//
    const duplicatenote= notes.find((note)=>note.title===title)
    
    if (!duplicatenote){

     //going to add a note by "push" which is a method//        
        notes.push({
            title:title,
            body:body
    })
    savenotes(notes)
    console.log(chalk.green('new note added'))
}

    else {
        console.log(chalk.red('Title was taken already'))
    }
}
//removing a note title//

const removenote= (title)=>{

    const delnotes= loadnotes()// loading notes by the function loadnotes()// 

    //using array filter method//
    const notestokeep= delnotes.filter((note) => note.title!==title)

    if(delnotes.length >notestokeep.length){

        console.log(chalk.green('Note gets removed!'))
        savenotes(notestokeep)

    }else
    {
        console.log(chalk.red.bold.underline('No note found'))
    }
}

//listing the notes saved//

const listNotes= ()=>{

    const notes = loadnotes()

    console.log(chalk.bgMagenta('Your Notes list!'))

    notes.forEach((note)=>{
    console.log(note.title)

    })
}

//Reading the notes which user saved//

const readnote= (title)=> {
    const loadnote= loadnotes()
    const note= loadnote.find((note)=> note.title===title)

    if(note){
        console.log(chalk.bold.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red('No note found!'))

    }
}

//saving the note//
const savenotes=(notes)=>{

    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('noteapp.json',dataJSON)
}
 

const loadnotes=()=>{
    try{
        const databuffer = fs.readFileSync('noteapp.json')
        const buffer = databuffer.toString()
        return JSON.parse(buffer)
    }catch(e){

        return []
    }

}
//exporting multiple functions to app.js
module.exports = {

    addnote:addnote,
    removenote:removenote,
    listNotes:listNotes,
    readnote:readnote
}