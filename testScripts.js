function posting() {
var custURL = "https://thealphatest.mybluemix.net/testing";
var message = "?userInput=" + document.getElementById("userInput").value

var response;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            response = JSON.parse(this.responseText);

            console.log(response);
            console.log(response.output.text[0]);
        }
    };


    xhttp.open("GET", custURL + message);
    xhttp.send();

    console.log(response);
    
}