/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {  // 1 1 2 2 3 3 
    let k=0
    for(let i=1;i<nums.length;i++){
        if(nums[k]!==nums[i] ){  //  1-2  2-3
            nums[k+1]=nums[i]  // n[k]= [1,2,3]
            k++              //1 2
        }
    }
    
    return k+1 
};