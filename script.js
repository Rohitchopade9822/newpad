// // Wait until the document is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the button for creating notes
//     const createNoteButton = document.querySelector('button');

//     // Select the container where notes will be added
//      const notesContainer = document.querySelector('.notes-containse');

//     // Event listener for the 'Create Note' button
//         createNoteButton.addEventListener('click', function() {
//         // Create a new note element
//         const newNote = document.createElement('p');
//         newNote.contentEditable = "true";
//         newNote.classList.add('input-box');

//         // Add content to the note
//         newNote.innerHTML = `<span class="btn"><button class="delete-btn" contenteditable="false">Delete</button></span><br>`;

//         // Append the new note to the notes container
//         notesContainer.appendChild(newNote);

//         // Add event listener for the delete button in the new note
//         const deleteButton = newNote.querySelector('.delete-btn');
//         deleteButton.addEventListener('click', function() {
//             newNote.remove(); // Remove the note when the delete button is clicked
//         });
//     });
// });

document.addEventListener("DOMContentLoaded",function(){

    const createNoteButton = document.querySelector('button')

    const notesContainer=document.querySelector('.notes-containse')
    
    const delall=document.querySelector('.btn-all')

    createNoteButton.addEventListener('click',function(){

        const newnote = document.createElement('p')
        newnote.contentEditable="true";
        newnote.classList.add('input-box');
        newnote.innerHTML=`<span class="btn"><button class="delete-btn" contenteditable="false">Delete</button></span><br>`;
        notesContainer.appendChild(newnote)
        const deleteButton=newnote.querySelector('.delete-btn');
        
        deleteButton.addEventListener('click',function(){
            newnote.remove();
        })
        
        delall.addEventListener('click',function(){
         
           const allnotes=notesContainer.querySelectorAll('.input-box');
        
            allnotes.forEach(note=>note.remove());
        })
    })

})
