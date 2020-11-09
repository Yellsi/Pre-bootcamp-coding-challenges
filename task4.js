function myFunction(param1, param2){
	var sum = param1 + param2;
	var sum1 = sum.toString();
	var i = 0;
	var j = sum1.length;
	var s;
	while(i < j){
		if (sum1[i] == "3"){
			s = true;
		}else if ((3 == param1) || (param2 == 3)) {
		
			s = true;
		}else{
			s =  false;
		}
		i++;
		}
		return s;
}

