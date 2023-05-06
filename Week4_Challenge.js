function LongestWord(sen) { 

  // code goes here  
  var splitString = sen.split(/[!\s?&,.]+/);

  return splitString.sort((a, b) => b.length - a.length)[0]

}
   
// keep this function call here 
console.log(LongestWord(readline()));
