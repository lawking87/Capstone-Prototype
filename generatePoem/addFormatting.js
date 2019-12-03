function addFormatting(word, formatArray, poemArrayWords, previousLine, currentWord, i, sCount, lineCount, remaining, sCountPrev)
{
  
  
  // format 1
  if(formatArray[previousLine] == 1)
  {
    
    if(currentWord == 1)
    {
      word = word.toUpperCase();
      poemArrayWords[i] = word;
    }
    
    else if (currentWord == 2)
    {
      word = word.toUpperCase();
      i--;
      word = poemArrayWords[i] + '@' + word;
      poemArrayWords[i] = word;
    }
    
    else
    {
      poemArrayWords[i] = word;
    }
      
  }
  
  
  // format 2
  else if(formatArray[previousLine] == 2)
  {
    if(currentWord == 1)
    {
      poemArrayWords[i] = word;
    }
    
    else if(currentWord == 2)
    {
      if(sCount == 1 && sCountPrev == 1)
      {
        if(remaining - sCount <= 0)
        {
          word = word.toUpperCase();
          i--;
          word = poemArrayWords[i] + ' / ' + word;
          poemArrayWords[i] = word;
        }
        else
        {
          i--;
          word = poemArrayWords[i] + ' ' + word + ' / ';
          poemArrayWords[i] = word;
          formatTwoMode = 1;
        }
      }
      else
      {
        word = word.toUpperCase();
        i--;
        word = poemArrayWords[i] + ' / ' + word;
        poemArrayWords[i] = word;
        formatTwoMode = 2;
      }
    }
    
    else if (currentWord == 3)
    {
      if(formatTwoMode == 1)
      {
        word = word.toUpperCase();
        i--;
        word = poemArrayWords[i] + word;
        poemArrayWords[i] = word;
      }
      else
      {
        word = word.toUpperCase();
        i--;
        word = poemArrayWords[i] + '@' + word;
        poemArrayWords[i] = word;
      }
    }
    
    else
    {
      word = word.toUpperCase();
      i--;
      word = poemArrayWords[i] + '@' + word;
      poemArrayWords[i] = word;
    }
  }
  
  
  // format 3
  else if(formatArray[previousLine] == 3)
  {
    if(currentWord == 1)
    {
      word = word.toUpperCase();
      poemArrayWords[i] = word;
    }
    
    else if(currentWord == 2)
    {
      if(sCount == 1 && sCountPrev == 1)
      {
        word = word.toUpperCase();
        i--;
        word = poemArrayWords[i] + '@' + word + ' /';
        poemArrayWords[i] = word;
      }
      else
      {
        i--;
        word = poemArrayWords[i] + ' / ' + word;
        poemArrayWords[i] = word;
      }
    }
    
    else
    {
      poemArrayWords[i] = word;
    }
  }
  
  
  // format 4
  else if(formatArray[previousLine] == 4)
  {
    if(currentWord == 1)
    {
      poemArrayWords[i] = word;
    }
    
    else if(currentWord == 2)
    {
      if(sCount == 1 && sCountPrev == 1)
      {
        i--;
        if(lineCount < 3)
        {
          word = poemArrayWords[i] + ' // ' + word;
        }
        else
        {
          word = poemArrayWords[i] + ' ' + word + ' //';
        }
        poemArrayWords[i] = word;
      }
      else
      {
        i--;
        word = poemArrayWords[i] + ' // ' + word;
        poemArrayWords[i] = word;
      }
    }
    
    else
    {
      poemArrayWords[i] = word;
    }
  }
  
  
  // format 5
  else if(formatArray[previousLine] == 5)
  {
    if(currentWord == 1)
    {
      word = word.split('').join(' ');
      poemArrayWords[i] = word;
    }
    else
    {
      word = word.split('').join(' ');
      i--;
      word = poemArrayWords[i] + '  ' + word;
      poemArrayWords[i] = word;
    }
  }
  

  // format 6
  else if(formatArray[previousLine] == 6)
  {
    
    if(currentWord == 1)
    {
      poemArrayWords[i] = word;
    }
    
    else if(currentWord == 2)
    {
      if(sCount == 1 && sCountPrev == 1)
      {
        i--;
        word = poemArrayWords[i] + ' ' + word + ' /';
        poemArrayWords[i] = word;
      }
      else
      {
        i--;
        word = poemArrayWords[i] + ' / ' + word;
        poemArrayWords[i] = word;
      }
    }
    
    else
    {
      poemArrayWords[i] = word;
    }
  }
  
  
  // format 7
  else if(formatArray[previousLine] == 7)
  {
    if(currentWord == 1)
    {
      word = word + ' //';
      poemArrayWords[i] = word;
    }
    
    else
    {
      if(remaining - sCount <= 0)
      {
        i--;
        word = poemArrayWords[i] + ' ' + word + '/';
        poemArrayWords[i] = word;
      }
      else
      {
        poemArrayWords[i] = word;
      }
    }
    
  }
  
  
  // format 8
  else if(formatArray[previousLine] == 8)
  {
    if(currentWord == 1)
    {
      word = '//' + word;
      if(lineCount == sCount) {word = word + '//';}
      poemArrayWords[i] = word;
    }
    
    else
    {
      if(remaining - sCount <= 0)
      {
        i--;
        word = poemArrayWords[i] + ' ' + word + '//';
        poemArrayWords[i] = word;
      }
      else
      {
        poemArrayWords[i] = word;
      }
    }
  }
  
  
  // format 9
  else if(formatArray[previousLine] == 9)
  {
    if(currentWord == 1)
    {
      word = word.split('').join(' ');
      word = '//' + word;
      if(lineCount == sCount) {word = word + '//';}
      poemArrayWords[i] = word;
    }
    
    else
    {
      if(remaining - sCount <= 0)
      {
        word = word.split('').join(' ');
        i--;
        word = poemArrayWords[i] + '  ' + word + '//';
        poemArrayWords[i] = word;
      }
      else
      {
        word = word.split('').join(' ');
        i--;
        word = poemArrayWords[i] + '  ' + word;
        poemArrayWords[i] = word;
      }
    }
  }
  
  
  // format 10
  else if(formatArray[previousLine] == 10)
  {

      if(remaining - sCount <= 0)
      {
        i--;
        word = poemArrayWords[i] + ' ' + word + ' /';
        poemArrayWords[i] = word;
      }
      else if(currentWord == 2)
      {
        poemArrayWords[i] = word;
      }
      else
      {
        word = word + ' /';
        poemArrayWords[i] = word;
      }
    
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