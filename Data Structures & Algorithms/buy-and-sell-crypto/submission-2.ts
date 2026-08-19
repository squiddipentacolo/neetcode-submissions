class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0; // l = buy
        let maxProfit = 0;

        for(let r = 1; r < prices.length; r++) {
            if(prices[r] < prices[l]) {
                l = r;
            } else {
                const currentProfit = prices[r] - prices[l];
                maxProfit = Math.max(maxProfit, currentProfit);
            }
        }

        return maxProfit;
    }
}
