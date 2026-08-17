class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        let isPalindrome = true;

        while(left < right && isPalindrome) {
            if(!this.isAlphaNum(s[left])) {
                left++;
            } else if(!this.isAlphaNum(s[right])) {
                right--;
            } else {
                isPalindrome = s[left].toLowerCase() === s[right].toLowerCase();
                left++;
                right--;
            }
        }

        return isPalindrome;
    }

    isAlphaNum(char: string): boolean {
        const charCode = char.charCodeAt(0);

        return (charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 ||
            charCode >= 97 && charCode <= 122)
    }
}
