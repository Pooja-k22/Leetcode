/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    st=x.toString()
    return st===st.split('').reverse().join('')
    
};