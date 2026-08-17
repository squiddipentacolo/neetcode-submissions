class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const validChars = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
        let left = 0;
        let right = s.length - 1;
        let isPalindrome = true;

        while(left < right && isPalindrome) {
            const normalizedLeftChar = s[left].toLowerCase();
            const normalizedRightChar = s[right].toLowerCase();

            if(!validChars.has(normalizedLeftChar)) {
                left++;
            } else if(!validChars.has(normalizedRightChar)) {
                right--;
            } else {
                isPalindrome = normalizedLeftChar === normalizedRightChar;
                left++;
                right--;
            }
        }

        return isPalindrome;
    }
}
