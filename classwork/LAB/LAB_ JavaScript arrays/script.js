let nums = [];
let evenNums = [];
let oddNums = [];

function divideArray(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 == 0) {
			evenNums.push(nums[i]);
		} else {
			oddNums.push(nums[i]);
		}
	}

	evenNums.sort(function (a, b) {
		return a - b;
	});
	oddNums.sort(function (a, b) {
		return a - b;
	});

	console.log("Even numbers:");
	if (evenNums.length === 0) {
		console.log("None");
	} else {
		for (let i = 0; i < evenNums.length; i++) {
			console.log(evenNums[i]);
		}
	}
	console.log("Odd numbers:");
	if (oddNums.length === 0) {
		console.log("None");
	} else {
		for (let i = 0; i < oddNums.length; i++) {
			console.log(oddNums[i]);
		}
	}
}

divideArray(nums);
