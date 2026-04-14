var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "Images/PrintPage1.png";
    PrintButton2.src = "Images/PrintPage2.png";
    logo1.src = "Images/logo1.png";
    logo2.src = "Images/logo2.png";
}

var imgArray = new Array(
    "image1lg.png",
    "image2lg.png",
    "image3lg.png",
    "image4lg.png"
);

var titleArray = new Array(
    "Poolside Experience",
    "Luxury Guest Room",
    "Elegant Hotel Lobby",
    "Relaxing Spa Lobby"
);

var imgPath = "Images/Fullsize/";

function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle = titleArray[imgID];
    textDiv.innerHTML = textTitle;
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}// JavaScript Document