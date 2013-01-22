function Validate() {

    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var text = document.getElementById("email").value;
    if (!pattern.test(text)) {
        alert("Invalid Email");
    } else {
        alert("Valid Email");
    }

}
window.onload = function () {
    document.getElementById('email').onmouseout = Validate;
}
