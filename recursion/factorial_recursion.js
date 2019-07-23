/* 
Logic: factorial(3) = 3 * 2 * 1 = 3 * factorial(2) ...

Base case: factorial(1) = 1
*/

function factorial(num) {
	if (num === 1) return 1;

	return num * factorial(num - 1);
}

console.log(factorial(5));
