class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
       const sMap: Record<string, number> = {};
       const tMap: Record<string, number> = {};
       let isValid = true;

       if(s.length !== t.length) return false;

       for(let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if(!sMap[sChar]) {
            sMap[sChar] = 1;
        } else {
            sMap[sChar] = ++sMap[sChar];
        }

        if(!tMap[tChar]) {
            tMap[tChar] = 1;
        } else {
            tMap[tChar] = ++tMap[tChar];
        }
       }

       if(sMap.size !== tMap.size) return false;

       for(let i = 0; i < s.length; i++) {
        if(sMap[s[i]] !== tMap[s[i]] || !sMap[s[i]] || !tMap[s[i]]) {
            isValid = false;
        }
       }

       return isValid;
    }
}
