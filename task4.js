function ifNumbersHave3(number1, number2){
	var sum = number1 + number2;
	var sum1 = sum.toString();
	var i = 0;
	var j = sum1.length;
	var s;

	if (sum1.indexOf('3') > -1 )
	{
		return true;
	}
	else if ((3 == number1) || (number2 == 3)) {
		return true;
	}else{
		return false;
	}
}
