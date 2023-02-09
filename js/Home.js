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
function logout(){
    localStorage.setItem("IsLoggedIn", "false");
    window.location.href = "login.html";
}