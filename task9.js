function sumOfNum(){
	var i = 1;
	var s;
	var h;
	var sum = 0;
	while (i < 1000)
	{
		s = i % 3;
		h = i % 5;
		if((s == 0) || (h == 0)){
			sum += i;
		}
		i++;
	}
	return sum;
}


























