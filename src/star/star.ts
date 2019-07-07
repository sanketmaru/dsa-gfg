class Star {
    //      *
    //     * *
    //    * * *
    // print above pattern given the level
    public printStar(num: number) {
        for (let i = 1; i <= num; i++) {
            for (let k = 1; k <= (num - i); k++) {
                document.write("&nbsp;");
            }
            for (let j = 1; j <= i ; j++) {
                document.write("*");
            }
            document.write("<br/>");
        }
    }
    // 4 3 2 1
    //  3 2 1
    //   2 1
    //    1
    // printNumbers(4);
    public printNumbers(num: number) {
        for (let i = num; i >= 1; i--) {
            for (let k = 1; k <= (num - i) ; k++) {
                document.write("&nbsp;");
            }
            for (let j = i; j >= 1 ; j--) {
                document.write(j + "");
            }
            document.write("<br/>");
        }
    }
}

// document.write('<br/>');
