class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charArr: number[] = new Array(26).fill(0);

        if(s.length !== t.length) return false;

        for(let i = 0; i < s.length; i++) {
            charArr[s.charCodeAt(i) - 97] += 1;
            charArr[t.charCodeAt(i) - 97] -= 1;
        }

        for(let i = 0; i < charArr.length; i++) {
            if(charArr[i] !== 0) return false;
        }

        return true;
    }
}
