const { fromEvent } = rxjs;
console.log("js running")

let note_num = 0;
const note_template = document.createElement("template");
note_template.innerHTML = `
    <style>
        textarea {

            width: 30%;
            min-height: 300px;
            border: 2px solid black;
            border-radius: 4px;
            padding: 12px 20px;
            resize: none;

        }
    </style>
    <div id="add-note-div" class="add-note">
        <h2>Adding New Note</h2>
        <form>
            <textarea placeholder="Add new note content here..." id="note-textarea"></textarea>
        </form>
    </div>
`;

class Note extends HTMLElement {
    
    constructor() {
        // Always call super first in constructor
        super();    
        
        // Element functionality written in here
        this.showNote = true;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(note_template);
        console.log("custom element created");
      
    }
    
    createNote() { 

        this.showNote = true;
        this.shadowRoot.appendChild(note_template.content);
        const new_note = document.createElement("div");
        note_num++;
        new_note.id = "created-note-" + note_num;
        new_note.classList.add("post-it");
        this.shadowRoot.appendChild(new_note);
        this.shadowRoot.getElementById("add-note-div").style.display = "block";
    }
    
    connectedCallback() {

        // const delete_button =  this.shadowRoot.querySelector('#deleteBtn');
        const create_note_button = document.getElementById('create-btn');

        const button_click = fromEvent(create_note_button, 'click');
        button_click.subscribe(() => this.createNote());

        const save_btn = document.getElementById('save-btn');

        const save_btn_click = fromEvent(save_btn, 'click');
        save_btn_click.subscribe(() => {
      
            let noteToBeSaved = this.shadowRoot.querySelector('#created-note-' + note_num);
            let holdNotes = document.getElementById("created-notes-container");
            holdNotes.appendChild(noteToBeSaved);
            holdNotes.style.border = "5px solid yellow";
            console.log("note saved :)");
            console.log("note saved: " + noteToBeSaved.id);

            let note_message = this.shadowRoot.querySelector("textarea").value;
            noteToBeSaved.append(note_message);

            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete Note";
            deleteBtn.classList.add("delete-button");
            noteToBeSaved.appendChild(deleteBtn);

            this.shadowRoot.querySelector("textarea").value = "";
            this.shadowRoot.getElementById("add-note-div").style.display = "none";
        });
    }
}

customElements.define("create-note", Note);

