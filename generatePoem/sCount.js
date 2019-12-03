function generatesCount(currentWord, previousLine, formatArray, lineCount) {
  
  let sCount = 4;
  
  if (previousLine == 0) {
    
    if (currentWord == 1) 
    {
      r = int(random(0, 100));
      if (r < 20) {sCount = 2;} 
      else {sCount = 1;}
    } 
    
    else if (currentWord == 2) 
    {
      r = int(random(0, 100));
      if (r < 5) {sCount = 4;} 
      else {sCount = 1;}
    } 

  }

  if (previousLine == 1) {
    
    if(formatArray[previousLine] == 5)
    {
      sCount = 3;
    }
    
    else
    {
        r = int(random(0, 100));
        if (r < 37) {sCount = 2;} 
        else {sCount = 1;}
    }
  }
  
  if (previousLine == 2) {
    
    if(formatArray[previousLine] == 5)
    {
      r = int(random(0, 100));
        if (r < 37) {sCount = 2;} 
        else {sCount = 3;}
    }
    
    else
    {
        r = int(random(0, 100));
        if (r < 37) {sCount = 2;} 
        else {sCount = 1;}
    }
  }
  
  if (previousLine == 3) {
    
    if(formatArray[previousLine] == 5)
    {
      sCount = 3;
    }
    
    else
    {
        r = int(random(0, 100));
        if (r < 20) {sCount = 3;}
        if (r >= 20 && r < 45) {sCount = 2;}
        else {sCount = 1;}
    }
  }
  
  if (previousLine == 4 || previousLine == 5) {
    
    if(lineCount < 3 && formatArray[previousLine] == 7)
    {
      sCount = 1;
    }
    else
    {
        r = int(random(0, 100));
        if (r < 37) {sCount = 2;} 
        else {sCount = 1;}
    }
  }
  return sCount;
}