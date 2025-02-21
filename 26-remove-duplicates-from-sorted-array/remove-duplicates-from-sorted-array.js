/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {  // 1 1 2 2 3 3 
    let k=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]!==nums[i+1] ){  //  1-2  2-3
            nums[k]=nums[i]  // n[k]= [1,2,]
            k++              //1 2
        }
    }
    nums[k]=nums[nums.length-1]
    k++
    return k 
};