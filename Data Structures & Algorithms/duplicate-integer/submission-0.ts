class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap: Record<number, boolean> = {};
        let isDuplicate = false;
        let i = 0;

        while(!isDuplicate && i < nums.length) {
          const num = nums[i];
          if(numsMap[num]) {
                isDuplicate = true;
            } else {
                numsMap[num] = true;
            }
            i++;
        }

        return isDuplicate;
    }
}