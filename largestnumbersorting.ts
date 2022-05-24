function largestNumber(nums: number[]): string {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                let value1 = nums[i].toString() + nums[j].toString();
                let value2 = nums[j].toString() + nums[i].toString();
                if (parseInt(value1) > parseInt(value2)) {
                    let newData = nums[i];
                    nums[i] = nums[j];
                    nums[j] = newData;
                }
            }
        }
    }
    let result = "";

    let zeroCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCounter++;
        result = result + nums[i].toString();
    }
    if (zeroCounter === nums.length) return "0"
    return result;
};