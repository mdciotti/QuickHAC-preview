
var LoginForm = {

	forgotPasswordURL: {
		"RRISD": "https://accesscenter.roundrockisd.org/homeaccess/Register/ForgotCredentials.aspx",
		"AISD": "https://gradespeed.austinisd.org/pc/ForgotPW.aspx?DistrictID=227901"
	},

	// Initialize login panel
	init: function () {
		var form = document.forms["login"];
		form["username"].addEventListener("input", LoginForm.validate.bind(null, form), false);
		form["password"].addEventListener("input", LoginForm.validate.bind(null, form), false);
		// form["id"].addEventListener("input", LoginForm.validate.bind(null, form), false);

		forEachNode(document.querySelectorAll(".split-button-group input"), function (el) {
			el.addEventListener("change", function (e) {

				var district = el.value;
				var username = form["username"].value;
				var password = form["password"].value;
				// var id = form["id"].value;

				// Focus next empty input field
				if (username === "") {
					form["username"].focus();
				} else if (password === "") {
					form["password"].focus();
				// } else if (id === "") {
					// form["id"].focus();
				} else {
					form.querySelector("button").focus();
				}

				// Change forgot password link
				var forgotPasswordLink = form.querySelector("a.forgot-password");

				if (LoginForm.forgotPasswordURL.hasOwnProperty(district)) {
					forgotPasswordLink.setAttribute("href", LoginForm.forgotPasswordURL[district]);
				}

			}, false);
		});

		form.addEventListener("submit", function (e) {

			// Prevent form from changing page
			e.preventDefault();

			// Disallow further input
			LoginForm.disable(form);

			// Placeholder server success
			// var success = form["username"].value === "admin" && form["password"].value === "abc" && form["id"].value === "123456";
			var success = form["username"].value === "admin" && form["password"].value === "abc";

			// Placeholder server response
			setTimeout(LoginForm.responseHandler.bind(window, !success, form), success ? 1000 : 3000);
			
		}, false);
	},

	// Disable form
	disable: function (form) {
		form.classList.add("busy");
		forEachNode(form.querySelectorAll(".split-button-group input"), function (el) {
			el.disabled = true;
		});
		form["username"].disabled = true;
		form["password"].disabled = true;
		// form["id"].disabled = true;
		form.querySelector("button").disabled = true;
	},

	// Enable form
	enable: function (form) {
		form.classList.remove("busy");
		forEachNode(form.querySelectorAll(".split-button-group input"), function (el) {
			el.disabled = false;
		});
		form["username"].disabled = false;
		form["password"].disabled = false;
		// form["id"].disabled = false;
		form.querySelector("button").disabled = false;
	},

	// What to do with the login response
	responseHandler: function (error, form) {
		if (error) {
			// Error while logging in
			// Allow input
			LoginForm.enable(form);
			form.classList.add("invalid");
			setTimeout(function () {
				form.classList.remove("invalid");
			}, 3000);
			console.error("Unable to log in.");
			return;
		}
		// Login succeeded
		// Setup students
		// Navigate to welcome/setup screen
		router.navigate("welcome/1", {trigger: true, replace: true});
	},

	// Check to see if credentials are of a valid format
	validate: function (form) {
		// var ID_isNumeric = !form["id"].validity.patternMismatch;
		// var ID_isLongEnough = form["id"].value.length >= 6;
		// var ID_isValid;
		var button = form.querySelector("button");

		// If ID entered is numeric
		// if (ID_isNumeric) {
		// 	// Do not display it as invalid
		// 	form["id"].classList.remove("invalid");
		// 	// Validate only if ID is long enough
		// 	ID_isValid = ID_isLongEnough;
		// } else {
		// 	// ID is not numeric
		// 	// Display ID as invalid
		// 	form["id"].classList.add("invalid");
		// 	// Do not validate
		// 	ID_isValid = false;
		// }

		// if (form["username"].checkValidity() && form["password"].checkValidity() && ID_isValid) {
		if (form["username"].checkValidity() && form["password"].checkValidity()) {
			// Display submit button
			button.disabled = false;
		} else {
			// Hide submit button
			button.disabled = true;
		}
	}
};
