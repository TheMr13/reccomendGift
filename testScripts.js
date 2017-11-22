function scrolling() {
    console.log("scrolling is working");
    var scrollBox = document.getElementById("chatBox")
    scrollBox.scrollTop = scrollBox.scrollHeight;
}


function posting() {

    var custURL = "https://thealphatest.mybluemix.net/testing";
    var message = "?userInput=" + document.getElementById("userInput").value

    userMessage();
    scrollToBottom()
    

    //var response;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var response = JSON.parse(this.responseText);

            console.log(response.output.text[0]);

            botReply()
            scrollToBottom()
        }
    };

    xhttp.open("GET", custURL + message);
    xhttp.send(); 
}     

function userMessage() {
    var para = document.createElement("P");                       
    var t = document.createTextNode(document.getElementById("userInput").value);      
    para.appendChild(t);   
    para.setAttribute("id", "onTheLeft")                                     
    document.getElementById("chatBox").appendChild(para);
}

function botReply() {
    var para = document.createElement("P");                       
    var t = document.createTextNode(response.output.text[0]);      
    para.appendChild(t);   
    para.setAttribute("id", "onTheRight")                                     
    document.getElementById("chatBox").appendChild(para);  
}

function scrollToBottom() {
    var scrollBox;
    scrollBox = document.getElementById("chatBox");
    scrollBox.scrollTop = scrollBox.scrollHeight;
}