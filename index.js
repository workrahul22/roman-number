let RomanMapping = {
	'I':1,
	'V':5,
	'X':10,
	'L':50,
	'C':100,
	'D':500,
	'M':1000
}

let order = {
	'M':1,
	'D':2,
	'C':3,
	'L':4,
	'X':5,
	'V':6,
	'I':7
}

let reverseRomanMapping = {
	'1':'I',
	'5':'V',
	'10':'X',
	'50':'L',
	'100':'C',
	'500':'D',
	'1000':'M'
}

var orderCheck = (num) => {
	let lastValue = -Infinity;
	if(num.length === 1)
		return false;
	for(var i=1;i<num.length;i++){
		if(order[num[i]] + 1 === order[num[i+1]])
			continue;
		if(RomanMapping[num[i]] < RomanMapping[num[i+1]])
			return true;
	}
	return false;
}

var toDecimal = (num) => {
	if(typeof num !== 'string')
		return new Error("Input must be a string");
	// Validate the roman string
	for(n of num){
		if(n !== 'I' && n !== 'V' && n !== 'X' && n !== 'L' && n !== 'C' && n !== 'D' && n !== 'M'){
			return new Error("Roman Number is Invalid");
		}
	}

	// Validate the order of the roman character
	if(orderCheck(num))
		return new Error("Roman Number is Invalid");
	// Convert roman number to decimal
	let number = 0;
	for(var i=0;i<num.length;i++){
		if(order[num[i]] + 1 === order[num[i+1]]){
			number += RomanMapping[num[i+1]];
			number -= RomanMapping[num[i]];
			i++;
		}
		else
			number += RomanMapping[num[i]];
	}
	return number;
}

var toRoman = (num) => {
	if(typeof num !== 'number')
		return new Error("Must be a number");
	if(num === 0)
		return new Error("There is nothing defined for 0 in roman number system");
	let number = [];
	while(num>0){
		if(num / 1000 >= 1){
			number.push('M');
			num -= 1000;
		}
		else if(num / 500 >= 1){
			number.push('D');
			num -= 500;
		}
		else if(num / 100 >= 1){
			number.push('C');
			num -= 100;
		}
		else if(num / 50 >= 1){
			number.push('L');
			num -= 50;
		}
		else if(num / 10 >= 1){
			number.push('X');
			num -= 10;
		}
		else if(num / 5 >= 1){
			number.push('V');
			num -= 5;
		}
		else{
			if(num === 1){
				number.push('I');
				num = 0;
			}else{
				number.push('I');
				num -= 1;
			}
		}
		console.log(num);
	}
	return number.join('');
}

var add = (...args) => {
	console.log("Yet to work on");
}

var sub = (num1, num2) => {
	console.log("Yet to work on");
}

var mul = (num1, num2) => {
	console.log("Yet to work on");
}

var div = (num1,num2) => {
	console.log("yet to work on");
}

console.log(toRoman(29));