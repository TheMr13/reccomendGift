function posting() {
var custURL = "https://thealphatest.mybluemix.net/testing";
var message = "?userInput=" + document.getElementById("userInput").value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };


    xhttp.open("POST", custURL + message);
    xhttp.send();

    
    
    
    /*
    var xhr = createCORSRequest('GET', custURL);
    xhr.send();
    */
}

    // Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }
  
  // Helper method to parse the title tag from the response.
  function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }
  
  // Make the actual CORS request.
  function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
  
    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
  
    xhr.send();
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