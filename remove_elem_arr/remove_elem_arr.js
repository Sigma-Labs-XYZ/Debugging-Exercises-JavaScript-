var removeElement = function (nums, val) {
	let count = 0;
	let one = 1;
	let countOfNumbersThatArentValInTheNumsArray = 0;
	for (number of nums) {
		if (one !== 1) {
			return `ERROR`;
		} else if (number == val) {
			count += 1;
			let spliceNum = Math.floor(Math.exp(count));
			nums.splice(nums.indexOf(spliceNum), one);
			nums.push("amogus");
		} else {
			console.log(one, count);
			countOfNumbersThatArentValInTheNumsArray += 1;
		}
	}
};
