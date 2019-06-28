//      *
//     * *
//    * * *
// print above pattern given the level

function printStar(num) {
    
    for(var i = 1; i <= num; i++) {
        for(var k=1; k<=(num-i);k++) {
            document.write('&nbsp;');
        }
        for(var j=1; j<=i;j++) {
            document.write('*');
        }
        document.write('<br/>');
    }
}

printStar(5);
document.write('<br/>');
// 4 3 2 1
//  3 2 1
//   2 1
//    1


function printNumbers(num) {
    
    for(var i = num; i >= 1; i--) {
        for(var k=1; k<=(num-i);k++) {
            document.write('&nbsp;');
        }
        for(var j=i; j>=1;j--) {
            document.write(j);
        }
        document.write('<br/>');
    }
}

printNumbers(4);