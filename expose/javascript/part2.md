1. Question 1: 3 will be printed to the console at line 12. This is because i++ is done after each iteration of the scope, i. e. 3 times.
2. 150 will be printed to the console as this is the discounted price of the last price in the list.
3. 150 will be printed to the console as this is the finalPrice
4. Will return a list of three elements representing the discounted prices - [50,100,150]
5. The index i of the for loop is defined as with "let" and is therefore not defined when called in line 12. This will cause an error.
6. Same as in question 5. Because of the veriable being defined as let, an error will occour.
7. 150 will be printed to the console. This is because "let" is defined in the same scope as its called. 
8. Returning a let-variable is allowed and the function will therefor return the list of discounted prices. 
9. I is not defined in the scope of line 11 and therefore an error will occur
10. Length of prices will be printed to the screen, i.e. 3.
11. A const array of const elements will be returned. The reason why its possible to edit a const array is that being a const array means only that the pointer of the first element in the array is const.
12. Given the above Object, write the notation for:  (These should be in your part2.md)
A. Accessing the value of the name property in the student object
student.name
B. Accessing the value of the Grad Year property in the student object
student['Grad Year']
C. Calling the function for the greeting property in the student object
student.greeting();
D. Accessing the name property of the object in the Favorite Teacher property in student

E. Access the first index in the array of the courseLoad property of the student object
student.courseLoad[0]
13. Arithmetic
'3' + 2 = '32'
'3' - 2 = 1
3 + null = 3
‘3’ + null = '3null'
true + 3 = 4
false + null = 0
'3' + undefined = '3undefined'
'3' - undefined = NaN
14. Comparison
‘2’ > 1 = true
‘2’ < ‘12’=false
2 == ‘2’ =true
2 === ‘2’ =false
true == 2 =false
true === Boolean(2)=true
15. Explain the difference between the == and === operators.
Double equals checks for "loose equality" vs triple checks for "strict equality". Strict involves that the both the type and value must be equal for the expression to be true. In contrast, loose only checks if the value is the same and tries to mach the type of the variables. 
17. Callback and the array is passed into the function. If callback wasent passed into the function it would not be defined inside the modify array scope. The for-loop iterates through the array and using the the dosomething function doubles the value of each element. 
19. SetTimeout will delay output from line 1 with one second. Output from line 4 will acutally be printed to the console before line 5 as the function is a bit delayd even when the delay is set to 0.
```
1
4
3
2
    
```