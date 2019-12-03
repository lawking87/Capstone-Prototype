let word;
let lineCount;
let sCount; //syllables
let leading;
let myfont;
let lexicon;
let poem;
let formatTwoMode = 0;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;


function preload() {
  myFont = loadFont('font.ttf');
  img1 = loadImage('../images/1.png');
  img2 = loadImage('../images/2.png');
  img3 = loadImage('../images/3.png');
  img4 = loadImage('../images/4.png');
  img5 = loadImage('../images/5.png');
  img6 = loadImage('../images/6.png');
  img7 = loadImage('../images/7.png');
  img8 = loadImage('../images/8.png');
  img9 = loadImage('../images/9.png');
  img10 = loadImage('../images/10.png');
  img11 = loadImage('../images/11.png');
}

function setup() {
  createCanvas(6000, 4000);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textLeading(10);
  textStyle(ITALIC);
  textFont(myFont);
  textSize(650);
  textAlign(CENTER, CENTER);
  rectMode(CENTER); 
}
function draw() {
}
function mousePressed() {
  background(50);
  image(img1,0,0);
  let poemArrayWords = [];
  let poemArrayLines = [];
  let formatArray = [];
  
  poem = generatePoem(poemArrayWords, poemArrayLines, formatArray);
  generateImage(poem);
  
  let lines = 'L1\nL2\nL3';

textLeading(400); // Set leading to 10
rectMode(CENTER); 
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(100);
  rect(width/3, height/2 - 50, 2400, 2400);
  fill(255);
  noStroke();
  strokeWeight(0);
  text(poem, width/3, height/2);
  rect(4500, height/2, 450, 4000);
  rectMode(CORNER);
  rect(4500, 2500, width/3, 350);



  //text(lineCount, width/4, height/4);
  
/* console.log(print.length());     
    //RiTa.similarBySoundAndLetter("cat")
 //text(RiTa.similarBySound(word), width/2, height/4);
  
*/
  save('test.png');
}