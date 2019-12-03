function generatePoem(poemArrayWords, poemArrayLines, formatArray) {
  
  let word;
  let i = 0;
  let previousLine = 0;
  
  let lineTotal;//total number of lines
  let r = int(random(0,100));
  if(r <85) {lineTotal = 5;}
  else{lineTotal = 6;}
     	
  
  while(lineTotal != 0) //loops until all lines are generated
  {
  
    i = generateLine(previousLine, poemArrayWords, formatArray, i);
    previousLine++;
    formatTwoMode = 0;
    console.log(lineTotal + 'line\n');
    lineTotal--;
  
  }
  
  let separator = ' ';
  let poem = join(poemArrayWords, separator);
  return poem;
  
}