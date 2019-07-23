function collectOddValues(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;

}

// This one is way faster because we don't do a concat for every single iteration
function collectOddValues2(arr, res = []) {
	if (!arr.length) return res;
	if (arr[0] % 2 !== 0) res.push(arr[0]);

	return collectOddValues2(arr.slice(1), res);
}
console.time('A')
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.timeEnd('A')

console.time('B')
console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.timeEnd('B')