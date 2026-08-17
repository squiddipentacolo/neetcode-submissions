class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = 0;
        let sell = 1;
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            if(prices[buy] < prices[sell]) {
                const profit = prices[sell] - prices[buy];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                buy = sell;
            }
            sell++;
        }

        return maxProfit;
    }
}
