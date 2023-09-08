function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    while(x2 > x1 && v1 > v2) {
        x2 = x2 + v2;
        x1 = x1 + v1;
        if(x2 == x1) {
            return "YES";
        } else if(x2 < x1) {
            return "NO";
        }
    } 
    while(x2 < x1 && v1 < v2) {
        x2 = x2 + v2;
        x1 = x1 + v1;
        if(x2 == x1) {
            return "YES";
        } else if(x2 > x1) {
            return "NO";
        }
    }
    undefined;
    return "NO";
}

kangaroo(0, 3, 4, 2);