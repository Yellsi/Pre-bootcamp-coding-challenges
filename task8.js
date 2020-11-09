function toHAndM(num){
	if (num > 60){
		var hours = num / 60
		hours = Math.floor(hours);
		var s = 60 * hours;
		var minutes = num - s;
		if (hours == 1){
			console.log(hours + " hour, "+ minutes + " minutes");
		}else{
			console.log(hours + " hours, " + minutes + " minutes.");
		}
	}else{
		console.log(num + "minutes");
	}
}
