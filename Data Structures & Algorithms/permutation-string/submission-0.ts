class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        const matches = (a: number[], b: number[]): boolean => {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

        if(matches(count1, count2)) return true;

        for(let r = s1.length; r < s2.length; r++) {
            count2[s2.charCodeAt(r) - 'a'.charCodeAt(0)]++;
            
            let l = r - s1.length;
            count2[s2.charCodeAt(l) - 'a'.charCodeAt(0)]--;

            if(matches(count1, count2)) return true;
        }

        return false;
    }
}
