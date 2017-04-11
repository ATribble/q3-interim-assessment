var numbers = [15,22,48,37];

function setup(){
 createCanvas(600,400);
  background(50);
}

function draw(){
 if(mouseIsPressed){
  Drea(mouseX,mouseY);
  squares(mouseX,mouseY);
 }
if(mouseY<200){ fill(255,255,0,50);}
else{
 fill(255);
}
  code();
rowOfCircles();
}

function Drea(x,y){
  noStroke();
  fill(255,24,255,24);
 ellipse(x,y,100,100); 
}
function code(){
 for(var x= 1; x<4; x++){
  rect((x+1)*100,200, numbers[x],numbers[x]);
 }
}

function rowOfCircles(){
 for(var x= 2; x<4; x++){
  ellipse((x+1)*100,100, numbers[x],numbers[x]);
 }
}
function squares(x,y){
 fill(23,25,105,140);
 rect(x,y,50,50);
}
