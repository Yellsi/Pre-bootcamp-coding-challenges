function printVow(word){
	word = word.toLowerCase();
	var lengthOfWord = word.length;
	var i = 0;
	var vowelsInWord = [];
	while (i < lengthOfWord)
	{
		if ((word[i] == "a")|| (word[i] == "e")|| (word[i] == "i") || (word[i] =="o") || (word[i] == "u"))
		{
			vowelsInWord.push(word[i]);
		}
		i++;
	}
	return vowelsInWord;
}


