function breakingRecords(scores) {
    // Write your code here
    let totalMayor = 0;
    let totalMenor = 0;
    let mayor = scores[0];
    let menor = scores[0];
        for(let i = 0; i < scores.length; i++) {
            if (scores[i] > mayor) {
            totalMayor++;
            mayor = scores[i];
        } else if(scores[i] < menor) {
            totalMenor++;
            menor = scores[i];
        }
    }
    return [totalMayor, totalMenor];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);