class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strsMap = new Map<string, string[]>();

        for(let str of strs) {
            const sortedString = str.split("").sort().join(); 
            if(strsMap.has(sortedString)) {
                const currentAnagrams = strsMap.get(sortedString) ?? [];
                strsMap.set(sortedString, [...currentAnagrams, str]);                
            } else {
                strsMap.set(sortedString, [str]);
            }
        }

        return Array.from(strsMap.values());
    }
}
