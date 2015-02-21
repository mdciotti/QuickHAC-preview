
var Welcome = {
	
	init: function (studentID) {

		document.querySelector(".welcome .panel button").addEventListener("click", function (e) {
			router.navigate("welcome/2", {trigger: true, replace: true});
		}, false);

		var studentNodeList = document.querySelectorAll(".welcome .panel .student-list .student");

		forEachNode(studentNodeList, function (el) {
			el.querySelector("input").addEventListener("change", Welcome.validate, false);
		});

	},

	validate: function (checked) {

		var checkedNodes = document.querySelectorAll(".welcome .panel .student-list .student input:checked");
		var isEmpty = checkedNodes.length == 0;
		var startButton = document.querySelector(".welcome .panel button");
		startButton.disabled = isEmpty;

	}

};
