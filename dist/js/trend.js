window.onload = function () {

	var flatUIColors = [
		"#ffffff", // ghost
		"#1abc9c", // turquoise
		"#2ecc71", // emerald
		"#3498db", // peter river
		"#9b59b6", // amethyst
		"#34495e", // wet asphalt
		"#f1c40f", // sun flower
		"#e67e22", // carrot
		"#e74c3c", // alazarin
		"#ecf0f1", // clouds
		"#95a5a6"  // concrete
	];

	var grades = [
		[85, 90, 93, 80, 82, 87],
		[100, 99, 99, 97, 100, 97],
		[90, 84, 78, 88, 88, 90],
		[92, 84, 78, 88, 88, 90],
	];

	var xValues = grades.map(function () {
		return [0, 1, 2, 3, 4, 5];
	});

};
