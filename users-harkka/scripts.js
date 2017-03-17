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
    var city = document.getElementById('txtcity').value;
    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address + ', ' + city
    };
}

function getContact() {
    contacts = getLocalStorage();
    var newRow = '';
    var nro = 0;
    for (var i = 0; i < contacts.length; i++) {
        newRow += "<tr id='" + nro + "'><td>" + contacts[i].firstName + "</td>" +
            "<td>" + contacts[i].lastName + "</td>" +
            "<td>" + contacts[i].phone + "</td>" +
            "<td>" + "<a target='_blank' href='https://www.google.com/maps/place/" + contacts[i].address + "'>" + contacts[i].address + "</a>" + "</td></tr>";
        nro++;
    }
    var tableElement = document.getElementById('utable');
    tableElement.innerHTML = newRow;

}

function writeLocalStorage(contacts) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("contacts", JSON.stringify(contacts));
        location.reload();
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

    var selectedRow = document.querySelector(".is-selected").rowIndex;

    if (selectedRow) {
        contacts.splice(selectedRow - 1, 1);
    }
    writeLocalStorage(contacts);
}

function updateRow() {
    contacts = getLocalStorage();
    var selectedRow = document.querySelector(".is-selected").rowIndex;

    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    var phone = document.getElementById('txtphone').value;
    var address = document.getElementById('txtaddress').value;
    var city = document.getElementById('txtcity').value;

    if (selectedRow) {

        if (firstName) {
            contacts[selectedRow - 1].firstName = firstName;
        }
        else if (lastName) {
            contacts[selectedRow - 1].lastName = lastName;
        }
        else if (phone) {
            contacts[selectedRow - 1].phone = phone;
        }
        else if (address && city) {
            contacts[selectedRow - 1].address = address + ', ' + city;
        }
    }
    writeLocalStorage(contacts);
}