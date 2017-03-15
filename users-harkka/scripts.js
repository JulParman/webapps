/**
 * Created by ekoodi on 14.3.2017.
 */
var contacts = [];
var newContact;


function addContact() {
    newContact = createNewContactObject();
    contacts.push(newContact);
    console.log(contacts);
    getContact(contacts);
    console.log(contacts);
}

function createNewContactObject() {
    var firstName = document.getElementById('txtfname').value;
    var lastName = document.getElementById('txtlname').value;
    var age = document.getElementById('txtage').value;
    var address = document.getElementById('txtaddress').value;

    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        address: address
    };
}

function getContact(contacts) {
    var newRow = '';
    for (var i = 0; i < contacts.length; i++) {
        newRow += '<tr><td>' + contacts[i].firstName + '</td>' +
        '<td>' + contacts[i].lastName + '</td>' +
        '<td>' + contacts[i].age + '</td>' +
        '<td>' + contacts[i].address + '</td></tr>'
    }
    var table = document.getElementById('utable');
    table.innerHTML = newRow;

}