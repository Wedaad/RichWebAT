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
        const create_note_button = document.getElementById('create-btn');

        const button_click = fromEvent(create_note_button, 'click');
        button_click.subscribe(() => this.createNote());

        const save_btn = document.getElementById('save-btn');

        const save_btn_click = fromEvent(save_btn, 'click');
        save_btn_click.subscribe(() => {
      
            let noteToBeSaved = this.shadowRoot.querySelector('#created-note-' + note_num);
            let holdNotes = document.getElementById("created-notes-container");
            holdNotes.appendChild(noteToBeSaved);

            let note_message_div = document.createElement("div");
            note_message_div.classList.add('note-message');
            let note_message = this.shadowRoot.querySelector("textarea").value;
            note_message_div.append(note_message);

            // const note_note_message_div_click = fromEvent(note_message_div, "click");
            // note_note_message_div_click.subscribe(() => {

            //     console.log("Editing notes");
            //     document.getElementById(note_message_div.id).contentEditable = "true";
            // });

            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete Note";
            deleteBtn.classList.add("delete-button");
            deleteBtn.id = "delete-btn" + note_num;
          
            noteToBeSaved.appendChild(note_message_div);
            noteToBeSaved.appendChild(deleteBtn);

            const delete_button_click = fromEvent(deleteBtn, "click");
            delete_button_click.subscribe(() => {

                noteToBeSaved.parentNode.removeChild(noteToBeSaved);
            })

            this.shadowRoot.querySelector("textarea").value = "";
            this.shadowRoot.getElementById("add-note-div").style.display = "none";
        });
    }
}

customElements.define("create-note", Note);

