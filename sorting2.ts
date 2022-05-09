/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
          for (let j = 0; j < nums.length; j++) {
              if (nums[i] < nums[j]) {
                  let newData = nums[i];
                  nums[i] = nums[j]
                  nums[j] = newData;
              }
          }
      }
  };