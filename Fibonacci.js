function fibonacci(n) {

    if (n == 0 || n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

var results = [];
var i = 0;
do {
    var result = fibonacci(i++);
    results.push(result);
} while (result <= 1000);

console.log(results);
