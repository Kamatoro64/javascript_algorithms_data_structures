function productOfArray(arr) {
	// Base case: If no elements in array, return 1
	console.log(arr.length)
	if (!arr.length) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 3, 4, 2]));