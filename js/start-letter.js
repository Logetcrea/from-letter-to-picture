
//from letter to picture\\


// ** thanks to #fabiantheblind for sharing his code, mine is based on ** \\

var particles = [];

function runPSystem (){

  colorMode(HSB,360,100,100,100);
  for (var i = 0; i < particles.length;i++) {
     particles[i].run();
    }
}

function particle (x, y, w, h, type){

 this.type = type;
 this.x = x;
 this.y = y;
 this.w = w;
 this.h = h;
 this.counter = 0;
 this.rotation = 0;
 this.factorX = random(1.8,3);
 this.factorY = random(1.8,3);
 this.factorX2 = random(3,5);
 this.factorY2 = random(3,5);
 this.factorX3 = random(5,7.5);
 this.factorY3 = random(5,7.5);
//if wide
 //this.factorX3 = random(3,5);
 //this.factorY3 = random(3,5);


 //Appearance of the date green
 this.display = function(){

    stroke(130,40,60,8);
    this.displayPush();

 };

 //Appearance of the addressee blue
 this.display2 = function(){

    stroke(200,50,65,8);
    this.displayPush();

 };

 //Appearance of the sender purple
 this.display3 = function(){

    stroke(270,40,90,6);
    this.displayPush();

 };

 this.displayPush = function(){

   noFill();
   push();// set the matrix so it is always centered
   translate(this.x, this.y);// push it to our position
   rectMode(CENTER);// we want the rect to be centered
   rotate(radians(this.rotation));// rotate it takes radians as arg
   rect(0, 0, this.w, this.h);// draw the particle
   pop();// push the matrix back

 };

 this.displayAll = function(){

  if(this.type === 1){
    this.display();
    this.move();
  }else if(this.type === 2){
    this.display2();
    this.move2();
  }else{
    this.display3();
    this.move3();
  }

};

 this.turn = function(){

  this.rotation++;

 };

 this.moveAll = function(){

   if(this.type === 1){
     this.move();
   }else if(this.type === 2){
     this.move2();
   }else{
     this.move3();
   }

 };

 this.move = function(){

   var borderX = width/20;
   var borderY = width/15;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;

   if (this.counter === 0){
     this.x++;
     if (this.x > width - borderX * this.factorX){
       this.counter = 1;
     }
   }

    if (this.counter === 1){
      this.y++;
      if (this.y > height - borderX * this.factorY){
        this.counter = 2;
      }
    }

    if (this.counter === 2){
      this.x--;
      if (this.x < borderX * this.factorX){
        this.counter = 3;
      }
    }

    if (this.counter === 3){
      this.y--;
      if (this.y < borderX * this.factorY){
        this.counter = 0;
      }
    }

 };

 this.move2 = function(){

   var borderX = width/20;
   var borderY = width/15;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;

   if (this.counter === 0){
     this.x++;
     if (this.x > width - borderX * this.factorX2){
       this.counter = 1;
     }
   }

    if (this.counter === 1){
      this.y++;
      if (this.y > height - borderX * this.factorY2){
        this.counter = 2;
      }
    }

    if (this.counter === 2){
      this.x--;
      if (this.x < borderX * this.factorX2){
        this.counter = 3;
      }
    }

    if (this.counter === 3){
      this.y--;
      if (this.y < borderX * this.factorY2){
        this.counter = 0;
      }
    }
 };

 this.move3 = function(){

   var borderX = width/20;
   var borderY = width/15;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;


   if (this.counter === 0){
     this.y--;
     if (this.y < borderX * this.factorY3){
       this.counter = 1;
     }
   }

    if (this.counter === 1){
      this.x++;
      if (this.x > width - borderX * this.factorX3){
        this.counter = 2;
      }
    }

    if (this.counter === 2){
      this.y++;
      if (this.y > height - borderX * this.factorY3){
        this.counter = 3;
      }
    }

    if (this.counter === 3){
      this.x--;
      if (this.x < borderX * this.factorX3){
        this.counter = 0;
      }
    }
 };

 this.run = function(){

  this.displayAll();
  this.turn();

};
}

function setup() {

  createCanvas(600,600);

  var fluke = random(10);
  var fluke2 = random(10);
  var fluke3 = random(10);
  var borderX = width/20;
  var borderY = width/25;
  var dateWidth = width/6;
  var dateHeight = height/28;
  var rectWidth = dateWidth * 1.5;
  var rectHeight = dateHeight * 3;

  //background
  fill(0,0,0,1);
  rect(0, 0, width, height);

  rectMode(CENTER);
  strokeWeight(0.5);
console.log(fluke);
  //Date and the different positions and their probabilities
  if(fluke >= 7.5){
    particles.push(new particle(borderX + dateWidth/2, borderY + dateHeight/2, dateWidth, dateHeight, 1));
  }else if(fluke >= 5.0){
    particles.push(new particle(width - borderX - dateWidth/2, borderY + dateHeight/2, dateWidth, dateHeight, 1));
  }else if(fluke >=  2.5){
    particles.push(new particle(borderX + dateWidth/2, borderY * 4 + dateHeight + rectHeight + rectHeight + dateHeight/2, dateWidth, dateHeight, 1));
  }else{
    particles.push(new particle(width - borderX - dateWidth/2, borderY * 4 + dateHeight + rectHeight + rectHeight + dateHeight/2, dateWidth, dateHeight, 1));
  }

  //addressee and the different positions and their probabilities
  if(fluke2 >= 6.67){
    particles.push(new particle(borderX + rectWidth/2, borderY * 3 + dateHeight + rectHeight + rectHeight/2, rectWidth, rectHeight, 2));
  }else if(fluke2 >= 3.34){
    particles.push(new particle(width/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight, 2));
  }else{
    particles.push(new particle(width - borderY - rectWidth/2, borderX * 3 + dateHeight + rectHeight + rectHeight/2, rectWidth, rectHeight, 2));
  }

  //sender and the different positions and their probabilities
  if(fluke3 >= 6.67){
    particles.push(new particle(borderX + rectWidth/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight, 3));
  }else if(fluke3 >= 3.34){
    particles.push(new particle(width - borderX - rectWidth/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight, 3));
  }else{
    particles.push(new particle(width/2, height - borderY - dateHeight/2, dateWidth * 3, dateHeight, 3));
  }

}

var t = 0;

function draw() {

  colorMode(HSB,360,100,100,100);
  noFill();
  //background
  /*fill(0,0,0,0.15);
  rect(0, 0, width*2, height*2);*/
  runPSystem();

  //for generating a picture at once
  /*if (t<1){
    for(var a = 0; a<random(3500,6000);a++){
      runPSystem();
    }
  t++;
}*/
console.log("t=" + t);

}

function keyTyped(){

  if(key == "s"){
    console.log("s");
    saveCanvas("img","png");
  }
}
