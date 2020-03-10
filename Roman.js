function value(r){ 
    if (r == 'I') 
        return 1; 
    if (r == 'V') 
        return 5; 
    if (r == 'X') 
        return 10; 
    if (r == 'L') 
        return 50; 
    if (r == 'C') 
        return 100; 
    if (r == 'D') 
        return 500; 
    if (r == 'M') 
        return 1000; 
  
    return -1; 
} 

// make toRoman as a private method
const toRoman = Symbol("toRoman");

// make toDecimal as a private method
const toDecimal = Symbol("toDecimal");

class Roman {

	constructor(num){
		if(typeof num === "string"){
			this.roman = num;
			this.decimal = this[toDecimal]();
			this.tempDecimal = this.decimal;
		} else if(typeof num === "number") {
			this.decimal = num;
			this.roman = this[toRoman]();
			this.tempDecimal = this.decimal;
		} else {
			console.log("Invalid Number");
		}
	}

	[toRoman](number) {
		if(!number){
			number = this.tempDecimal
		}
		let roman = "";
		let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
		let sym = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
		let i = 12;
		while(number > 0) {
			let div = number / num[i];
			number = number % num[i];
			while(div-=1){
				roman.concat(sym[i]);
			}
			i-=1;
		}
		return roman;
	}

	[toDecimal](number){
		if(!number){
			number = this.roman;
		} 
		let res = 0;  
		for (let i=0; i<number.length; i++){ 
			let s1 = value(number[i]);
			if(i+1 < number.length){
				let s2 = value(number[i+1]);
				if (s1 >= s2){  
					res = res + s1; 
				} else { 
					res = res + s2 - s1; 
					i++; 
				} 
			} else { 
				res = res + s1;
			} 
		} 
		return res; 
	}

	add(secondRoman){
		if(typeof secondRoman === "number") return this.decimal + secondRoman;
		else if(typeof secondRoman === "string") return this.decimal + this[toDecimal](secondRoman);
		else return this.decimal + secondRoman.decimal;
	}
	
	sub(secondRoman){
		if(typeof secondRoman === "number") return this.decimal - secondRoman;
		else if(typeof secondRoman === "string") return this.decimal - this[toDecimal](secondRoman);
		else return this.decimal - secondRoman.decimal;
	}
	
	mul(secondRoman){
		if(typeof secondRoman === "number") return this.decimal * secondRoman;
		else if(typeof secondRoman === "string") return this.decimal * this[toDecimal](secondRoman);
		else return this.decimal * secondRoman.decimal;
	}
	
	div(secondRoman){
		if(typeof secondRoman === "number") return this.decimal / secondRoman;
		else if(typeof secondRoman === "string") return this.decimal / this[toDecimal](secondRoman);
		else return this.decimal / secondRoman.decimal;
	}
}

module.exports = Roman;