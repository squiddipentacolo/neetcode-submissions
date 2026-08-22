class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let area = 0;

        while(l < r) {
            let w = r - l;
            let h = Math.min(heights[l] , heights[r]);
            area = Math.max(area, w * h);

            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return area;
    }
}
