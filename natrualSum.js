function getNaturalSum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    console.log(total);
}
getNaturalSum(5);
getNaturalSum(100);
getNaturalSum(52);
getNaturalSum(12);
getNaturalSum(24);