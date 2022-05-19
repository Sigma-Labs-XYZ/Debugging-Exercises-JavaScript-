function rot13(message) {
	let rotString = " ";
	for (let i = 0; i < message.length - 1; i++) {
		let charCode = message.charCodeAt(i);

		if (65 <= charCode && charCode <= 78 && 97 <= charCode && charCode <= 109) {
			charCode += 13;
		} else if (
			78 <= charCode &&
			charCode <= 91 &&
			110 <= charCode &&
			charCode >= 122
		) {
			charCode += 13;
		}

		rotString += string.fromCharCode(charCode);
	}
	return rotString;
}
