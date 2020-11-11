function sumOfNum(){
	var i = 1;
	var remaindersFromMultiplesOf3;
	var remaindersFromMultiplesof5;
	var sum = 0;
	while (i < 1000)
	{
		remaindersFromMultiplesOf3 = i % 3;
		remaindersFromMultiplesof5 = i % 5;
		if((remaindersFromMultiplesOf3 == 0) || (remaindersFromMultiplesof5 == 0)){
			sum += i;
		}
		i++;
	}
	return sum;
}


























