function generateWordSyllables(syllables, lexicon) {
 
  var sly = -1;  
  var word;
  var print;
  
  while(sly != syllables){
    word = lexicon.randomWord();
    var w = new RiString(word);
    w.analyze();
    print = new RiString(w.get("syllables"));
    sly = print.split("/").length;
    //console.log(print + ' ' + sly + w);
    if(sly == 1 && print.length() > 7)
    {
      sly = -1;
    }
    
  }
  return word;
}