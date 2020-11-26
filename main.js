right_wristx = 0;
left_wristx = 0;
difference = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(800, 100);

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet has been initiated!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        right_wristx = results[0].pose.rightWrist.x;
        left_wristx = results[0].pose.leftWrist.x;
        difference = floor(left_wristx - right_wristx);
        console.log("Right Wrist X = " + right_wristx + "Left Wrist X = " + left_wristx + "Difference = " + difference);
        document.getElementById("font_side").innerHTML = "Font Size is - " + difference + "Px";
    }
}

function draw() {
    background('#ffae42');
    text("SAMIT", 250, 250);
    textSize(difference);
    stroke('#ffebcd');
    fill('#ffebcd');
}