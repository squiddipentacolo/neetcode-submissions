class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parMap = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        };
        const parStack = [];

        if(s.length % 2 !== 0) return false;

        for(let c of s) {
            if(parMap[c]) {
                const el = parStack.pop();
                if(el !== parMap[c]) return false;
            } else {
                parStack.push(c);
            }
        }

        return parStack.length === 0;
    }
}
