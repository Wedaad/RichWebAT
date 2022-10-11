console.log("Javascript loaded");

// preventing default server side behaviour
const form = document.querySelector('form');
form.onsubmit = (e) => {

    e.preventDefault();
}

function formValidation() {

    console.log("INSIDE FORMVALIDATION()");

    let errorDiv =  document.getElementById('error');
    let contactName = document.forms['contactForm']['contact_name'].value;
    let mobileNumber = document.forms['contactForm']['mobile_number'].value;
    let email = document.forms['contactForm']['email'].value;
    let regexName = /^[A-Za-z\s]*$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // creating error div 
    let errorMsg = "";

    if(contactName == null || contactName == "") {

        errorMsg = "Error: Contact name must be filled in.";
        errorDiv.innerHTML = errorMsg;
        return false; 
    }
    
    if(!regexName.test(contactName)) {

        errorMsg = "Error: Contact name can only contain letters and spaces.";
        errorDiv.innerHTML = errorMsg;
        return false; 

    }

    if(contactName.length > 20) {

        errorMsg = "Error: Name is too long.";
        errorDiv.innerHTML = errorMsg;
        return false;
    }

    if(mobileNumber == "" || mobileNumber == null){ // mobile number validation

        errorMsg = "Error: Mobile number must filled in.";
    }
    
    if(isNaN(mobileNumber)) { // mobile number validation

        errorMsg = "Error: Mobile number must be numeric.";
        errorDiv.innerHTML = errorMsg;
        return false;
    }

    if(!regexEmail.test(email)) { // validation for  email 

        errorMsg = "Error: Please enter a valid email address."
        errorDiv.innerHTML = errorMsg;
        return false;
    }

    // user input is fine and proceed to creating contact
    addContact(contactName, mobileNumber, email);
    form.reset();
    return true;

}

// Function to display array contents in table form
function displayContacts(contact) {

    const table = document.getElementById('contact-table');
    let table_row = document.createElement('tr');
    let user_name = document.createElement('td'); 
    let user_number = document.createElement('td');
    let user_email = document.createElement('td');


    user_name.innerText = Object.values(contact)[0];
    user_number.innerText = Object.values(contact)[1];
    user_email.innerText = Object.values(contact)[2];

    table_row.appendChild(user_name);
    table_row.appendChild(user_number);
    table_row.appendChild(user_email);
    table.appendChild(table_row);
}

// Function to populate phone directiory ARRAY
function addContact(name, number, email) {

    console.log('INSIDE ADD CONTACT()'); 
    let person = {};

    person = {"name": name,
            "mobile_number": number,
            "email": email };

  
    console.log(person);
    displayContacts(person);
}

function mobileNumberSearch() {


}

function sortNames() {

    let table, table_rows, switching, i, og_row, new_row, shouldSwitch;
    table = document.getElementById("contact-table");
    switching = true;

    while(switching) {
        console.log("INSIDE WHILE SWITCHING");
        switching = false
        table_rows = table.rows;

        // looping through all rows except table headers
        for(i = 1; i < (table_rows.length - 1); i++) {
            console.log("INSIDE FOR LOOP");
            shouldSwitch = false;

            og_row = table_rows[i].getElementsByTagName("td")[0];
            new_row = table_rows[i + 1].getElementsByTagName("td")[0];

            if(og_row.innerHTML.toLowerCase() > new_row.innerHTML.toLowerCase()) {
                
                console.log("INSIDE IF 1");
                shouldSwitch = true;
                break;
            }

        }

        if(shouldSwitch) {
            console.log("INSIDE IF 2");
            table_rows[i].parentNode.insertBefore(table_rows[i + 1], table_rows[i]);
            switching =  true;
        }
    }

}
