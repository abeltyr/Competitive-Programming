function maxOperations(nums: number[], k: number): number {
    let operationCount = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === ) pair++;
        }
    }

    return operationCount;
};

const reArrange = (nums: number[], k: number): number[] {
    let operationCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let breakData = false;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === k) {

                nums.splice(i, 1);

                nums.splice(j, 1);
                break;
                breakData = true;
            }
        }
        if (breakData) break
    }

    return nums;
};