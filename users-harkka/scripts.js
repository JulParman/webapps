var contacts = [];
var newContact;

function loadData() {
    try {
        contacts = getLocalStorage();
    }
    catch (err) {
        document.getElementById("header3").innerHTML = err.message;
    }
    if (contacts) {
        getContact(contacts);
    }

}

function addContact() {
    newContact = createNewContactObject();
    contacts.push(newContact);
    writeLocalStorage(contacts);
    getContact(contacts);
}

function createNewContactObject() {
    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    var phone = document.getElementById('txtphone').value;
    var address = document.getElementById('txtaddress').value;

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address
    };
}

function getContact() {
    contacts = getLocalStorage();
    var newRow = '';
    for (var i = 0; i < contacts.length; i++) {
        newRow += "<tr><td>" + contacts[i].firstName + "</td>" +
            "<td>" + contacts[i].lastName + "</td>" +
            "<td>" + contacts[i].phone + "</td>" +
            "<td>" + contacts[i].address + "</td></tr>"
    }
    var tableElement = document.getElementById('utable');
    tableElement.innerHTML = newRow;

}

function writeLocalStorage(contacts) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
        document.getElementById("header3").innerHTML = "Ei toimi";
    }
}

function getLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        contacts = JSON.parse(localStorage.getItem("contacts"));
    } else {
        document.getElementById("header3").innerHTML = "Ei toimi";
    }
    return contacts;
}

function deleteRow() {
    contacts = getLocalStorage();
    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName && contacts[i].lastName === lastName) {
            contacts.splice(i, 1);
        }
    }
    writeLocalStorage(contacts);
}

function updateRow() {
    contacts = getLocalStorage();
    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    var phone = document.getElementById('txtphone').value;
    var address = document.getElementById('txtaddress').value;

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName && contacts[i].lastName === lastName) {
            contacts[i].firstName = firstName;
            contacts[i].lastName = lastName;
            contacts[i].phone = phone;
            contacts[i].address = address;
        }
    }
    writeLocalStorage(contacts);
}