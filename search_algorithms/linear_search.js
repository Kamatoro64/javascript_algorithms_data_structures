// Linear search time complexity is O(n)
function linearSearch(arr, value) {
	let result = -1;
	arr.forEach((item, index) => {
		if (item === value) {
			result = index;
			// If we had done return index here it would not have worked becasuse this is inside a callback
		}
	})
	return result;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))