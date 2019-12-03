function lineSyllableCount(previousLine){
  
  let lineCount; //total syllables for the line
  if(previousLine == 0){lineCount = int(random(4,6));}
  if(previousLine == 1){lineCount = int(random(1,4));}
  if(previousLine == 2){lineCount = int(random(3,6));}
  if(previousLine == 3){lineCount = int(random(3,6));}
  if(previousLine == 4){lineCount = int(random(2,6));}
  if(previousLine == 5){lineCount = int(random(2,5));}
  return lineCount;
}