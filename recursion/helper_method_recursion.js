// Outer function that calls a recursive helper function

function collectOddValues(arr) {

	let result = [];

	// We don't want to be putting out result array in the helper function otherwise it will re-initialise it as it goes through each iteration
	function helper(helperInput) {

		// This is our base case, we will loop until out helper input array is empty
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}

		// The recursive bit, re-calling the helper function with the first element sliced off
		helper(helperInput.slice(1));
	}

	// Call the helper function that we defined
	helper(arr);

	// Return the result array
	return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));