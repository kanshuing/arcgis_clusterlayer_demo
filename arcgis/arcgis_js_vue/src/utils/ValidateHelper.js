export function isvalidUsername(str) {
	// const valid_map = ['admin', 'editor']
	// return valid_map.indexOf(str.trim()) >= 0
	return true;
}

/* 合法uri*/
export function validateURL(textval) {
	const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

/* 大小写字母*/
export function validateAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

/* 是否手机号码或者固话*/
export function validatePhoneTwo(rule, value, callback) {
	const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;;
	if(value == '' || value == undefined || value == null) {
		callback();
	} else {
		if((!reg.test(value)) && value != '') {
			callback(new Error('请输入正确的电话号码或者固话号码'));
		} else {
			callback();
		}
	}
}
/* 是否固话*/
export function validateTelphone(rule, value, callback) {
	const reg = /0\d{2}-\d{7,8}/;
	if(value == '' || value == undefined || value == null) {
		callback();
	} else {
		if((!reg.test(value)) && value != '') {
			callback(new Error('请输入正确的固话（格式：区号+号码,如010-1234567）'));
		} else {
			callback();
		}
	}
}
/* 是否手机号码*/
export function validatePhone(rule, value, callback) {
	const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(value == '' || value == undefined || value == null) {
		callback();
	} else {
		if((!reg.test(value)) && value != '') {
			callback(new Error('请输入正确的电话号码'));
		} else {
			callback();
		}
	}
}
/* 是否身份证号码*/
export function validateIdNo(rule, value, callback) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(value == '' || value == undefined || value == null) {
		callback();
	} else {
		if((!reg.test(value)) && value != '') {
			callback(new Error('请输入正确的身份证号码'));
		} else {
			callback();
		}
	}
}

/*验证内容是否有特殊字符*/
export function hasSpecialCharacters(rule, value, callback) {
	//不过滤中文引号，破折号，括号，冒号；增加英文引号过滤
	const reg = new RegExp("[`~!@#$^&*()=|{}':;',\"\\[\\].<>《》/?~！@#￥……&*|{}【】’‘；'。，、？]")
	//const reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") 
	if(reg.test(value)) {
		callback(new Error('不能含有特殊字符'))
	} else {
		callback()
	}
}

/*
 * 验证用户名
 * 验证内容是否英文数字以及下划线*/
export function validateUserName(rule, value, callback) {
	const reg = /^[_a-zA-Z0-9]+$/;
	if(value == '' || value == undefined || value == null) {
		callback();
	} else {
		if(!reg.test(value)) {
			callback(new Error('仅由英文字母，数字以及下划线组成'));
		} else {
			callback();
		}
	}
}

//验证数字输入框最大数值,32767
export function checkMaxVal(rule, value, callback) {
	if(value < 0 || value > 32767) {
		callback(new Error('请输入[0,32767]之间的数字'));
	} else {
		callback();
	}
}

// 验证是否整数
export function isInteger(rule, value, callback) {
	if(!value) {
		callback();
	} else {
		if(!Number(value)) {
			callback(new Error('请输入正整数'));
		} else {
			const re = /^[0-9]*[1-9][0-9]*$/;
			const rsCheck = re.test(value);
			if(!rsCheck) {
				callback(new Error('请输入正整数'));
			} else {
				if(value > 2147483647){
					callback(new Error('数字过大，不能大于2,147,483,647'));
				}
				callback();
			}
		}
	}
}
//验证数字，不超过两位小数
export function noMoreThanTwoDecimals(rule, value, callback) {
	if(!value) {
		callback();
	} else {
		if(value.length > 30) {
			callback(new Error('数字过大，总位数不超过30位'))
		}
		const reg = /^\d{1,}\.{0,1}(\d{1,2})?$/
		if(!reg.test(value)) {
			callback(new Error('请输入数字且小数位不超过2位'))
		} else {
			callback()
		}
	}
}