document.addEventListener('DOMContentLoaded',function(){

    var bodyElement = document.querySelector('body');
    bodyElement.onclick = function (){
        var color = "#"+randColor();
        bodyElement.style.backgroundColor = color;
    }
});




function randColor() {
    var color = Math.floor(Math.random() * (1 << 24));
    var colorStr = color.toString(16);
    var leftZero = 6 - colorStr.length;
    for (var i = 0; i < leftZero; i++) {
        colorStr = "0" + colorStr;
    }
    return colorStr;
}