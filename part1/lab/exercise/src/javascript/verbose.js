const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




//BEST
const result = numbers.filter(function(e) { return e %2 === 0 ; })
.map(function(e) {return e*2;})
.reduce(function(total, e ) {return total + e; });

console.log(result);

//This is better but not the best