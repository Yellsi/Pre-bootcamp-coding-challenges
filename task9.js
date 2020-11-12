function sumOfNum(){
	var i;
	var remaindersFromMultiplesOf3;
	var remaindersFromMultiplesof5;
	var sum = 0;
	for (i = 0; 1 < 1000; i++)
	{
		remaindersFromMultiplesOf3 = i % 3;
		remaindersFromMultiplesof5 = i % 5;
		if((remaindersFromMultiplesOf3 == 0) || (remaindersFromMultiplesof5 == 0)){
			sum += i;
		}
	}
	return sum;
}
