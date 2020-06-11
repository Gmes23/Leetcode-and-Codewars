"""
1342. Number of Steps to Reduce a Number to Zero
level: easy 

Given a non-negative integer num, 
return the number of steps to reduce it to zero. 
If the current number is even, you have to divide it by 2, 
otherwise, you have to subtract 1 from it.
Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
"""
class Solution:
    def numberOfSteps (self, num: int) -> int:
        # we set a variable called steps to count how many times an operation happens
        steps = 0 
        # The != means not equal; its a comparison operator, using a while loop
        # we are saying while num does not equal 0 run this function
        while num != 0:
            # the % operator gives us the remainder of the division, 
            # if we have no remainder while num is divided by 2 then we know its even
            # this is a step so we also increment the steps counter
            if num % 2 == 0:
                num = num / 2
                steps += 1
            # so if the number is not even it must be odd, so we subtract 1
            # and also increment the step counter
            else:
                num = num - 1
                steps += 1
        # at the end of the while loop we have to return the value we modify; steps
        return print(steps)

# To run a function inside a class, 
# call the class Class() then the function inside of it
# Class().function()
Solution().numberOfSteps(20)


""" 
This question is from leetcode, submitting your questions will yield statistic of 
your equation and compare it to others, here is this algo statistic

Runtime: 32 ms, faster than 20.15% of Python3 online submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Number of Steps to Reduce a Number to Zero.


"""