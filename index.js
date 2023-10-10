// 1.
function uppercase(str) {
  let result = [];
  let strArr = str.split(" ");
  for (const str of strArr) {
     result.push( str[0].toUpperCase() + str.slice(1) );
  }
  return result.join(" ");
}
console.log(1, uppercase("the quick brown fox"));

// 2.
function findLongestWord(str) {
   let strArr = str.split(" ");
   let result;
   for (let i = 0; i < strArr.length; i++) {
    if( i!==strArr.length-1 ) result = strArr[i].length > strArr[i+1].length ? strArr[i] : strArr[i+1];
   }
   return result;

  //alternative
  //  return strArr.reduce( (a,b) => a.length > b.length? a : b );
}
console.log(2, findLongestWord("Web Development Tutorial"));

// 3.
function longestCountryName(countries) {
  let result;
   for (let i = 0; i < countries.length; i++) {
    if( i!==countries.length-1 ) result = countries[i].length > countries[i+1].length ? countries[i] : countries[i+1];
   }
   return result;
}
console.log(3, longestCountryName(["France", "Germany", "Iran"]));



4.
function countWovels(str) {
  let words = str.split(" ");
  const vowels = "AaEeIiOoUu".split("");
  let result = [];
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
      for (let x = 0; x < words[i].length; x++) {
        if ( vowels.includes( words[i][x] ) ) result.push("vowel");
      }
  }
 
  return result.length;
}

console.log(4, countWovels('The quick brown fox'));

//alternative
// function countWovels(str) {
//   let strArr = str.split(" ");
//   const vowels = "AaEeIiOoUu".split("");
//   let result = [];
  
//   strArr.forEach( word => word.split("").forEach( letter => vowels.includes( letter ) ? result.push("vowel") : null ));
 
//   return result.length;

// }

// console.log(4, countWovels('The quick brown fox'));





// 5.
function makeRandomString(length) {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""); 
   let result = "";
   for (let i = 0; i < length; i++) {
      result += characters[ Math.floor( Math.random()*characters.length ) ];
   }
   return result;

  // //alternative 
  //  return new Array(4).fill(0).map( e => characters[ Math.floor( Math.random()*characters.length ) ] ).join("");
}
console.log(5, makeRandomString(4));