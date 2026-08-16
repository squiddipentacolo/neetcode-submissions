class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numberMap = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            if(numberMap.has(target - nums[i])) {
                return [numberMap.get(target - nums[i])!, i];
            } else {
                numberMap.set(nums[i], i);
            }
        }

        return [];
    }
}