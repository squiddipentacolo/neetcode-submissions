class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        for(let num of nums) {
            if(!frequencyMap.has(num)) {
                frequencyMap.set(num, 0);
            }

            frequencyMap.set(num, frequencyMap.get(num) + 1);
        }

        const buckets: number[][] = Array.from({length: nums.length + 1}, () => []);
        const res: number[] = [];

        for(let [num, freq] of frequencyMap.entries()) {
            buckets[freq].push(num);
        }

        // for(let i = nums.length; i >= 0; i--) {
        //     for(let num of buckets[i]) {
        //         if(res.length === k) {
        //             return res;
        //         }

        //         res.push(num);
        //     }
        // }

        for(let i = nums.length; i >= 0; i--) {
            for(let num of buckets[i]) {
                res.push(num);
                if(res.length === k) return res;
            }
        }
    }
}
