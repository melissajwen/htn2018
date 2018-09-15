images = new Array;
images[0] = "/parrots/frame_01_delay-0.05s.jpg";
images[1] = "/parrots/frame_02_delay-0.05s.jpg";
images[2] = "/parrots/frame_03_delay-0.05s.jpg";
images[3] = "/parrots/frame_04_delay-0.05s.jpg";
images[4] = "/parrots/frame_05_delay-0.05s.jpg";
images[5] = "/parrots/frame_06_delay-0.05s.jpg";
images[6] = "/parrots/frame_07_delay-0.05s.jpg";
images[7] = "/parrots/frame_08_delay-0.05s.jpg";
images[8] = "/parrots/frame_09_delay-0.05s.jpg";
images[9] = "/parrots/frame_00_delay-0.05s.jpg";
setInterval(function() {changeImage()},250);
x = 0;
function changeImage() {
document.getElementById('ad').src = images[x];
if (x<8) {
x+=1;
}

else if (x=9) {
x=0;
}

}