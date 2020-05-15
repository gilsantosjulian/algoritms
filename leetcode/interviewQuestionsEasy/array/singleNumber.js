/**
 Given a non-empty array of integers, every element appears twice except for one. Find that single one.

  Note:

  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

  Example 1:

  Input: [2,2,1]
  Output: 1
  Example 2:

  Input: [4,1,2,1,2]
  Output: 4
 */


 // First Solution

var singleNumber = function (nums) {
  var duplicates = []

  for (i = 0; i < nums.length; i++) {
    if (!duplicates.includes(nums[i])) {
      duplicates.push(nums[i])
    } else {
      duplicates = duplicates.filter(function (num) {
        return num !== nums[i]
      })
    }
  }

  console.log(duplicates)

  return duplicates[0]

};

// Second Solution
var singleNumber = function (nums) {
  while (nums.length !== 1) {
    for (i = 0; i < nums.length; i++) {
      for (j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          nums = helper(nums, nums[i])
        }
      }
    }
  }

  return nums[0]
};

function helper(arr, num) {
  var newArr = []
  for (j = 0; j < arr.length; j++) {
    if (arr[j] !== num) {
      newArr.push(arr[j])
    }
  }
  return newArr
}