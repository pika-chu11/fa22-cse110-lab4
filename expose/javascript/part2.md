1. The console will print the current value of the variable ```i``` which is ```3```. Since we declare ```i``` as a ```var``` type, then it has no block scope and it could be access outside of the block. Thus, we can print the value.
2. The console will print the current value of the variable ```discountedPrice``` which is ```150```. Since we declare ```discountedPrice``` as a ```var``` type, then it has no block scope and it could be access outside of the block. Thus, we can print the value.
3. The console will print the current value of the variable ```finanPrice``` which is ```150```. Since we declare ```finanPrice``` as a ```var``` type, then it has no block scope and it could be access outside of the block. Thus, we can print the value.
4. The function will return the a list of ```finalPrice``` for the price list. Since we updated the ```discounted``` list after the function ends.
5.  ___ReferenceError: i is not defined.___ Since the type ```let``` has block scope and variable ```i``` defined within the ```for``` block and uses outside the block, therefore the program **_CANNOT_** refer to data anymore.
6.  ___ReferenceError: discountedPrice is not defined.___ Since the type ```let``` has block scope and variable ```discountedPrice``` defined within the ```for``` block and uses outside the block, therefore the program **_CANNOT_** refer to data anymore.
7. The console will print the current value of the variable ```finanPrice``` which is ```150```. Since we declare ```finanPrice``` only at the beginning within the function block, so we can access it whenever we are in the functino block.
8. The function will return the a list of ```finalPrice``` for the price list. Since we updated the ```discounted``` list after the function ends.
9. ___ReferenceError: i is not defined.___ Since the type ```let``` has block scope and variable ```i``` defined within the ```for``` block and uses outside the block, therefore the program **_CANNOT_** refer to data anymore.
10. The console will print the current value of the variable ```length``` which is ```3``` *the lenght of the input list.* Since we declare ```length``` as a ```const``` type and we assign it to a vlaue at the top within the function, so we can access later on in the function.
11. The function will return the a list of ```finalPrice``` for the price list. Since we updated the ```discounted``` list after the function ends.
12. \
    __A.__ ```student.name``` or ```student["name"]```.\
    __B.__ ```student["Grad Year"]```.\
    __C.__ ```student.greeting()``` or ```student.greeting()```.\
    __D.__ ```student["Favorite Teacher"].name```.\
    __E.__ ```student.courseLoad[0]```.
13. \
    __A.__ ```32```. Since integers map to their exact string representation.\
    __B.__ ```1```. Since numeric conversion happens in mathematical expressions. ```'3'``` is converted to type number ```3``` in this expression.\
    __C.__ ```3```. Since numeric conversion happends in mathematical expressions. ```null``` is converted to type number ```0``` in this expression.\
    __D.__ ```3null```. Since ```null``` becomes ```"null"``` when concating to the ```'3'```.\
    __E.__ ```4```. Since ```true``` has value of ```1``` when performing numeric conversion. \
    __F.__ ```0```. Since there is no string, so the program will perform numeric conversion. Since ```false``` and ```null``` has value of ```0``` when performing numeric conversion. \
    __G.__ ```3undefined```. Since ```undefined``` becomes ```"undefined"``` when concating to the ```'3'```.\
    __H.__ ```NaN```. Since ```'3'``` maps to ```3``` and ```undefined``` maps to ```NaN```. ```3 - NaN``` we _Can't_ do the math, so the answer would be ```undefined``` which is same as ```NaN``` in Numeric Conversion.
14. \
    __A.__ **True.** String ```'2'``` becomes an number ```2```.\
    __B.__ **False.** Dictionary comparison, first char ```"2"``` is greater than the first char ```"1"```.\
    __C.__ **True.** String ```'2'``` becomes an number ```2```.\
    __D.__ **False.** Strict equality is strict. Different types from both sides lead to false.\
    __E.__ **False.** Since ```true`` has a value of ```0```.\
    __F.__ **True.** Since there are the same type from both sides.
15. - A strict equality operator ```===``` checks if the type of the variables are the same. If their types are different, it will return ```false```. 
    - A non-strick check ```==```with type conversion. 
16. See the **```part2-question16.js```** files.
17. The function ```modifyArray([1,2,3], doSomething)``` will return a array with double of the orginal array elements (```[2,4,6]```). First, the ```modifyArray``` function will declare an empty array name ```newArr```. Then for each element of the input array, it pass the value to the ```doSomething``` function and return the doubled value. Finally, push the value back to the array ```newArr``` and return it at the end of the function.
18. See the **```part2-question18.js```** files.
19. The output would be ```1 4 3 2```.
