// Binary search is much faster than linear search
// Eliminates half of the remaining elements at a time (instead of one by one)
// ONLY works on sorted arrays

// Binary search is at worst case/average case O(log n)
/* How to work this out 

An array with 16 elements will take 4 steps to report an element is not found (worst case)
An array with 32 elements will take 5
An array with 64 elements will take 6

log(16) = 4
log(32) = 5
log(64) = 6
Hence the time complexity is log(n) 

*/

function binarySearch(sortedArray, num) {
	let left = 0;
	let right = sortedArray.length - 1
	let currentIndex = Math.round((left + right) / 2)

	// As long as num is not equal to the element at index currentIndex, continue
	while (sortedArray[currentIndex] !== num) {
		if (sortedArray[currentIndex] > num) {
			console.log(currentIndex, 'is too far right')
			right = currentIndex
		} else {
			console.log(currentIndex, 'is too far left')
			left = currentIndex
		}

		// At some point, if the element is not found, the left and right marker will converge. At this point break out of the while loop
		if (right === left) return -1;

		// Re-compute the currentIndex 
		currentIndex = Math.round((left + right) / 2)

	}
	// If the while loop is broken and -1 was not returned, it measns the element was found at the currentIndex. Return the index!
	return currentIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));