function ifTrue() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    
    if(username === "" || password === "" || password1 === "") {
        alert("please fill in the empty places");
        return false;     
    }
    else if(password === password1 && username !== "") {
        return true;
    }
else {
    alert("your repeated password is incorrect");
    return false;
}
}