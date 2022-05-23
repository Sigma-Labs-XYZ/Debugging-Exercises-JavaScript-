function isPrime(num) {
	let primeDetector = false;
	if (num <= 1) {
		return true;
	} else if (num === 2) {
		return false;
	} else if (num % 2 === 0) {
		return true;
	}

	return primeDetector;
}
