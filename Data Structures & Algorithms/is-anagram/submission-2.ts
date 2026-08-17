class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const isAnagramMap = new Map<string, number>();
        let pos = 0;
        if(s.length !== t.length) return false;

        while(pos < s.length) {
            if(isAnagramMap.has(s[pos])) {
                const charCount = isAnagramMap.get(s[pos]);
                isAnagramMap.set(s[pos], charCount + 1);
            } else {
                isAnagramMap.set(s[pos], 1);
            }
            pos++;
        }

        pos = 0;

        while(pos < t.length) {
            if(isAnagramMap.has(t[pos])) {
                const charCount = isAnagramMap.get(t[pos]);
                isAnagramMap.set(t[pos], charCount - 1);
            } else {
                return false;
            }

            pos++;
        }

        for(let value of isAnagramMap.values()) {
            if(value !== 0) {
                return false;
            }
        }

        return true;
    }
}
