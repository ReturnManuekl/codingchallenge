function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(s, t, a, b, apples, oranges);
    var totalAp = 0;
    var totalOr = 0;
    for (let i = 0; i < apples.length; i++) {
   		if (apples[i] + a >= s && apples[i] + a <= t) {
      	totalAp++;
      } 
    }
    for (let u = 0; u < oranges.length; u++) {
   		if (oranges[u] + b >= s && oranges[u] + b <= t) {
      	totalOr++;
      } 
    }
    console.log(totalAp);
    console.log(totalOr);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1, 4], [5, -6, 10, -7]);