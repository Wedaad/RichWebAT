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
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(note_template);
        console.log("custom element created");
      
    }
    
    createNote() {

        console.log("Inside createNote()");
        // this.showNote = true;

        // const note = this.shadowRoot.querySelector('.note-container');

        const container = document.createElement("div");
        let note_form = document.createElement("form");
        let note_textarea = document.createElement("textarea");
        let save_button = document.createElement("button");
        save_button.innerHTML = "Save Note";

        note_form.appendChild(note_textarea);
        container.appendChild(note_form);
        container.appendChild(save_button);
        save_button.id = "save-btn"
        container.style.border = "5px solid red";
        this.shadowRoot.appendChild(container);
        this.shadowRoot.appendChild(save_button);

        const save_btn = this.shadowRoot.getElementById('save-btn');

        const save_btn_click = fromEvent(save_btn, 'click');
        save_btn_click.subscribe(() => console.log("note saved :)"));
        // const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');

        // this.shadowRoot.appendChild(note);
        // if(this.showNote) {

        //     note.style.display = 'block';
        //     deleteBtn.innerText = 'delete note !';
        // }
    	
    }

    connectedCallback() {

        // const delete_button =  this.shadowRoot.querySelector('#deleteBtn');
        const create_note_button = document.getElementById('create-btn');

        const button_click = fromEvent(create_note_button, 'click');
        button_click.subscribe(() => this.createNote());
    }
}

customElements.define("created-note", Note);

