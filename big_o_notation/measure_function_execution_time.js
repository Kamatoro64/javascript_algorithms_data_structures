function addUpTo(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += 1;
	}
	return total;
}

// Using the console.time() function to measure the execution time of a function
console.time('addUpTo');

addUpTo(1000000000);

console.timeEnd('addUpTo');

// The problem with comparing performance of algorithms based on time

// Different machines record different times, same machine records different times, for fast algorithms, speed measurements will not be precise