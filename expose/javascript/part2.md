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
12. 
    __A.__ ```student.name``` or ```student["name"]```.
    __B.__ ```student["Grad Year"]```.
    __C.__ ```student.greeting()``` or ```student.greeting()```.
    __D.__ ```student["Favorite Teacher"].name```.
    __E.__ ```student.courseLoad[0]```.