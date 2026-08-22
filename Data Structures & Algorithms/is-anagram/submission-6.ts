class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const frequencyArr = new Array(26).fill(0);

        if(s.length !== t.length) return false;

        for(let i = 0; i < s.length; i++) {
            let charIndexS = s.charCodeAt(i) - 'a'.charCodeAt(0);
            let charIndexT = t.charCodeAt(i) - 'a'.charCodeAt(0);

            frequencyArr[charIndexS]++;
            frequencyArr[charIndexT]--;
        }

        for(let count of frequencyArr) {
            if(count !== 0) return false;
        }

        return true;
    }
}
