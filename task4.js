function ifNumbersHave3(number1, number2){
	var sum = number1 + number2;
	var sum1 = sum.toString();

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
