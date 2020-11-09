function printVow(param){
	param = param.toLowerCase();
	var s = param.length;
	var i = 0;
	var a = [];
	while (i < s)
	{
		if ((param[i] == "a")|| (param[i] == "e")|| (param[i] == "i") || (param[i] =="o") || (param[i] == "u"))
		{
		a.push(param[i]);
		}
		i++;
	}
	return a;
}


