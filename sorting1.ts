function targetIndices(nums: number[], target: number): number[] {
    let ordered = [...nums];

    for (let i = 0; i < ordered.length; i++) {
        for (let j = 0; j < ordered.length; j++) {
            if (ordered[i] < ordered[j]) {
                let newData = ordered[i];
                ordered[i] = ordered[j]
                ordered[j] = newData;
            }
        }
    }
    let result = [];
    for (let i = 0; i < ordered.length; i++) {
        if(ordered[i] ===  target) result =[...result, i];
    }
    return result
}