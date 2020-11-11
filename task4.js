function myFunction(number1, number2){
	var sum = number1 + number2;
	var sum1 = sum.toString();
	var i = 0;
	var j = sum1.length;
	var s;
	while(i < j){
		if (sum1[i] == "3"){
			s = true;
		}else if ((3 == number1) || (number2 == 3)) {
		
			s = true;
		}else{
			s =  false;
		}
		i++;
		}
		return s;
}

