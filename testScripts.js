function tester(){
    
    //document.getElementById("userInput").value = "";
    console.log("working");

    console.log(userMessage);

    userMessage = "sandringham"
    showDistance();
}

var userMessage;
function getUserMessage() {
    userMessage = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
}

function clearing(){
    document.getElementById("chatBox").innerHTML = "";
    botParagraphCount = 0;
}

function posting() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var response = JSON.parse(this.responseText);
            var botText = response.output.text[0];

            if (botText == "feushsdfk3") {
                showDistance(userMessage);
            } else {
                console.log(botText);
                addBotParagraph(botText)
                scrollDown()
            }

            if (botText = response.output.text[1]){
                getImage(response.output.text[1]);
                console.log(response.output.text[1]);
            }
        }
    };


    var nodeRedURL = "https://thealphatest.mybluemix.net/testing";
    var message = "?userInput=" + userMessage;

    xhttp.open("GET", nodeRedURL + message);
    xhttp.send();
}     

function ranga() {
    rangaAvatar()
}



var botParagraphCount = 0;

function addBotParagraph(botSpeech){
    botParagraphCount++;

    var para = document.createElement("P");                          
    para.setAttribute("id", "botMessageContainer" + botParagraphCount);                                    
    document.getElementById("chatBox").appendChild(para);

    getBotAvatar();

    var para = document.createElement("P");         //have to call this here. Doesn't work as a function for reasons              
    var t = document.createTextNode(botSpeech);      
    para.appendChild(t);   
    para.setAttribute("id", "onTheLeft" + botParagraphCount);
    para.setAttribute("align", "right");                                    
    document.getElementById("botMessageContainer" + botParagraphCount).appendChild(para);

    

    scrollDown()
}

function getBotAvatar(){
    var botAvatar = document.createElement("IMG");
    botAvatar.setAttribute("src", "giphy.gif")
    botAvatar.setAttribute("id", "botAvatar")
    botAvatar.setAttribute("align", "left")
    document.getElementById("botMessageContainer" + botParagraphCount).appendChild(botAvatar);

    
}

function showUserMessage() {

        botParagraphCount++;

        var para = document.createElement("P");                          
        para.setAttribute("id", "userMessageContainer" + botParagraphCount)                                     
        document.getElementById("chatBox").appendChild(para);

        if (userMessage != "") {
            getUserAvatar();
        }

        var para = document.createElement("P");                       
        var t = document.createTextNode(userMessage);      
        para.appendChild(t);   
        para.setAttribute("id", "onTheRight"+ botParagraphCount)                                     
        document.getElementById("userMessageContainer" + botParagraphCount).appendChild(para);
    
        scrollDown()
    }
    
    function getUserAvatar(){
        var botAvatar = document.createElement("IMG");
        botAvatar.setAttribute("src", "ranga.jpg")
        botAvatar.setAttribute("id", "userAvatar")
        botAvatar.setAttribute("align", "right")
        document.getElementById("userMessageContainer" + botParagraphCount).appendChild(botAvatar);
    }

    function blankUserContainer(){
        var para = document.createElement("P");                          
        para.setAttribute("id", "userMessageContainer" + botParagraphCount)                                     
        document.getElementById("chatBox").appendChild(para);
    }

function scrollDown() {
    var scrollBox = document.getElementById("chatBox");
    scrollBox.scrollTop = scrollBox.scrollHeight;
}

var rangaCount = 0;
function rangaAvatar(){
    var botAvatar = document.createElement("IMG");
    botAvatar.setAttribute("id", "ranga")
    document.getElementById("chatBox").appendChild(botAvatar);
    if (rangaCount == 0){
        botAvatar.setAttribute("src", "ranga.jpg")
        rangaCount = 1;
    } else {
        botAvatar.setAttribute("src", "ranga2.jpg")
        rangaCount = 0;
    }
    scrollDown()
}



function showDistance() {
    
        var url = "https://maps.googleapis.com/maps/api/distancematrix/json?";
        var origins = "origins=" + userMessage + "New+Zealand";
        var auckland = "&destinations=" + "Westfield+St+Lukes+St+Lukes+Road,+St+Lukes+Auckland";
        var christchurch = "Westfield+Riccarton,Shop+242,Rotheram+Street,Christchurch+8041";
        //console.log(url + origins + auckland + "|" + christchurch);
    
        var xhr = new XMLHttpRequest();
    
        //specify what to do with an API response 
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText); 
                console.log(response);
                var distanceToAuckland = parseFloat(response.rows[0].elements[0].distance.text.split(" ")[0].replace(/,/g, ""));
                var distanceToChristchurch = parseFloat(response.rows[0].elements[1].distance.text.split(" ")[0].replace(/,/g, ""));
                var output;
                var city;
                if (distanceToAuckland < distanceToChristchurch) {
                    output = "Your closest living & giving store is at Westfield St Lukes, St Lukes Road, St Lukes, Auckland 1025"
                    + " it is " + distanceToAuckland + " km from you";
                    city = "2193734";
                } else {
                    output = ("Your closest living & giving store is at Westfield Riccarton, Shop 242, Rotheram Street, Christchurch 8041"
                    + " it is " + distanceToChristchurch + " km from you");
                    city = "7290680";
                }
                addBotParagraph(output);
                blankUserContainer()
                showWeather(city);
              }
            //console.log("should not show");
            }
    
        //send an API request
        xhr.open("GET", url + origins + auckland + "|" + christchurch, true);
        xhr.send();
    }

    function showWeather(cityID) {
        url = "http://api.openweathermap.org/data/2.5/forecast?id=";
        // aucklandId = "2193734";
        // christchurchId = "7290680"; 
        appId = "&APPID=6d8bed692dacf947406c23e760bc65ac";
    
        //http://api.openweathermap.org/data/2.5/forecast?id=2193734&APPID=6d8bed692dacf947406c23e760bc65ac
        var xhr = new XMLHttpRequest();
    
        //specify what to do with an API response 
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);         
                var main = response.list[0].weather[0].main; 
                var description = response.list[0].weather[0].description;
                addBotParagraph("Weather today  is " + main + ", " + description);
                blankUserContainer()
                var main = response.list[7].weather[0].main; 
                var description = response.list[7].weather[0].description;            
                addBotParagraph("Weather tomorrow is " + main + ", " + description);
                blankUserContainer()
            }
        }
    
        //send an API request
        xhr.open("GET", url + cityID + appId, true);
        xhr.send();
    
    }

    

    function getImage(imageURL) {
        url = imageURL;
        var xhr = new XMLHttpRequest();
        xhr.responseType = "document";
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var imgLink = "http://www.livingandgiving.co.nz/" + this.response.getElementById("productdetailimg").getAttribute("src");
                var a = document.createElement("a");
                var img = document.createElement("img");
                img.src = imgLink;
                a.href = url;
                a.target="_blank"
                console.log(img);

                var para = document.createElement("P");                       
                para.setAttribute("id", "imageContainer")                                     
                document.getElementById("chatBox").appendChild(para);

                img.setAttribute("id", "siteImage");
                a.setAttribute("align", "left");
                img.setAttribute("align", "left");
                document.getElementById("imageContainer").appendChild(a).appendChild(img);
            }
        }
        xhr.open("GET", url, true);
        xhr.send();

        scroll()
    }