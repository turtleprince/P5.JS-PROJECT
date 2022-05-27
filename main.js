function preload(){

}

function setup(){
    canvas = createCanvas(640,400);
    canvas.position(110,250);

video = createCapture(VIDEO);
video.hide();
 tint_color = "";

}


function draw(){
    image(video,0,0,640,400);
    tint(tint_color);
    fill("gold");
  stroke("red");
  circle(30,25,50);
  fill("gold");
  stroke("red");
  circle(610,25,50);
  fill("gold");
  stroke("red");
  circle(610,375,50);
  fill("gold");
  stroke("red");
  circle(30,375,50);
}


function filter_tint(){
    tint_color = document.getElementById("color_filter").value;
}


function take_snapshot(){

    save('umum.png');
    
}