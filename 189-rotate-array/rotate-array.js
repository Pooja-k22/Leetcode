/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    l=nums.length
    k=k%l
    function reverse(s,e){
        while(s<e){
            [nums[s], nums[e]]=[nums[e],nums[s]]
            s++
            e--
        }
    
    }

   reverse(0,l-1)
   reverse(0,k-1)
   reverse(k,l-1)
}