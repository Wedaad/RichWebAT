const { fromEvent } = rxjs;

let save_btn = document.getElementById("save-btn");
let new_note = document.getElementById("new-note");
let create_notebtn = document.getElementById("create-btn");
let span = document.getElementsByClassName("close-btn")[0];
let newNote_content = document.createElement("div");
let note_container = document.createElement("div");
let creatednotes_container = document.getElementById("created-notes");
let note_num = 0;

// when the note is saved after being created 
const save_btn_click = fromEvent(save_btn, 'click');
save_btn_click.subscribe(() => saveNote(document.getElementById('colour_list').value));

// when create note button is clicked
const create_notebtn_click = fromEvent(create_notebtn, 'click');
create_notebtn_click.subscribe(() => new_note.style.display = "block");

// when 'x' is clicked
const span_click = fromEvent(span, 'click');
span_click.subscribe(() => {

    new_note.style.display = "none";
    document.getElementById("colour_list").selectedIndex = 0;
    document.getElementById('note-textarea').value = ""; // clearing the cancelling the note
    document.getElementById('note-textarea').style.background = "white"; //changing the textarea back to white

});


function manageNotes() {

    let note_message = document.getElementById("note-textarea").value;
   
    let newNote_div = document.createElement("div"); // creating a new div to hold created notes
    note_num++;
    newNote_div.id = "note-div" + note_num;
    newNote_div.classList.add("post-it");
   

    let note_text_div = document.createElement("div");
    note_text_div.id = "note-message" + note_num;
    note_text_div.classList.add('note-message');
    note_text_div.append(note_message);

    let spanDiv = document.createElement("div");
    spanDiv.id = "note-btns-container"

    let editBtn = document.createElement("span");
    editBtn.id = "edit-btn" + note_num;
    editBtn.classList.add("edit-button");
    editBtn.innerHTML = "Edit Note";

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete-btn" + note_num;
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "&times;  Delete Note";

    let updateBtn = document.createElement("button");
    updateBtn.id ="update-button" + note_num;
    updateBtn.innerHTML = "Save Note";
    updateBtn.classList.add('update-btn');
    
    // to delete the note
    fromEvent(deleteBtn, 'click').subscribe(() => newNote_div.parentNode.removeChild(newNote_div)); 

    // fromEvent(editBtn, 'click').subscribe(() => {

    //     console.log("this = " + this); 
    //     if(editBtn.id == this.id){
    //         console.log("this.id = " + this.id); 
    //         document.getElementById(note_text_div.id).contentEditable = "true";
    //         updateBtn.style.visibility = 'visible';

    //         updateBtn.onclick = function() {
    //             document.getElementById(note_text_div.id).contentEditable = "false";
    //             updateBtn.style.visibility = 'hidden';
    //         }

    //     }

    // });

    // // to edit the note 
    editBtn.addEventListener('click', editNote);
    function editNote() {
        console.log("this = " + this); 
        if(editBtn.id == this.id){
            console.log("this.id = " + this.id); 
            document.getElementById(note_text_div.id).contentEditable = "true";
            updateBtn.style.visibility = 'visible';

            updateBtn.onclick = function() {
                document.getElementById(note_text_div.id).contentEditable = "false";
                updateBtn.style.visibility = 'hidden';
            }

        }
    };

    spanDiv.append(deleteBtn);
    newNote_div.appendChild(note_text_div);
    newNote_div.appendChild(editBtn);
    newNote_div.appendChild(updateBtn);
    newNote_div.appendChild(spanDiv);

    document.getElementById('note-textarea').value = ""; // clearing the textarea after saving note
    document.getElementById('note-textarea').style.background = "white"; //changing the textarea back to white
    document.getElementById("colour_list").selectedIndex = 0; // resetting the dropdown
    new_note.style.display = "none";

    return newNote_div; // returns different elements that make up the note
}

// saving created notes
function saveNote(colour) {

    note_container = manageNotes();
    note_container.style.background = colour;
    creatednotes_container.appendChild(note_container);
}