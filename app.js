console.log("Javascript is alive!");


//When Page Loads
//Change greeting from Hello there to "Hello, World!""
var hello = document.getElementById('greeting');

hello.innerHTML="Hello, World!";
//Set background color of each <li> to yellow.
//
var listElements = document.getElementsByTagName('li');
for( var i=0; i<listElements.length; i++){
    listElements[i].style.backgroundColor = "yellow";
}

//Create an image tag and append to the #greeting div.
//create image element
var picture = document.createElement('img');
//set source image
picture.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
//append image to div with id"greeting"
hello.appendChild(picture);



//After Page loads

//Add event listener to div with id "essentials"
var essentials = document.getElementById('essentials');
essentials.addEventListener('click', function(event){
  if (event.target.tagName === "LI"){
    for(var i=0; i<listElements.length; i++){
        listElements[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    //Change the image to be the most recently clicked food item.
    var newImg= event.target.innerHTML;
    essentials.nextElementSibling.firstElementChild.src = "./images/"+newImg+".jpeg";
  }
});

//Remove gray div when moused over
var ghost=document.getElementById('ghosting');
ghost.addEventListener('mouseover', function(){
    this.remove(ghost);
});

//Double the size of the orange div on mouseover and went back
var resize = document.getElementById('resize');
resize.addEventListener('mouseenter', function(){
    this.style.width="400px";
});
resize.addEventListener('mouseleave', function(){
    this.style.width="200px";
});

var reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    for(var i=0; i<listElements.length; i++){
        listElements[i].classList.remove('selected');
    }
    essentials.nextElementSibling.firstElementChild.src="./images/panic.jpeg";
});

window.addEventListener("keypress", function(e){
    if (e.keyCode >= 48 && e.keyCode <= 57){ //|| //(e.keyCode >= 96 && e.keyCode <= 105)){ //0-9 only
        alert("I HATE NUMBERZZZ");
    }
});






