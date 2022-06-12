function maxFrequency(nums: number[], k: number): number {
    let frequency = 1;
    for (let i = 0; i < nums.length; i++) {
        let increment = k;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + increment <= nums[j] && nums[j] > nums[i]) {
                increment = nums[j] - nums[i];
                nums[i] = nums[j];
            }
        }
    }
    console.log(nums)
    return frequency;
};