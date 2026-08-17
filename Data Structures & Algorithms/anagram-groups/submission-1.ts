class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strsMap = new Map<string, string[]>();

        for(let str of strs) {
            const sortedString = str.split("").sort().join(""); 
            if (!strsMap.has(sortedString)) {
                strsMap.set(sortedString, []);
            }

            strsMap.get(sortedString)!.push(str);
        }

        return Array.from(strsMap.values());
    }
}
