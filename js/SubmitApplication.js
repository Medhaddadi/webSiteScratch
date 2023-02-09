function validateInput(input) {
    var value = input.value;
    var name = input.name;
    var error = document.getElementById(name + "Error");
    if (value === "") {
        error.innerHTML = "Please fill in your " + name;
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        validateInput(this);
    });
}
//get the select element
var select = document.getElementById("vehicleType");
select.addEventListener("change", function () {
    if (select.value === "") {
        var error = document.getElementById("vehicleTypeError");
        error.innerHTML = "Please select your vehicle type";
        error.style.display = "block";
    } else {
        var error = document.getElementById("vehicleTypeError");
        error.style.display = "none";
    }
});
//get the textarea element
var textarea = document.getElementById("reasons");
textarea.addEventListener("input", function () {
    var value = textarea.value;
    var error = document.getElementById("reasonsError");
    if (value === "") {
        error.innerHTML = "Please fill in your reasons";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

//get license
var license = document.getElementById("license");
license.addEventListener("change", function () {
    var value = license.value;
    var error = document.getElementById("licenseError");
    if (value === "") {
        error.innerHTML = "Please upload your license";
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});
//store all the input fields
function storeInput() {
    var car = {};
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var name = input.name;
        var value = input.value;
        car[name] = value;
    }
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        var name = textarea.name;
        var value = textarea.value;
        car[name] = value;
    }
    var selects = document.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        var select = selects[i];
        var name = select.name;
        var value = select.value;
        car[name] = value;
    }

    //store the License file in a folder and store the path in the database
    var license = document.getElementById("license");
    var licenseFile = license.files[0];
    var licenseName = licenseFile.name;
    car["license"] = "../license/" + licenseName;
    const file = license.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        localStorage.setItem("license", reader.result);
    };
    localStorage.setItem("car", JSON.stringify(car));
    console.log(localStorage.getItem("car"));
    alert("Your car has been registered");
}