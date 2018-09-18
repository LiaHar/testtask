function writeSee(evt, name1) {
    var i;
    var windowDiv = document.getElementsByClassName("windowDiv");
    for( i = 0; i < windowDiv.length; i++) {
        windowDiv[i].style.display = "none";
    }
    document.getElementById(name1).style.display = "block";
}
function clickIt() {
var ggg = document.getElementById("status").value;
document.getElementById("texta").innerHTML = ggg;}