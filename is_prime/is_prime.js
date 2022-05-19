function isPrime(num) {
	let primeDetector = false;
	if (num <= 1) {
		return true;
	} else if (num === 2) {
		return false;
	} else if (num % 2 === 0) {
		return true;
	}
	for (i = 0; i < Math.abs(num); i++) {
		let remainder = num % i;
		if (remainder > 0) {
		} else {
			console.log(`The number ${num} is divisible by ${i}`);
			return (primeDetector = true);
		}
	}
	return primeDetector;
}
