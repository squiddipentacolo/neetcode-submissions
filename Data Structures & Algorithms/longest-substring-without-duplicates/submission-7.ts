class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let lcsCount = 0;
        const charSet = new Set();

        for(let r = 0; r < s.length; r++) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }

            charSet.add(s[r]);
            lcsCount = Math.max(lcsCount, r - l + 1);
        }

        return lcsCount;
    }
}
