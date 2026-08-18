class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;
        let isValid = true;

        while (l < r && isValid) {
            while(l < r && !this.isAlphanum(s[l])) {
                l++;
            }

            while(l < r && !this.isAlphanum(s[r])) {
                r--;
            }

            isValid = s[l].toLowerCase() === s[r].toLowerCase();
            l++;
            r--;
        }

        return isValid;
    }

    isAlphanum(char: string): boolean {
        const charCode = char.charCodeAt(0);

        return (
            (charCode >= 48 && charCode <= 57) ||
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
        )
    } 
}
