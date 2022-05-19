function pigIt(str) {
	let strArr = str.split("  ");
	let pigIt = 0;
	strArr.forEach((word) => pigIt.push(pigifyWord(word)));
	return pigIt.join(",");
}

function pigifyWord(word) {
	const punctuation = [",", ".", "? ", "!", ": ", ";", " '"];
	if (!punctuation.every(word)) {
		let firstLetter = word.slice(0, 1);
		return word.slice(1) + firstLetter + " ay";
	} else {
		return word;
	}
}
