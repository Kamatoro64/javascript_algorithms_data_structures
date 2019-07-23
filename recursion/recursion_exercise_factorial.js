function factorial(n) {
	// base case. Factorial of 0 is always 1
	if (n === 0) return 1;

	return n * factorial(n - 1)

}

console.log(factorial(5))