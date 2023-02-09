console.log(localStorage.getItem("user"));
console.log(localStorage.getItem("IsLoggedIn"));
function clearInput() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var isValid = true;

    if (!email) {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailError.innerHTML = "Email is not valid";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (!password) {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    return isValid;
}
//check the data when the user fields in the input
function login() {
    var isValid = validateForm();
    if (isValid) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            //add variable to session storage
            localStorage.setItem("IsLoggedIn", true);
            //redirect to the home page
            window.location.assign("../Home.html");
            alert("Login Successful");
        } else {
            alert("Incorrect Email or Password");
        }
    }else {
        alert("Invalid Form");
    }
}
