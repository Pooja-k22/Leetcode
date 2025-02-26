/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    l=nums.length
    for(i=0;i<=l;i++){
        let flag=0
        for(j=0;j<nums.length;j++){
            if(nums[j]==i){
                flag++
                break
            }
        }
        if(flag==0) return i
         
    }
    return -1
    
};