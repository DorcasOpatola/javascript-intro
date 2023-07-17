# JavaScript Data Types
<i>JavaScript is a dynamically typed language.</i>

1. Numbers 
For numbers of any kind: integer or floating-point i.e (∞, -∞, NaN).
- range is ±(2⁵³-1)

2. Big Int
For integer numbers of arbitrary length
> // the "n" at the end means it's a BigInt
> const bigInt = 1234567890123456789012345678901234567890n;
> const BigInt = 10n;

3. String
A string may consist of zero characters (be empty), one character or many of them.
```
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

4. Boolean (Logical Operators)
- <b>True</b> means “yes, correct”
- <b>False</b> means “no, incorrect”

5. The "Null" Value
```
let age = null;
```
The "null" is a special value which represents “nothing”, “empty” or “value unknown”.
The code above states that age is unknown.

6. The "Undefined" Value
Undefined means "value not assigned".
<b>Null</b> is to assign an “empty” or “unknown” value to a variable, while <b>undefined</b> is reserved as a default initial value for unassigned things.

7. Symbols
- for unique identifiers

8. Objects
- for complex data structures

9. Typeof
The <b>typeof</b> operator allows us to see what data type is stored in a variable.
```
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)
```

