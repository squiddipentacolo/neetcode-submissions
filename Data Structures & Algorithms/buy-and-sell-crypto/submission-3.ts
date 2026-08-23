class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0;
        let maxProfit = 0;

        for(let sell = 1; sell < prices.length; sell++) {
            if(prices[sell] - prices[buy] > 0) {
                let profit = prices[sell] - prices[buy];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                buy = sell;
            }
        }

        return maxProfit;
    }
}
