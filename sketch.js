x = 0;
y = 0;
r = 100;
g = 150;
b = 220;
transx = 0;
transy = 0;
i = 0.001;
j = -0.005;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  //noFill();

//  stroke(255,0,170);
  
  //     centerX = 200;
  // centerY= 200;
  

  
  strokeWeight(1.5);
}

function draw() {
  
    fill(255,b,150,90);
  
  // noFill();
  
      r = r + .1;
  if (r > 255){
    r = 100;
  }
    

      
    b = b - .1;
      if (b < 200) {
      b = 250;
      }
      

  
  


  // background(r/3+170,r/b,b*.7);
  background(0,r,b);
  stroke(255,0,0);
  
  translate(400,400);

heartShape();
  
  i = i + 0.003
  

  push();
  scale(i,i);
  
heartShape();
  pop();
  
           j = j + 0.00035;
    
  if (i > 2){
loop();
     scale(j,j);
    heartShape();
   
 
   
    // i == 0;
      }

}
  function heartShape () {
   beginShape();
  heart(0,0,0,10,5);
  heart(0,0,60,10,5 );  
  heart(60,5,60,10,15);
  heart(-60,-5,240,10,15)
  heart(0,0,120,10,5);
  heart(0,0,135,15,15);
  heart(0,0,180,10,5);
  heart(0,0,240,10,5);
  heart(0,0,300,10,5);
  heart(0,0,315,15,15);
  heart(0,0,0,3,3);  
  heart(0,0,90,3,3);
  heart(0,0,180,3,3);
  heart(0,0,270,3,3);
  heart(0,80,0,20,20);
  heart(0,80,180,5,5);
  heart(0,-80,180,20,20);
  heart(0,-80,0,5,5);
  endShape();
    

    console.log(i);

}

function heart (transx,transy,r,x,y) {

  
  push();

  translate(transx,transy);
  rotate(r);
  
  beginShape();
  vertex(0,0);
  bezierVertex(x*-4.8,y*-4.0,x*-5.0,y*-11.0,x*0,y*-6.5);
  bezierVertex(x*5.0,y*-11.0,x*4.8,y*-4.0,0,0);
  endShape();
  
  pop();
}
  

  

