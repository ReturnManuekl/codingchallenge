function birthday(s, d, m) {
    // Write your code here
  let resultado = 0;
  for(let i = 0; i < s.length - m + 1; i++) {
  	let suma = 0;
  	for(let t = 0; t < m; t++) {
    	suma = suma + s[i + t];
    }
    if(suma == d) {
    	resultado++;
    }
  }
  return resultado;
}

birthday([2, 2, 1, 3, 2], 4, 2)