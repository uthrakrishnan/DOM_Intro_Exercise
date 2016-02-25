console.log("Javascript is alive!");

//Change greeting from Hello there to "Hello, World!""
var hello = document.getElementById('greeting');

hello.innerHTML="Hello, World!";
//Set background color of each <li> to yellow.

var listElements = document.getElementsByTagName('li');
    for( var i=0; i<listElements.length; i++){
    listElements[i].style.backgroundColor = "yellow";
}

//Create an image tag and append to the #greeting div.
var picture = document.createElement('img');

picture.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";

hello.appendChild(picture);


