function generateLine(previousLine, poemArrayWords, formatArray, i) {
  
  let word;
  let lineCount = -1;
  lineCount = lineSyllableCount(previousLine);
  generateFormat(previousLine, formatArray);
  console.log(formatArray[previousLine]);
  if(formatArray[previousLine] == 5){lineCount = int(random(2,4));}
  if(formatArray[previousLine] == 7){lineCount = int(random(2,4));}
  if(formatArray[previousLine] == 9){lineCount = int(random(2,4));}
  let remaining = lineCount;
  let currentWord = 1;
  let r = 0;
  let sCountPrev = 0;
  
  while(remaining != 0) //loops until syllables for line are filled
  { 
    
    let sCount = generatesCount(currentWord, previousLine, formatArray, lineCount);
    
    if(remaining - sCount < 0)
    {
      sCount = remaining;
    }
    else if (lineCount == 2 && formatArray[previousLine] == 7)
    {
      sCount = 1;
    }
  
    word = generateWordSyllables(sCount, lexicon);
    console.log(word);
    i = addFormatting(word, formatArray, poemArrayWords, previousLine, currentWord, i, sCount, lineCount, remaining, sCountPrev);
      
      remaining -= sCount;
      sCountPrev = sCount;
      i++;
      if(remaining == 0)
      {
        poemArrayWords[i] = '\n';
        i++;
      }
    currentWord++;
    }
    return i;
    
}
  
/*
  1 = - 
  2 = / -
  3 = - /
  4 = //
  5 = ——
  6 = / 
  7 = // /
  8 = // //
  9 = //——// 
  10 = / / 
  */
  