nose_X=0;
nose_Y=0;


function preload(){
lipstick=loadImage('lip_prop-removebg-preview.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X=results[0].pose.nose.x-5;
        nose_Y=results[0].pose.nose.y+5;
    }
}

function draw(){
image(video,0,0,300,300);
image(lipstick,nose_X,nose_Y,60,60);
}

function take_snapshot(){
    save('myfilter.png');
}