function keyEventListener() {
  document.addEventListener('keydown', (event) => {
    const keyname = event.key;
    console.log(keyname);

    if (keyname == 'ArrowDown') {
      dropTile();
    }
    if (keyname == 'ArrowRight') {
      moveRight();
    }
    if (keyname == 'ArrowLeft') {
      moveLeft();
    }
    if (keyname == 'ArrowUp') {
      rotate();
    }
    if (keyname == 'q') {
      Stop();
    }
    if (keyname == 'r') {
      restart();
    }
    if (keyname == 'i') {
      printMatrix();
    }




  });
}



var run;
var time = 100;


var numRot = 0;
function Start() {
  numTiles = 0;
  console.log(positions.length);
  makeTile();

  run = setInterval(dropTile, time);
}


function restart(){

  console.log(colors.length);
  console.log(positions.length);
  matrixBottom = defaultMatrix;
  
  for(var i = 0; i < 32* numTiles+1 -1; i++){
    
    colors.pop();
    colors.pop();
    positions.pop();
    
  }
  console.log(colors.length);
  console.log(positions.length);

  Stop();
  Start();
  main();
}

function Stop() {
  clearInterval(run);
}


function makeTile() {

  for(var i = 0; i <20; i++){
    if(matrixBottom[20][i] == 1){
      clearInterval(run);
      window.alert("Game Over");
      main();
      return;
    }
  }


  console.log("made tile" + numTiles);
  numRot = 0;








  var tile = Math.floor(Math.random() * 8);

  switch (tile) {
    case 1:
      makeO();
      break;
    case 2:
      makeI();
      break;
    case 3:
      makeZ();
      break;
    case 4:
      makeS();
      break;
    case 5:
      makeL();
      break;
    case 6:
      makeJ();
      break;
    case 7:
      makeT();
      break;


  }
//Random orientation

  // var randomRot = Math.floor(Math.random() * 4);
  // for(var i = 0; i < randomRot; i++){
  //   rotate();
  // }

  
  main();

 


}


function makeO() {
  numTiles++;
  console.log("made O");
  //Top left
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);
  //top right
  positions.push(0);
  positions.push(10);

  positions.push(1);
  positions.push(10);


  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);

  //botleft
  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);

  positions.push(-1);
  positions.push(8);

  positions.push(0);
  positions.push(8);
  //bot right
  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);

  positions.push(0);
  positions.push(8);

  positions.push(1);
  positions.push(8);


  var R =102/255;
  var G =102/255;
  var B = 255/255;


  for(var i = 0; i < 4; i++){
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }


  //top left
  
  




}
function makeS() {
  numTiles++;
  console.log("made S");
  //third
  positions.push(-2);
  positions.push(9);

  positions.push(-1);
  positions.push(9);


  positions.push(-2);
  positions.push(8);

  positions.push(-1);
  positions.push(8);

  /// second
  positions.push(0);
  positions.push(10);

  positions.push(1);
  positions.push(10);

  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);
  /////first
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);


  /// fourth
  positions.push(-1);
  positions.push(9);

  positions.push(-0);
  positions.push(9);


  positions.push(-1);
  positions.push(8);

  positions.push(-0);
  positions.push(8);







  var R = 0;
  var G = 0;
  var B = 1;

  for(var i = 0; i < 4; i++){
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }




}


function makeZ() {
  numTiles++;
  console.log("made Z");
  //1
  positions.push(-2);
  positions.push(10);

  positions.push(-1);
  positions.push(10);

  positions.push(-2);
  positions.push(9);

  positions.push(-1);
  positions.push(9);
  //2
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);


  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);


  //3
  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);

  positions.push(-1);
  positions.push(8);

  positions.push(0);
  positions.push(8);




  //4
  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);

  positions.push(0);
  positions.push(8);

  positions.push(1);
  positions.push(8);


  var R = 204/255;
  var G =  102/255;
  var B = 0;

  for (var i = 0; i < 4; i++) {
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }




}


function makeI() {
  numTiles++;
  console.log("made I");

  positions.push(-2);
  positions.push(10);

  positions.push(-1);
  positions.push(10);

  positions.push(-2);
  positions.push(9);

  positions.push(-1);
  positions.push(9);

  ///
  positions.push(-1);
  positions.push(10);


  positions.push(0);
  positions.push(10);


  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);
  //
  positions.push(0);
  positions.push(10);


  positions.push(1);
  positions.push(10);


  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);
  //

  positions.push(1);
  positions.push(10);


  positions.push(2);
  positions.push(10);


  positions.push(1);
  positions.push(9);

  positions.push(2);
  positions.push(9);

  var R = 1;
  var G = 1;
  var B = 0;

  for(var i = 0; i < 4; i++){
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }




}

function makeL() {
  numTiles++;
  console.log("made L");
  //first
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);



  ///third

  positions.push(1);
  positions.push(10);


  positions.push(2);
  positions.push(10);


  positions.push(1);
  positions.push(9);

  positions.push(2);
  positions.push(9);
  ///second
  positions.push(0);
  positions.push(10);


  positions.push(1);
  positions.push(10);


  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);
  //fourth

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);

  positions.push(-1);
  positions.push(8);

  positions.push(0);
  positions.push(8);

  var R = 102 / 255;
  var G = 0;
  var B = 102 / 255;

  for (var i = 0; i < 4; i++) {
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);

  }





}
function makeJ() {
  numTiles++;
  console.log("made J");
  //first
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);



  ///third

  positions.push(1);
  positions.push(10);


  positions.push(2);
  positions.push(10);


  positions.push(1);
  positions.push(9);

  positions.push(2);
  positions.push(9);
  ///second
  positions.push(0);
  positions.push(10);


  positions.push(1);
  positions.push(10);


  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);
  //fourth

  positions.push(1);
  positions.push(9);

  positions.push(2);
  positions.push(9);

  positions.push(1);
  positions.push(8);

  positions.push(2);
  positions.push(8);

  var R = 1;
  var G = 0;
  var B = 0;

  for(var i = 0; i < 4; i++){
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }





}
function makeT() {
  numTiles++;
  console.log("made T");
  //first
  positions.push(-1);
  positions.push(10);

  positions.push(0);
  positions.push(10);

  positions.push(-1);
  positions.push(9);

  positions.push(0);
  positions.push(9);



  ///third

  positions.push(1);
  positions.push(10);


  positions.push(2);
  positions.push(10);


  positions.push(1);
  positions.push(9);

  positions.push(2);
  positions.push(9);
  ///second
  positions.push(0);
  positions.push(10);


  positions.push(1);
  positions.push(10);


  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);
  //fourth

  positions.push(0);
  positions.push(9);

  positions.push(1);
  positions.push(9);

  positions.push(0);
  positions.push(8);

  positions.push(1);
  positions.push(8);

  var R = 0;
  var G = 102 / 255;
  var B = 0;

  for(var i = 0; i < 4; i++){
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  
    colors.push(R);
    colors.push(G);
    colors.push(B);
    colors.push(1.0);
  }



}




// function moveTile(id, x, y) {



//   for (let i = 0; i < 16; i++) {
//     tilePos = lineOffset + 2 * (id * 16 + i);

//     positions[tilePos] += x;
//     positions[tilePos + 1] += y;
//   }

// }

function rotate() {


  rotateTile(numTiles, Math.PI / 2);

  main();
}





function rotatePoint(cx, cy, angle, px, py) {
  var s = Math.sin(angle);
  var c = Math.cos(angle);

  // translate point back to origin:
  px -= cx;
  py -= cy;

  // rotate point
  var xnew = px * c - py * s;
  var ynew = px * s + py * c;

  // translate point back:
  px = xnew + cx;
  py = ynew + cy;
  return {
    px: px,
    py: py,
  };
}


function rotateTile(id, angle) {
  //console.log(positions);
  // 3rd square is pivot

  cxPOS = lineOffset + ( 2 * (id - 1) * 16 ) + 12;

  var ty, tx;
  if (numRot == 0) {
    tx = -0.5;
    ty = 0.5;
    numRot++;
  } else if (numRot == 1) {
    tx = -0.5;
    ty = -0.5;
    numRot++;
  } else if (numRot == 2) {
    tx = 0.5;
    ty = -0.5;
    numRot++;

  } else {
    tx = 0.5;
    ty = 0.5;
    numRot = 0;
  }



  cx = positions[cxPOS] + tx;
  cy = positions[cxPOS + 1] + ty;
  //console.log("cx " + cx + "cy" + cy);


  for (let i = 0; i < 16; i++) {
    tilePos = lineOffset + 2 * ((id - 1) * 16 + i);

    //console.log("Rotating R " + numTiles);
    //console.log(angle + " " + positions[tilePos]);
    var newpoint = rotatePoint(cx, cy, angle, positions[tilePos], positions[tilePos + 1]);

    //console.log(newpoint.px + " " + newpoint.py);
    positions[tilePos] = newpoint.px;
    positions[tilePos + 1] = newpoint.py;

  }

  

  main();
}





function dropTile() {

  var id = numTiles - 1;
  

  // check all if bottom, then move all down. TO DO
  var tilePos = lineOffset + 2 * (id * 16);



  // console.log("array "+ tilePos);
  // console.log("array length " + positions.length);
  var isbottom = false;
  var botCount = 0;
  //look at one vertex for each square
  for (let i = 0; i < 4; i++) {
    var tilePos = lineOffset + 8 * (id * 4 + i);

    x =  positions[tilePos] + 5; // 0 to 10
    y = positions[tilePos + 1] + 9; // 0 to 20
    //console.log("x" + x +" y" + y);
    

    // y = Math.floor(y);
    // x = Math.floor(x);
    if(numRot == 1 || numRot == 2){
      y++;
    }
      
      
      // console.log("cx" + cx +" cy" + cy);
      //console.log("y: "+ y +" floor x" + x +" ceil x" + (x+1));
      

    
    if (matrixBottom[y][x] == 1 && matrixBottom[y][x + 10] == 1) {
      isbottom = true;
      botCount++;

    }



  }
  //console.log("num of vertex touching bottom: " + botCount);

  if (isbottom ) {
    for (let i = 0; i < 4; i++) {
      var tilePos = lineOffset + 8 * (id * 4 + i);
      x = Math.ceil(positions[tilePos] +5);
      y = positions[tilePos + 1] + 10;
      
      var ty, tx;
      if (numRot == 0) {
        tx = 0.5;
        ty = -0.5;
        
      } else if (numRot == 1) {
        tx = 0.5;
        ty = 0.5;
        
      } else if (numRot == 2) {
        tx = -0.5;
        ty = 0.5;
       
    
      } else {
        tx = +0.5;
        ty = +0.5;
       
      }

      cx = x + tx;
      y = Math.ceil(y+ ty);
    
      
      matrixBottom[y][x] = 1;
      matrixBottom[y][x + 10] = 1;
      
      

     
    }
    

    printMatrix();

    makeTile();
    return;
  }

  for (let i = 0; i < 16; i++) {
    var tilePos = lineOffset + 2 * (id * 16 + i);

    positions[tilePos + 1] += -1;
  }


  main();
  return;

}





function moveRight() {
  var id = numTiles - 1;

  var isRightWall = false;


  for (let i = 0; i < 16; i++) {
    tilePos = lineOffset + 2 * (id * 16 + i);

    if (positions[tilePos] == 5) {
      isRightWall = true;

    }

  }
  if (isRightWall) {

    return;
  }

  for (let i = 0; i < 16; i++) {
    tilePos = lineOffset + 2 * (id * 16 + i);

    positions[tilePos] += 1;

  }

  main();

}


function moveLeft() {
  var id = numTiles - 1;


  var isleftWall = false;


  for (let i = 0; i < 16; i++) {
    tilePos = lineOffset + 2 * (id * 16 + i);

    if (positions[tilePos] == -5) {
      isleftWall = true;

    }

  }
  if (isleftWall) {

    return;
  }

  for (let i = 0; i < 16; i++) {
    tilePos = lineOffset + 2 * (id * 16 + i);

    positions[tilePos] += -1;

  }

  main();

}

