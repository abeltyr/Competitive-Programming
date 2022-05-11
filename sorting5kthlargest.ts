function kthLargestNumber(nums: string[], k: number): string {
    nums.sort((a, b) => { return (BigInt(a) > BigInt(b) ? 1 : -1) }).reverse();
    return nums[k - 1].toString();
};