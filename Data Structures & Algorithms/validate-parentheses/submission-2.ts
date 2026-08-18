type OpenPar = "(" | "[" | "{";
type ClosePar = ")" | "]" | "}";

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parMapping: Record<ClosePar, OpenPar>  = {
            ")": "(",
            "]": "[",
            "}": "{"
        };
        const parStack = [];
        let isValid = true;
        let i = 0;

        while(i < s.length && isValid) {
            if(!parMapping[s[i]]) {
                parStack.push(s[i]);
            } else {
                isValid = parStack.length !== 0 && parStack.pop() === parMapping[s[i]];
            }
            i++;
        }

        return isValid && parStack.length === 0;
    }
}
