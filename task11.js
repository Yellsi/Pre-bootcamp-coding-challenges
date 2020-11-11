function wordCompare(str1, str2){
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	var i = 0;
	var lengthOfFirstWord = str1.length;
	var commonCharacters = [];
	var j = 0;
	var lengthOfSecondWord = str2.length;
	while(i < lengthOfFirstWord)
	{
		while (j < lengthOfSecondWord)
		{

			if (str1[i] == str2[j])
			{
				commonCharacters.push(str2[j]);
			}
			j++;
		
		}
		i++;
	}
	return commonCharacters;
}