function rearrangeArray(nums: number[]): number[] {
    let newOrder = rearrange(nums);
    return newOrder;
};

const rearrange = (nums: number[]): number[] => {
    let rearrangeOrder = [...nums];
    let i = 0;
    while (i < rearrangeOrder.length) {
        if (i > 0 && i < rearrangeOrder.length - 1 && (rearrangeOrder[i - 1] + rearrangeOrder[i + 1]) / 2 === rearrangeOrder[i]) {
            let oldData = rearrangeOrder[i];
            rearrangeOrder[i] = rearrangeOrder[rearrangeOrder.length - 1];
            rearrangeOrder[rearrangeOrder.length - 1] = oldData;
            i--;
        } else {
            i++;
        }
    }
    return rearrangeOrder;
}