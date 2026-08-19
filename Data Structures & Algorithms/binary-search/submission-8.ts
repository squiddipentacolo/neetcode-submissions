class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        let mid = 0;

        while(l + 1 < r) {
            mid = Math.floor((l + r) / 2);
            
            if(nums[mid] < target) {
                l = mid;
            } else if(nums[mid] > target) {
                r = mid;
            } else {
                return mid;
            }

        }
        
        if(r - l <= 1) {
            if(nums[l] === target) {
                return l;
            } else if(nums[r] === target) {
                return r;
            } else {
                return -1;
            }
        }
    }
}
