
var IsLoggedIn = localStorage.getItem("IsLoggedIn");
if(IsLoggedIn === "false"){
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
    document.getElementById("submitApplication").style.display = "none";
}
else{
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("submitApplication").style.display = "block";
}
window.location.href = "../Home.html";
function logout(){
    localStorage.setItem("IsLoggedIn", "false");
    window.location.href = "login.html";
}
function validateEmail(value) {
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    return emailRegex.test(value);
}

function validatePassword(value) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //means at least 8 characters, at least one uppercase letter, one lowercase letter and one number
    return passwordRegex.test(value);
}

function validateContactNumber(value) {
    var contactNumberRegex = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;
    return contactNumberRegex.test(value);
}

//when the user writes in the input field we check if the field is correct
function checkInput(input) {
    var value = input.value;
    var name = input.name;
    var error = document.getElementById(name + "-error");
    if (value === "") {
        error.innerHTML = "Please fill in your " + name;
        error.style.display = "block";
    } else if (name === "email") {
        if (!validateEmail(value)) {
            error.innerHTML = "Please enter a valid email address";
            error.style.display = "block";
        } else {
            error.style.display = "none";
        }
    } else if (name === "password") {
        if (!validatePassword(value)) {
            error.innerHTML = "Please enter a valid password: means at least 8 characters, at least one uppercase letter, one lowercase letter and one number";
            error.style.display = "block";
        } else {
            error.style.display = "none";
        }
    } else {
        error.style.display = "none";
    }
}

//validate the gender input

//cehckinput function is called when the user writes in the input field
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        checkInput(this);
    });
}

function storeUser() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var gender = document.getElementById("gender").value;
    //if all the value not null
    if (fullName === "" || email === "" || password === "" || contactNumber === "" || gender === "") {
        alert("Please fill in all the fields");
        return;
    } else {
        //if the email is not valid
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }
        //if the password is not valid
        if (!validatePassword(password)) {
            alert("Please enter a valid password: means at least 8 characters, at least one uppercase letter, one lowercase letter and one number");
            return;
        }

        var user = {
            fullName: fullName,
            email: email,
            password: password,
            contactNumber: contactNumber,
            gender: gender
        };
        sessionStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("IsLoggedIn", true);
        //go to page Home
        window.location.href = "../Home.html";
        //alert("Registration Successful");
    }

}
function clearInput() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}