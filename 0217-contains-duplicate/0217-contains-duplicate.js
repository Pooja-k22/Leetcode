/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    num=nums.sort((n1,n2)=>n1-n2)
    for(let i=0;i<nums.length;i++){
        
            if(num[i]==num[i+1]){
                return true
            }
        
    }
    return false
};