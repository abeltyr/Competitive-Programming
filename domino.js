const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const main = (inputData) => {
    let input = inputData.split(" ");
    const totalArea = (parseInt(input[0]) * parseInt(input[1]));
    const reminder = totalArea % 2;
    console.log((totalArea - reminder) / 2);
};


readline.on('line', line => {
    readline.close(),
        main(line);
});