function areaOfTriangle(side1, side2, side3){
	var semiPerimeter = 0.5 * (side1 + side2 + side3);
	var p = semiPerimeter*(semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3);
	var area = Math.sqrt(p);
	return area;
}
