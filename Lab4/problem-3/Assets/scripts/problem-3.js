const { fromEvent } = rxjs;
console.log("js running")

const note_template = document.createElement("template");
note_template.innerHTML = `
    <style>
        .note-container {

            border: "5px solid red;
            height: 100px;
            width: 80px;
            margin: 10px;
        }

        .note-container button {

            background-color: black;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
        }

        .note-container h2 {
            text-align: center;
        }
    </style>
    <div class="note-container">
        <div class="note">
            <p><slot name="contents"/></p>
        </div>
        <button id="deleteBtn">Delete Note</button>
    </div>
`;

class Note extends HTMLElement {
    
    constructor() {
        // Always call super first in constructor
        super();    
        
        // Element functionality written in here
        this.showNote = true;
        const shadow = this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(note_template);
        const container = document.createElement("div");
        const createNoteBtn = document.createElement("button");

        createNoteBtn.innerHTML = "Create Note";
        container.appendChild(createNoteBtn);

        shadow.appendChild(container);
        console.log("custom element created");
      
    }
    
    createNote() {
        this.showNote = !this.showNote;

        const note = this.shadowRoot.querySelector('.note-container');
        const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');

        if(this.showNote) {

            note.style.display = 'block';
            deleteBtn.innerText = 'delete note !';
        }
    	
    }

    connectedCallback() {

        const delete_button =  this.shadowRoot.querySelector('#deleteBtn');
        const button_click = fromEvent(delete_button, 'click');
        button_click.subscribe(() => this.createNote());
    }
}

customElements.define("create-note", Note);

// const { fromEvent } = rxjs;

// let save_btn = document.getElementById("save-btn");
// let new_note = document.getElementById("new-note");
// let create_notebtn = document.getElementById("create-btn");
// let span = document.getElementsByClassName("close-btn")[0];
// let newNote_content = document.createElement("div");
// let note_container = document.createElement("div");
// let creatednotes_container = document.getElementById("created-notes");
// let note_num = 0;

// // when the note is saved after being created 
// const save_btn_click = fromEvent(save_btn, 'click');
// save_btn_click.subscribe(() => saveNote(document.getElementById('colour_list').value));

// // when create note button is clicked
// const create_notebtn_click = fromEvent(create_notebtn, 'click');
// create_notebtn_click.subscribe(() => new_note.style.display = "block");

// // when 'x' is clicked
// const span_click = fromEvent(span, 'click');
// span_click.subscribe(() => {

//     new_note.style.display = "none";
//     document.getElementById("colour_list").selectedIndex = 0;
//     document.getElementById('note-textarea').value = ""; // clearing the cancelling the note
//     document.getElementById('note-textarea').style.background = "white"; //changing the textarea back to white

// });


// function manageNotes() {

//     let note_message = document.getElementById("note-textarea").value;
   
//     let newNote_div = document.createElement("div"); // creating a new div to hold created notes
//     note_num++;
//     newNote_div.id = "note-div" + note_num;
//     newNote_div.classList.add("post-it");
   

//     let note_text_div = document.createElement("div");
//     note_text_div.id = "note-message" + note_num;
//     note_text_div.classList.add('note-message');
//     note_text_div.append(note_message);

//     let spanDiv = document.createElement("div");
//     spanDiv.id = "note-btns-container"

//     let editBtn = document.createElement("span");
//     editBtn.id = "edit-btn" + note_num;
//     editBtn.classList.add("edit-button");
//     editBtn.innerHTML = "Edit Note";

//     let deleteBtn = document.createElement("button");
//     deleteBtn.id = "delete-btn" + note_num;
//     deleteBtn.classList.add("delete-button");
//     deleteBtn.innerHTML = "&times;  Delete Note";

//     let updateBtn = document.createElement("button");
//     updateBtn.id ="update-button" + note_num;
//     updateBtn.innerHTML = "Save Note";
//     updateBtn.classList.add('update-btn');

//     spanDiv.append(deleteBtn);
//     document.getElementById('created-notes').appendChild(newNote_div);
//     newNote_div.appendChild(note_text_div);
//     newNote_div.appendChild(editBtn);
//     newNote_div.appendChild(updateBtn);
//     newNote_div.appendChild(spanDiv);

//     document.getElementById('note-textarea').value = ""; // clearing the textarea after saving note
//     document.getElementById('note-textarea').style.background = "white"; //changing the textarea back to white
//     document.getElementById("colour_list").selectedIndex = 0; // resetting the dropdown
    
//     // to delete the note
//     // fromEvent(deleteBtn, 'click').subscribe(() =>{

//     //     // document.getElementById('created-notes').removeChild(newNote_div);
//     //     console.log("Inside delete notes");
//     //     // deleting child notes 
//     //     while (newNote_div.hasChildNodes()) { // if the note isn't the first note created (parent)

//     //         console.log("Inside delete notes 2");
//     //         let childNote = newNote_div.id;
//     //         childNote.removeChild(newNote_div.id++); // removing the note with an id greater than current note
//     //     }
//     // }); 

//     // // to edit the note 
//     editBtn.addEventListener('click', editNote);
//     function editNote() {
//         console.log("this = " + this); 
//         if(editBtn.id == this.id){
//             console.log("this.id = " + this.id); 
//             document.getElementById(note_text_div.id).contentEditable = "true";
//             updateBtn.style.visibility = 'visible';

//             updateBtn.onclick = function() {
//                 document.getElementById(note_text_div.id).contentEditable = "false";
//                 updateBtn.style.visibility = 'hidden';
//             }

//         }
//     };

//     new_note.style.display = "none";
//     return newNote_div; // returns different elements that make up the note
// }

// // saving created notes
// function saveNote(colour) {

//     note_container = manageNotes();
//     note_container.style.background = colour;
//     creatednotes_container.appendChild(note_container);
// }