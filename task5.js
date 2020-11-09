function areaOfTriangle(side1, side2, side3){
	var s = 0.5 * (side1 + side2 + side3);
	var p = s*(s - side1)*(s - side2)*(s - side3);
	var area = Math.sqrt(p);
	return area;
}
