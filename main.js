noseX=0;
noseY=0;
diff=0;
rightwristX=0;
leftwristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(100,100);

    canvas=createCanvas(550, 550);
    canvas.position(660,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("black");

    document.getElementById("text_side").innerHTML="The width and height of the Text = "+diff+" px";
    textSize(diff);
    fill("white");
    stroke("grey");
    text("Aanya", 100, 350);
}


function modelLoaded()
{
    console.log("model Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX= "+noseX);
        console.log("NoseY= "+noseY);

         leftwristX=results[0].pose.leftWrist.x;
         rightwristX=results[0].pose.rightWrist.x;

         diff=floor(leftwristX-rightwristX);
         console.log(diff);

    }
}






