type ClosePar = ")" | "]" | "}";
type OpenPar = "(" | "[" | "{";

class Solution {

    
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parMap: Record<ClosePar, OpenPar> = {
            ")": "(",
            "]": "[",
            "}": "{"
        };
        const parStack = [];

        if(s.length % 2 !== 0) return false;

        for (let par of s) {
            if(parMap[par]) {
                if(parStack.pop() !== parMap[par]) return false;
            } else {
                parStack.push(par);
            }
        }

        return parStack.length === 0;
    }
}
