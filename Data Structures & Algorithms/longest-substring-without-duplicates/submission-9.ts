class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let charSet = new Set<string>();
        let maxLen = 0;

        for(let r = 0; r < s.length; r++) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            
            charSet.add(s[r]);
            maxLen = Math.max(maxLen, charSet.size);
        }
        
        return maxLen;
    }
}
