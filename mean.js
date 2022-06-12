const data = [
    [1, 3, 5, 6, 4, 2],
    [2, 2],
    [1, 6, 4, 2],
    [6, 4, 2],
    [1, 2],
    [1, , 13, 312, 12],
    [1, , 42, 342, 432, 423, 2],
    [1, 3, 2],
    [1, 6, 4, 2],
    [6, 4, 2],
    [1, 2],
    [1, 13, 312, 12],
    [1, 56, 42, 342, 432, 423, 2],
    [1, 3, 2]
];


const mean = (arrayData) => {
    let meanData = arrayData.reduce((a, b) => a + b, 0) / arrayData.length;
    return meanData
}

const run = () => {

    let resultData = {

    }
    for (let i = 0; i < data.length; i++) {
        let meanValue =
            mean(data[i]);
        // resultData.hasOwnProperty(meanValue)
        if (meanValue in resultData)
            resultData[meanValue] = [...resultData[meanValue], i];
        else
            resultData = {
                ...resultData,
                [meanValue]: [i]

            }
    }
    let newData = Object.keys(resultData).sort((a, b) => { return a - b });


    let results = []
    for (let i = 0; i < newData.length; i++) {
        results = [...results, resultData[newData[i]]]
    }

    return results;
}

run();