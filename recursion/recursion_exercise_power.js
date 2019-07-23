function power(base, exponent) {

	// Base case, x^0 = 1;
	if (exponent === 0) return 1;

	let result = base * power(base, exponent - 1)
	return result

}

console.log(power(2, 3));
