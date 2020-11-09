function comp(str1, str2){
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	var i = 0;
	var s = str1.length;
	var a = [];
	var j = 0;
	var r = str2.length;
	while(i < s)
	{
		while (j < r)
		{

			if (str1[i] == str2[j])
			{
				a.push(str2[j]);
			}
			j++;
		
		}
		i++;
	}
	return a;
}

