class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();
        const res: number[] = [];

        for (let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        const buckets: number[][] = Array.from({length: nums.length + 1}, () => []);

        for(let [num, freq] of frequencyMap.entries()) {
             buckets[freq].push(num);
        }

        for(let i = nums.length; i >= 0; i--) {
            for(let num of buckets[i]) {
                res.push(num);
                if(res.length === k) return res;
            }
        }
    }
}
