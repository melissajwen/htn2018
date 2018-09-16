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
setInterval(function() {changeImage()},100);
x = 0;

function changeImage() {
    document.getElementById('parrot').src = images[x];
    document.getElementById('parrot1').src = images[x];
    document.getElementById('parrot2').src = images[x];
    document.getElementById('parrot3').src = images[x];
    document.getElementById('parrot4').src = images[x];
    document.getElementById('parrot5').src = images[x];
    document.getElementById('parrot6').src = images[x];
    document.getElementById('parrot7').src = images[x];
    document.getElementById('parrot8').src = images[x];
    document.getElementById('parrot9').src = images[x];
    document.getElementById('parrot10').src = images[x];
    document.getElementById('parrot11').src = images[x];
    document.getElementById('parrot12').src = images[x];
    document.getElementById('parrot13').src = images[x];
    document.getElementById('parrot14').src = images[x];
    document.getElementById('parrot15').src = images[x];
    document.getElementById('parrot16').src = images[x];
    document.getElementById('parrot17').src = images[x];
    document.getElementById('parrot18').src = images[x];
    document.getElementById('parrot19').src = images[x];
    document.getElementById('parrot20').src = images[x];
    document.getElementById('parrot21').src = images[x];
    document.getElementById('parrot22').src = images[x];
    document.getElementById('parrot23').src = images[x];
    document.getElementById('parrot24').src = images[x];
    document.getElementById('parrot25').src = images[x];
    document.getElementById('parrot26').src = images[x];
    document.getElementById('parrot27').src = images[x];
    document.getElementById('parrot28').src = images[x];
    document.getElementById('parrot29').src = images[x];

    document.getElementById('parrot30').src = images[x];
    document.getElementById('parrot31').src = images[x];
    document.getElementById('parrot32').src = images[x];
    document.getElementById('parrot33').src = images[x];
    document.getElementById('parrot34').src = images[x];
    document.getElementById('parrot35').src = images[x];
    document.getElementById('parrot36').src = images[x];
    document.getElementById('parrot37').src = images[x];
    document.getElementById('parrot38').src = images[x];
    document.getElementById('parrot39').src = images[x];

    document.getElementById('parrot40').src = images[x];
    document.getElementById('parrot41').src = images[x];
    document.getElementById('parrot42').src = images[x];
    document.getElementById('parrot43').src = images[x];
    document.getElementById('parrot44').src = images[x];
    document.getElementById('parrot45').src = images[x];
    document.getElementById('parrot46').src = images[x];
    document.getElementById('parrot47').src = images[x];
    document.getElementById('parrot48').src = images[x];
    document.getElementById('parrot49').src = images[x];

    document.getElementById('parrot50').src = images[x];
    document.getElementById('parrot51').src = images[x];
    document.getElementById('parrot52').src = images[x];
    document.getElementById('parrot53').src = images[x];
    document.getElementById('parrot54').src = images[x];
    document.getElementById('parrot55').src = images[x];
    document.getElementById('parrot56').src = images[x];
    document.getElementById('parrot57').src = images[x];
    document.getElementById('parrot58').src = images[x];
    document.getElementById('parrot59').src = images[x];

    document.getElementById('parrot60').src = images[x];
    document.getElementById('parrot61').src = images[x];
    document.getElementById('parrot62').src = images[x];
    document.getElementById('parrot63').src = images[x];
    document.getElementById('parrot64').src = images[x];
    document.getElementById('parrot65').src = images[x];
    document.getElementById('parrot66').src = images[x];
    document.getElementById('parrot67').src = images[x];
    document.getElementById('parrot68').src = images[x];
    document.getElementById('parrot69').src = images[x];

    document.getElementById('parrot70').src = images[x];
    document.getElementById('parrot71').src = images[x];


    if (x < 9) {
        x += 1;
    }

    else if (x = 9) {
        x = 0;
    }
}