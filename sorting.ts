function smallerNumbersThanCurrent(nums: number[]): number[] {
    let count = [];
    for (let i = 0; i < nums.length; i++) {
        let amount = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) amount = amount + 1;
        }
        count = [...count, amount]
    }
    return count;
};