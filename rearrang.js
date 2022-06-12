const data = [1, 3, 5, 6, 4, 2];


const sortedCheck = (arrayData) => {
    // keep track of things
    var isDescending = true;
    var isAscending = true;
    for (let i = 0; i < arrayData.length - 1; i++) {
        // true if this is greater than the next and all other so far have been true
        isDescending = isDescending && (arrayData[i] > arrayData[i + 1]);
        // true if this is less than the next and all others so far have been true
        isAscending = isAscending && (arrayData[i] < arrayData[i + 1]);
    }
    return {
        isAscending,
        isDescending
    }
}

const run = () => {

    let reversed = [...data].reverse();
    let rearrange = [];
    for (let i = 0; i < parseInt(data.length / 2); i++) {
        rearrange = [...rearrange, data[i], reversed[i]]
    }
    if (data.length % 2 !== 0) {
        rearrange = [...rearrange, data[parseInt(data.length / 2)]]
    }
    let answer = false;

    console.log(rearrange, sortedCheck(rearrange));

    return sortedCheck(rearrange).isAscending;
}

run();