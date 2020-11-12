function toHoursAndMinutes(num){
	if (num >= 60){
		var hours = num / 60;
		hours = Math.floor(hours);
		var s = 60 * hours;
		var minutes = num - s;
		var j;
		var h;
		if (hours == 1){
			h = hours + " hour ";
		}else{
			h = hours + " hours ";
		} 

		if (minutes > 1){
			j = minutes + " minutes";
		}else if (minutes == 1){
			j = minutes + " minute";
		}
		else{
			j = "";
		}
		console.log(h + j);
	}else{
		console.log(num + " minutes");
	}
		

}
toHoursAndMinutes(58);
