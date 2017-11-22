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

            var para = document.createElement("P");                       
            var t = document.createTextNode(response.output.text[0]);      
            para.appendChild(t);   
            para.setAttribute("id", "onTheRight");
            document.getElementById("chatbox").appendChild(para);  


        }
    };


    xhttp.open("GET", custURL + message);
    xhttp.send();

    
}

if (count == 0){
    align = "onTheLeft"
} else {
    align = "onTheRight"
}

var para = document.createElement("P");                       // Create a <p> element
var t = document.createTextNode("This is a paragraph.");      // Create a text node
para.appendChild(t);   
para.setAttribute("id", align)                                       // Append the text to <p>
document.getElementById("some").appendChild(para);           // Append <p> to <div> with id="myDIV"