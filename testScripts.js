function posting() {
var custURL = "https://thealphatest.mybluemix.net/testing";
var message = "?status=frustrated&bubble=burst"

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    
    var xhr = createCORSRequest('GET', custURL);
    xhr.send();
    /*
    xhttp.open("POST", custURL + message);
    xhttp.send();
    */
}



function keyTest() {
    for(var key in dumbObject) {
        console.log(key);
    }
    for(var key in dumbObject.x) {
        console.log(key);
    }

}

var dumbObject = {
    x: {
        some: "blahblah1",
        som: "blah1",
        so: "1",
        obble: {
            things: "woowoo1",
            thing: "woo1",
            thin: "w1"
        }
    },
    y: {
        some: "blahblah2",
        som: "blah2",
        so: "2",
        obble: {
            things: "woowoo2",
            thing: "woo2",
            thin: "w2"
        }
    },
    z: {
        some: "blahblah3",
        som: "blah3",
        so: "3",
        obble: {
            things: "woowoo3",
            thing: "woo3",
            thin: "w3"
        }
    }
}