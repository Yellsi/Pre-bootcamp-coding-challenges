function sumOfNum(){
	var i = 1;
	var s;
	var h;
	var sum = 0;
	for (i = 0; 1 < 1000; i++)
	{
		s = i % 3;
		h = i % 5;
		if((s == 0) || (h == 0)){
			sum += i;
		}
	}
	return sum;
}
