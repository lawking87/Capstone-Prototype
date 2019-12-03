function generateFormat(previousLine, formatArray)
{
  let r;
  
  //line 1
  if(previousLine == 0){
    r = int(random(0,100));
    if(r < 8) {formatArray[previousLine] = 4;}
    else if(r >= 8 && r < 20) {formatArray[previousLine] = 3;}
    else if(r >= 20 && r < 37) {formatArray[previousLine] = 2;}
    else{formatArray[previousLine] = 6;}
  }
  
  
  //line 2
  else if(previousLine == 1){
    r = int(random(0,100));
    if(r < 8) {formatArray[previousLine] = 4;}
    else if(r >= 8 && r < 17) {formatArray[previousLine] = 7;}
    else if(r >= 17 && r < 26) {formatArray[previousLine] = 8;}
    else{formatArray[previousLine] = 5;}
  }
  
  
  //line 3
  else if(previousLine == 2){
    if(formatArray[1] != 5)
    {
      r = int(random(0,100));
      if(r < 8) {formatArray[previousLine] = 4;}
      else if(r >= 8 && r < 17) { 
        if (formatArray[1] != 7){
          formatArray[previousLine] = 7;
        }
        else
        {
          formatArray[previousLine] = 5;
        }
      }
      else if(r >= 17 && r < 26) {formatArray[previousLine] = 8;}
      else{formatArray[previousLine] = 5;}
    }
    else
    {
      if(formatArray[0] > 3 && formatArray[1] > 3)
      {
        r = int(random(0,100));
        if(r < 8) {formatArray[previousLine] = 6;}
        else if(r >= 8 && r < 40) {formatArray[previousLine] = 2;}
        else if(r >= 40 && r < 60) {formatArray[previousLine] = 3;}
        else if(r >= 60 && r < 80) {formatArray[previousLine] = 7;}
        else{formatArray[previousLine] = 1;}
      }
      
      else
      {
        r = int(random(0,100));
        if(r < 8) {formatArray[previousLine] = 6;}
        else if(r >= 8 && r < 60) {formatArray[previousLine] = 4;}
        else{formatArray[previousLine] = 7;}
      }
    }
  }
  
  
  //line 4
  else if(previousLine == 3){
    if(formatArray[1] != 5 && formatArray[2] != 5)
    {
      formatArray[previousLine] = 5;
    }
    else if(formatArray[0] > 3 && formatArray[1] > 3 && formatArray[2] > 3)
    {
      r = int(random(0,100));
      if(r < 33) {formatArray[previousLine] = 2;}
      else if(r >= 33 && r < 66) {formatArray[previousLine] = 3;}
      else{formatArray[previousLine] = 1;}

    }
    else
    {
      r = int(random(0,100));
      if(r < 8) {formatArray[previousLine] = 8;}
      else if(r >= 8 && r < 60) {formatArray[previousLine] = 6;}
      else{formatArray[previousLine] = 4;}
    }
    
  }
  
  
  //line 5
  else if(previousLine == 4){
    if(formatArray[3] == 8 || (formatArray[1] != 7 && formatArray[2] != 7))
    {
      formatArray[previousLine] = 7;
    }
    else
    {
      r = int(random(0,100));
      if(r < 35) {formatArray[previousLine] = 9;}
      else{formatArray[previousLine] = 8;}
    }
    
  }
  
  
  //line 6
  else if(previousLine == 5){
    if((formatArray[1] != 7 && formatArray[2] != 7 && formatArray[4] != 7))
    {
      formatArray[previousLine] = 7;
    }
    else
    {
      r = int(random(0,100));
      if(r < 15) {formatArray[previousLine] = 9;}
      else if(r >= 15 && r < 40) {formatArray[previousLine] = 6;}
      else{formatArray[previousLine] = 8;}
    }
    
  }

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
