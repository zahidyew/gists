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

// 1470. Shuffle the Array : Return the array in the form [x1,y1,x2,y2,...,xn,yn]
var shuffle = function (nums, n) {
	let arry = []

	for (let i = 0; i < n; i++) {
		arry.push(nums[i])
		arry.push(nums[i + n])
	}

	return arry
};

//console.log(shuffle([2, 5, 1, 3, 4, 7], 3))


// 1108. Defanging an IP Address : A defanged IP address replaces every period "." with "[.]"
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


// 1002. Find Common Characters: return a list of all characters that show up 
// in all strings within the list (including duplicates)
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

// 1154. Day of the Year: return the day number of the year.
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
//console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))


// 748. Shortest Completing Word: Return the shortest completing word in words
var shortestCompletingWord = function (licensePlate, words) {
	//licensePlate = licensePlate.toLowerCase()
	words = words.sort((a, b) => a.length - b.length) // sort the words in ASC order to simplify things 
	const letters = licensePlate.toLowerCase().match(/[a-z]/gi)

	if (letters.length === 1) {
		// return the shortest word that contains the letter and that appears the earliest
		return words.find(w => w.includes(letters))
	}
	else {
		let count = Array(words.length).fill(0)
		let wordsClone = [...words]

		for (let i in words) {
			for (let j in letters) {
				if (words[i].includes(letters[j])) {
					count[i]++
					words[i] = words[i].replace(letters[j], "")
				}
			}
			if (count[i] === letters.length) {
				// the word has all the letters, so return it immediately
				return wordsClone[i]
			}
		}
		// if we cannot find a word that matches all the letters, then find the one that has 
		// the most matches & also the shortest word
		return wordsClone[count.indexOf(Math.max(...count))]
		// return count
	}
};
//console.log(shortestCompletingWord("iMSlpe4", words = ["claim", "consumer", "student", "camera", "public", "never", "wonder", "simple", "thought", "use"]))
// "1s3 456", words = ["looks","pest","stew","show"]
// "1s3 PSt", ["step", "steps", "stripe", "stepple"]
// "Ah71752" ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
// "OgEu755" ["enough", "these", "play", "wide", "wonder", "box", "arrive", "money", "tax", "thus"]
// "iMSlpe4" ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]


// 696. Count Binary Substrings
// count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
var countBinarySubstrings = function (s) {
	//2,4, multiples of 2s only

	return s
};
//console.log(countBinarySubstrings("00110011"))


// 1652. Defuse the Bomb
var decrypt = function (code, k) {
	const n = code.length

	if (k === 0) {
		return code = Array(n).fill(0)
	}
	else if (k > 0) {
		let clone = [...code]
		let ans = Array(n).fill(0)

		for (let i = 0; i < k; i++) {
			clone.push(code[i])
		}
		
		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j <= i + k; j++) {
				ans[i] = ans[i] + clone[j]
			}
		}
		return ans
	}
	else {
		let clone = []
		let ans = Array(n).fill(0)
		k = Math.abs(k)

		for (let i = n - k; i < n; i++) {
			clone.push(code[i])
		}

		clone = clone.concat(code)

		for (let i = 0; i < n; i++) {
			for (let j = i; j < i + k; j++) {
				ans[i] = ans[i] + clone[j]
			}
		}
		console.log(clone)
		return ans
	}
};
//console.log(decrypt([2, 4, 9, 3], -3))


// 1331. Rank Transform of an Array
var arrayRankTransform = function (arr) {
	/* const n = arr.length
	const set = new Set(arr)
	let clone = [...set]
	clone = [...clone.sort((a, b) => a - b)]
	let ans = []

	for (let i = 0; i < n; i++) {
		ans[i] = clone.indexOf(arr[i]) + 1
	}

	return ans */

	let map = new Map() // use Map to map number to its rank (faster than using Object)
	const set = new Set(arr) // use Set to remove duplicates
	const sorted = [...set].sort((a, b) => a - b) // sort the numbers in ASC order
	let ans = []

	// map each number to its respective rank. Rank starts at 1, so i + 1
	for (let i = 0 ; i < sorted.length; i++) {
		map.set(sorted[i], i + 1)
	}

	// assign each number in original array its rank
	for (let i = 0; i < arr.length; i++) {
		ans[i] = map.get(arr[i])
	}

	//console.log(map) //output is: Map { 10 => 1, 20 => 2, 30 => 3, 40 => 4 }
	return ans
};
//console.log(arrayRankTransform([40, 10, 20, 30, 10]))


// 1185. Day of the Week
var dayOfTheWeek = function (day, month, year) {
	/* const days = new Map([
		[0, 'Sunday'],
		[1, 'Monday'],
		[2, 'Tuesday'],
		[3, 'Wednesday'],
		[4, 'Thursday'],
		[5, 'Friday'],
		[6, 'Saturday'],
	])
	const date = new Date(`${month} ${day}, ${year}`)
	const myDay = date.getDay()

	return days.get(myDay) */

	const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const date = new Date(`${month} ${day}, ${year}`)
	const myDay = date.getDay()

	return daysInWeek[myDay]

	/* const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	return daysInWeek[new Date(`${month} ${day}, ${year}`).getDay()] */
};
//console.log(dayOfTheWeek(31, 8, 2019))


// 1103. Distribute Candies to People
var distributeCandies = function (candies, num_people) {
	let ans = Array(num_people).fill(0)
	let c = 1

	for (let i = 0; i < num_people; i++) {
		if (c > candies) {
			// when we have less candies than we should give
			// give all remaining candies
			ans[i] = ans[i] + candies
			candies = 0
		}
		else {
			ans[i] = ans[i] + c
			candies = candies - c
		}	
		
		if (candies !== 0 && i === num_people - 1) {
			// reset loop when there are still candies left
			i = -1
		}
		c++
	}
	return ans
};
//console.log(distributeCandies(10, 3))


// 1394. Find Lucky Integer in an Array
var findLucky = function (arr) {
	let ans = []
	const n = arr.length
	let map = new Map()

	for (let i in arr) {
		if (!map.has(arr[i])) {
			map.set(arr[i], 1)
		}
		else {
			let c = map.get(arr[i])
			map.set(arr[i], ++c)
		}
	}

	for (let [key, value] of map) {
		if (key === value) {
			ans.push(key)
		}
	}

	if (ans.length === 0) {
		return -1
	}
	else {
		return Math.max(...ans)		
	}
};
//console.log(findLucky([2,2,3,4]))

/* const freq = new Array(500).fill(0)
arr.forEach(e => { ++freq[e] })
return freq.reduce((_, e, i) => {
	if (e === i) return e
	return _
}) || -1 */


// 1437. Check If All 1's Are at Least Length K Places Away
var kLengthApart = function (nums, k) {
	/* let d = 0
	let start = false

	for (let i in nums) {
		console.log(i)
		if (nums[i] === 1) {
			if (start) {
				if (d < k) {
					return false
				}

				d = 0
			}
			else {
				start = true
			}
		}
		else {
			d++
		}
	}

	return true */
	
	let d = k

	for (let i in nums) {
		if (nums[i] === 1) {
			if (d < k) {
				return false
			}
			d = 0	
		}
		else {
			d++
		}
	}
	return true
};
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2))

