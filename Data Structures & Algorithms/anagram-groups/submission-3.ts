class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>;

        for(let str of strs) {
            const key = new Array(26).fill(0);
            
            for(let letter of str) {
                let letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0);
                key[letterIndex]++;
            }
            
            const mapKey = key.join();

            if(!anagrams.has(mapKey)) {
                anagrams.set(mapKey, [str]);
            } else {
                const arr = anagrams.get(mapKey);
                arr.push(str);
                anagrams.set(mapKey, arr);
            }
        }

        return Array.from(anagrams.values());
    }
}
