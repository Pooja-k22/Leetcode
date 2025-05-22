/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0
    let c=0
    for(let i =0;i<nums.length;i++){
        // if num is 1 count will add
        if(nums[i]== 1){
            c++
            
        }
        // if not count will start from 0
        else{ 
            c=0
        }
        //to find max of two numbers
        max =Math.max(max,c)
    }
    return max
};