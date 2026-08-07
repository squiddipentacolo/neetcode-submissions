class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap = new Map<number, boolean>();

        for(const num of nums) {
            if(numsMap.has(num)) return true;

            numsMap.set(num, true);
        }

        return false;
    }
}