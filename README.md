###  1. var, let & const are used to declare variables but they are some differences between them.

- var is Function scope.
  let is Block scope.
  const is Block scope.

- var Re-declaration allowed.
  let Re-declaration not allowed.
  const Re-declaration not allowed.

- var Re-assign allowed.
  let Re-assign allowed.
  const Re-assign not allowed.

- most of the cases var avoid.
  When value change then use let.
  Most of the cases use const.

###  2. map(), forEach(), and filter() are some differences between them.

- map(): Iterates through an array and applies a function to each element. Return a new array with transformed value.
- forEach(): Iterates through an array and execute function to each element. Always return undefine. Dose not create a new array.
- filter(): Iterates through an array and select only element that pass the condition true/false. Return a new array with only filtered value.


###  3. Arrow functions were introduced in ES6 (ECMAScript 2015) as a shorter and cleaner way to write functions. Shorter syntax. Function has only one expression the value return automatically.

###  4. Destructuring assignment in ES6 is a way to extract values from arrays or properties from objects into variables in a clean, concise way.

- Array Destructuring 

      - const number=[1,2,3]
        const [x,y]=number
        console.log(x,y)
        Ans: 1,2

        - const [p,q=8]=7
          console.log(p,q)
          Ans: 7,8

- objects Destructuring

     -  const student{name:"aksh", id:25}
        const {name,id}=student
        console.log(name,id)

     - const{name:fullName}=student
       console.log(fullName)


### 5. Template literals (ES6) are a new way to work with strings. They are enclosed by backticks (`) instead of single (') or double (") quotes.

**They are different from string concatenation**
- Supports multi-line strings without hacks.
- Easier for dynamic values.
