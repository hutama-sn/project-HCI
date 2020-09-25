var error = document.getElementById('Error');

function validateForm() {
    var username = document.getElementById('Username').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('Country').value;

    var male = document.getElementById('Male').check;
    var female = document.getElementById('Female').check;

    var password = document.getElementById('Password').value;
    document.getElementById("agreement").required = true;

    if (email == "") {
        error.innerHTML = "Email must be inputed";
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.com') == -1 || email.indexOf('@') == 0 || email.indexOf('.') == 0 || (email.indexOf('@') + 1 == email.indexOf('.')) || email.indexOf(' ') != -1) {
        error.innerHTML = "Wrong input Email";
    }
    else if (username == "") {
        error.innerHTML = "Username must be inputed";
    }
    else if (username.length < 3) {
        error.innerHTML = "Username min 3 characters";
    }
    else if (password == "") {
        error.innerHTML = "Password must be inputed";
    }
    else if (password.length < 6) {
        error.innerHTML = "Password min 6 characters";
    }
    else if (country == "") {
        error.innerHTML = "Select your country";
    }
    else if(dob == ""){
        error.innerHTML = "Insert your birth date"
    }
    else if (!document.getElementById("agreement").required){
        error.innerHTML = "Check the box to continue";
    }
    else if (male == "" && female == "") {
        error.innerHTML = "Please select your gender";
    }
    else {
        error.innerHTML = "";

        if (male == true) {
            var tempgender = "Male";
        }
        else {
            var tempgender = "Female";
        }

        var formConfirm = "Register this data ?";

        if (confirm(formConfirm)) {
            alert("Success Register");
            document.getElementById('Registration').reset();
        }

    }
}