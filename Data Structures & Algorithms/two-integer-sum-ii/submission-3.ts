class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0;
        let r = numbers.length - 1;

        while(l < r) {
            if(numbers[l] + numbers[r] > target) {
                r--;
            } else if (numbers[l] + numbers[r] < target) {
                l++;
            } else {
                console.log(l, r, numbers[l], numbers[r]);
                return [l + 1, r + 1];
            }

        }
    }
}
