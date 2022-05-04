function fizzBuzz(n: number): string[] {
    let data = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            data = [...data, "FizzBuzz"];
        } else if (i % 3 == 0) {
            data = [...data, "Fizz"];
        } else if (i % 5 == 0) {
            data = [...data, "Buzz"];
        } else {
            data = [...data, `${i}`];
        }
    }
    return data;
};