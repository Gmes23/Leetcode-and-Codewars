class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        if nums and len(nums) > 1:
            j = 0
            for i in range(len(nums)):
                if nums[i]:
                    if not nums[j]: # check if necessary to swap
                        nums[i], nums[j] = nums[j], nums[i]
                    j += 1
        return nums
print(Solution().moveZeroes([0,0,0,223,2])) 