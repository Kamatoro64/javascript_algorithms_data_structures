# Big O Notation


# Simplifying Big O Expressions

## Constants and Smaller Terms don't matter

| Expression     | Simplified |
| -------------- | :--------: |
| O(2n)          |    O(n)    |
| O(500)         |    O(1)    |
| O(13n²)        |   O(n²)    |
| O(n+10)        |    O(n)    |
| O(1000n + 50)  |    O(n)    |
| O(n² + 5n + 8) |   O(n²)    |


## Time Complexity
1. Arithmetic operations are constant time
2. Variable assignments are constant time
3. Accessing elements in an array (by index) or object (by key) is constant time
4.  In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop

## Space Complexity (Auxiliary Space Complexity)

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space where n is the string length
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
4. 

