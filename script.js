var i = 0;
var images = [];
var time = 3500;

images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '4.jpeg';
images[3] = '5.jpg';
images[4] = '6.jpg';
images[5] = '7.jpg';
images[6] = '8.jpg';


function changeImage(){
    document.slides.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;