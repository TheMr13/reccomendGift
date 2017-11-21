var xhr = new XMLHttpRequest();



function blah(){

    var watson = require('watson-developer-cloud');
    
    var conversation = watson.conversation({
      username: '{username}',
      password: '{password}',
      version: 'v1',
      version_date: '{version}'
    });


    document.getElementById("myResult").innerHTML = "fuck the poe-lees"
}


/*
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.state == 200) {
            var response = JSON.parse(this.responseTest);
        }
    }

    if (response) {
        document.getElementById("myResult").innerHTML = "fuck the poe-lees"
    }
*/

