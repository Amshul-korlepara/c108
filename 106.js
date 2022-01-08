function Check_sound() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wKinqko_u/model.json", modelReady);


}

function modelReady() {
    classifier.classify(gotResults);
}
var dog=0;
var cow=0;
var duck=0;
var bird=0;

function gotResults(error,results){
    if(error){
console.error(error);
    }
    else{
       console.log(results);
       r=Math.floor(Math.random()*255)+1;
       g=Math.floor(Math.random()*255)+1;
       b=Math.floor(Math.random()*255)+1;
       document.getElementById("confidence").innerHTML="detected times of dog - "+dog+"detected times of cow"+cow+"detected time of bird"+bird+"detected times of ducks"+duck;
       document.getElementById("Answer").innerHTML="Detected sound of - "+results[0].lablel;
       document.getElementById("detected_times").style.color="rgb("+r+","+g+","+b+")";
       document.getElementById("Answer").style.color="rgb("+r+","+g+","+b+")";
       img= document.getElementById("gifs");
if(results[0].label=="dog"){
img.src="dog.gif";
}
else if(results[0].label=="COW"){
    img.src="cow.gif";

    }
    else if(results[0].label=="Duck"){
        img.src="duck.gif";

        }
        else if(results[0].label=="bird"){
            img.src="bird.gif";
    
            }
            else{
                img.src="listen.gif";
            }
    }
}
