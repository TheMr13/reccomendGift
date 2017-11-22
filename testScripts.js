function posting() {
var custURL = "https://thealphatest.mybluemix.net/testing";
var message = "?userInput=" + document.getElementById("userInput").value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };


    xhttp.open("GET", custURL + message);
    xhttp.send();

    
}