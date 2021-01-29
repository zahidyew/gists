// 1. Two Sum: Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
var twoSum = function (nums, target) {
	 const len = nums.length

	 for (let i = 0; i < len; i++) {
			let x = target - nums[i]
			//console.log(i)

			if (nums.lastIndexOf(x) !== -1 && nums.lastIndexOf(x) !== i) {
				 return [i, nums.lastIndexOf(x)]
			}
	 }
	 return 0
};

// console.log(twoSum([2, 7, 11, 15], 9)) 
// [2,7,11,15], 9
// [3,3], 6
// [3, 2, 4], 6

// 1. Two Sum
var twoSum = function (nums, target) {
	const len = nums.length
	let arry = []

	for (let i = 0; i < len; i++) {
		if (arry[nums[i]] >= 0) {
			return [arry[nums[i]], i]
		}
		let x = target - nums[i]
		arry[x] = i
	}
	return 0
};

//console.log(twoSum([3, 2, 4], 6))

// Shuffle the Array 
var shuffle = function (nums, n) {
	let arry = []

	for (let i = 0; i < n; i++) {
		arry.push(nums[i])
		arry.push(nums[i + n])
	}

	return arry
};

//console.log(shuffle([2, 5, 1, 3, 4, 7], 3))


// Defanging an IP Address
var defangIPaddr = function (address) {
	address = address.replace(/[.]/g, '[.]')

	return address
};

//console.log(defangIPaddr("255.100.50.0"))


/* // Find Common Characters
var commonChars = function (A) {
	 let letters = {}
	 let ans = []
	 
	 for (let i = 0; i < A.length; i++) {
			let x  = A[i].split('')

			x.map(a => {
				 if(!letters[a]) {
						letters[a] = 1
				 }
				 else {
						letters[a] += 1
						if (letters[a] === A.length) {
							 ans.push(a)
							 letters[a] = 0
						}
				 }
			})
	 }
	 //console.log(letters)
	 return ans
};
console.log(commonChars(["bella", "label", "roller"])) */


// Find Common Characters
var commonChars = function (A) {
	const letters = A[0].split('')
	let ans = []

	for (let i in letters) {
		let count = 0
		for (let j = 1; j < A.length; j++) {
			if (A[j].includes(letters[i])) {
				A[j] = A[j].replace(letters[i], '') // remove the letter to avoid finding it again 
				//console.log(A[j])
				count++
			}
		}
		if (count === A.length - 1) {
			ans.push(letters[i])
		}
	}
	return ans
};
//console.log(commonChars(["bella", "label", "roller"])) // "cool","lock","cook" // "bella", "label", "roller"


/* // Day of the Year
var dayOfYear = function (date) {
	 const year = date.substring(0,4)
	 const month = date.substring(5,7)
	 const day = parseInt(date.substring(8))
	 let leapYear = false

	 if ((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0) {
			//console.log('leap year')
			leapYear = true
	 }

	 switch(month) {
			case "01":
				 return day
			case "02":
				 return day + 31
			case "03":
				 return (leapYear ? day + 31 + 29 : day + 31 + 28)
			case "04":
				 return (leapYear ? day + 31 + 29 + 31 : day + 31 + 28 + 31)
			case "05":
				 return (leapYear ? day + 31 + 29 + 31 + 30 : day + 31 + 28 + 31 + 30)
			case "06":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 : day + 31 + 28 + 31 + 30 + 31)
			case "07":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 : day + 31 + 28 + 31 + 30 + 31 + 30)
			case "08":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 + 31 : day + 31 + 28 + 31 + 30 + 31 + 30 + 31)
			case "09":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 : day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31)
			case "10":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 : day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30)
			case "11":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 : day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31)
			case "12":
				 return (leapYear ? day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 : day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 +30)
			default:
				 break
	 }
	 //return day
};
console.log(dayOfYear("2004-03-01")) */

// Day of the Year
var dayOfYear = function (date) {
	const year = parseInt(date.substring(0, 4))
	const month = parseInt(date.substring(5, 7))
	const day = parseInt(date.substring(8))
	const calendar = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
	let leapYear = false
	let ans = 0

	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		//console.log('leap year')
		leapYear = true
	}

	for (let i = 0; i < month; i++) {
		ans = ans + calendar[i]
	}

	leapYear && month > 2 ? ans = ans + day + 1 : ans = ans + day
	return ans
};
//console.log(dayOfYear("2021-02-01"))


// 268. Missing Number 
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing. 
var missingNumber = function (nums) {
	const n = nums.length
	const seqSum = (n * (n + 1)) / 2 // math formula to find the sum of the first n positive integers
	const sum = nums.reduce((a, b) => a + b)

	return seqSum - sum
	// or return ((nums.length * (nums.length + 1)) / 2)  - nums.reduce((a, b) => a + b)

	/* const n = nums.length
	nums = nums.sort((a, b) => a - b)

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i) {
			return i
		}
	}
	return nums.length */
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))