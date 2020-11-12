function toHoursAndMinutes(num){
	if (num >= 60){
		var hours = num / 60
		hours = Math.floor(hours);
		var s = 60 * hours;
		var minutes = num - s;
		var minutesOutput;
		var hoursOutput;
		if (hours == 1){
			hoursOutput = hours + " hour ";
		}else{
			hoursOutput = hours + " hours ";
		} 

		if (minutes > 1){
			minutesOutput = minutes + " minutes";
		}else if (minutes == 1){
			minutesOutput = minutes + " minute"
			console.log(hours + " hours, " + minutes + " minutes");
		}
		else{
			minutesOutput = "";
		}
		console.log(hoursOutput + minutesOutput);
	}else{
		console.log(num + " minutes");
	}
		

}
toHoursAndMinutes(61);
