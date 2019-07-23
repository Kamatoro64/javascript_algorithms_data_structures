function recursiveRange(n) {
	// Base case
	if (n === 0) return 0;

	return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10));