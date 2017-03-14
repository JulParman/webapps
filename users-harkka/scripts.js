/**
 * Created by ekoodi on 14.3.2017.
 */
var users = [];

function addUser() {
    var firstName = document.getElementById('txtfname');
    var lastName = document.getElementById('txtlname');
    var age = document.getElementById('txtage');
    var address = document.getElementById('txtaddress');
    var newUser = {fName: firstName, lName: lastName, a: age, add: address};
    users.push(newUser);
    console.log(users);
}

function getUsers() {
    for (var i = 0; i < users.length; i++) {
        document.write('<tr><th>' + users[i.fName] + '</th>');
        document.write('<th>' + users[i.lName] + '</th>');
        document.write('<th>' + users[i.a] + '</th>');
        document.write('<th>' + users[i.add] + '</th></tr>');
    }

}