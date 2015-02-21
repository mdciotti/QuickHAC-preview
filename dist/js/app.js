var baseJSON = {
	"global": {
		"version": "3.0",
		"cycle": 1,
		"studentName": "Gordon Freeman",
		"studentID": "101010"
	},
	"appmenu": [
		{
			"title": "Preferences",
			"url": "#/preferences",
			"icon": "icon-gear-a",
			"external": false
		},
		{
			"title": "Help",
			"url": "https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#question",
			"icon": "icon-help-circled",
			"external": true
		},
		{
			"title": "Report Issue",
			"url": "https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#bug",
			"icon": "icon-alert-circled",
			"external": true
		},
		{
			"title": "Sign Out",
			"url": "#/logout",
			"icon": "icon-log-out",
			"external": false
		}
	],
	"students": [
		{
			"id": "313337",
			"name": "Eli Vance",
			"color": "silver"
		},
		{
			"id": "011235",
			"name": "Alyx Vance",
			"color": "amethyst"
		}
	],
	"actions": [],
	"notifications": [
		{
			"date": "Oct 16",
			"title": "Gordon Freeman",
			"message": "New grade in Combinatorics & Graph Theory",
			"detail": "Scored 98 on &ldquo;Combinatorics Test&rdquo;",
			"route": "student/101010/course/1/cycle/1",
			"icon": "fa fa-arrow-circle-o-up",
			"unread": true
		},
		{
			"date": "Oct 8",
			"title": "Alyx Vance",
			"message": "New grade in Language Arts",
			"detail": "Scored 92 on &ldquo;Persuasive Essay&rdquo;",
			"route": "student/011235/course/1/cycle/1",
			"icon": "fa fa-arrow-circle-o-up",
			"unread": true
		},
		{
			"date": "Oct 2",
			"title": "Gordon Freeman",
			"message": "New grade in Combinatorics & Graph Theory",
			"detail": "Scored 100 on &ldquo;Combinatorics Review&rdquo;",
			"route": "student/101010/course/1/cycle/1",
			"icon": "fa fa-arrow-circle-o-up",
			"unread": false
		},
		{
			"date": "Sep 25",
			"title": "Gordon Freeman",
			"message": "New grade in Combinatorics & Graph Theory",
			"detail": "Scored 90 on &ldquo;Combinatorics and Probability Quiz&rdquo;",
			"route": "student/101010/course/1/cycle/1",
			"icon": "fa fa-arrow-circle-o-up",
			"unread": false
		}
	],
	"views": [
		{
			"title": "Dashboard",
			"route": "dashboard",
			"icon": "icon-stats-bars"
		}
	],
	"courses": [
		{
			"title": "Combinatorics & Graph Theory",
			"period": 1,
			"average": 98
		},
		{
			"title": "Statistics",
			"period": 2,
			"average": 95
		},
		{
			"title": "Software Development",
			"period": 3,
			"average": 96
		},
		{
			"title": "English",
			"period": 4,
			"average": 88
		},
		{
			"title": "Circuits",
			"period": 5,
			"average": 90
		},
		{
			"title": "Physics",
			"period": 6,
			"average": 93
		},
		{
			"title": "Orchestra",
			"period": 7,
			"average": 100
		}
	],
	"banner": {
		"active": true,
		"type": "promotion",
		"url": "https://www.facebook.com/",
		"text": "Let&apos;s keep in touch on Facebook!"
	}
};

function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

var Router = Backbone.Router.extend({

	routes: {
		"login": "login",
		"logout": "logout",
		"welcome/:page": "welcome",
		"student/:studentID/dashboard": "dashboard",
		"preferences": "preferences",
		"preferences/:category": "preferences",
		"student/:studentID/course/:courseID/cycle/:cycle": "course",
		"student/:studentID/gpa": "gpa"
	},

	login: function () {
		var data = deepClone(baseJSON);

		mainView.display("login", data, LoginForm.init);
	},

	logout: function () {
		// Sign out code

		router.navigate("login", {trigger: true, replace: true});
	},

	welcome: function (page) {
		var data = deepClone(baseJSON);

		data["students"] = [
			{
				"id": "101010",
				"name": "Gordon Freeman",
				"school": "Massachssetts Institute of Technology"
			},
			{
				"id": "313337",
				"name": "Eli Vance",
				"school": "Massachssetts Institute of Technology"
			},
			{
				"id": "011235",
				"name": "Alyx Vance",
				"school": "Harvard University"
			}
		];

		mainView.display("welcome", data, Welcome.init);
	},

	dashboard: function (studentID) {
		var data = deepClone(baseJSON);
		data["views"][0]["selected"] = true;
		data["actions"].push({
			"title": "Refresh",
			"icon": "icon-refresh"
		});

		mainView.display("dashboard", data);
	},

	preferences: function (category) {
		var data = deepClone(baseJSON);

		data["appmenu"][0]["selected"] = true;

		data["categories"] = [
			{
				"title": "General",
				"route": "preferences/general",
				"icon": "icon-gear-a",
				"selected": true
			},
			{
				"title": "Students",
				"route": "preferences/students",
				"icon": "icon-person-stalker"
			},
			{
				"title": "Security",
				"route": "preferences/security",
				"icon": "icon-locked"
			},
			{
				"title": "Experimental",
				"route": "preferences/experimental",
				"icon": "icon-beaker"
			},
			{
				"title": "Import & Export",
				"route": "preferences/import-export",
				"icon": "icon-ios7-download"
			},
			{
				"title": "About",
				"route": "preferences/about",
				"icon": "icon-information-circled"
			}
		];

		data["details"] = {
			"sections": [
				{
					"title": "Refresh",
					"icon": "icon-refresh",
					"options": [
						{
							"title": "Refresh Interval",
							"caption": "Time in minutes in between automatic refresh.",
							"type": "number",
							"id": "refresh_interval",
							"value": 60
						}
					]
				},
				{
					"title": "Notifications",
					"icon": "icon-ios7-bell",
					"options": [
						{
							"title": "Consolidate Updates",
							"caption": "Notify once for all grade changes, instead of once for each individual change. This is required if password lock is enabled.",
							"type": "toggle",
							"id": "notif_consolidate",
							"value": false
						},
						{
							"title": "Auto-Hide Duration",
							"caption": "Duration in seconds to display the notification. Set to 0 to disable auto-hide (manual notification dismissal).",
							"type": "number",
							"id": "notif_duration",
							"value": 5
						}
					]
				},
				{
					"title": "Colorization",
					"route": "preferences/colorization",
					"icon": "icon-waterdrop"
				}
			]
		};

		mainView.display("preferences", data);
	},

	course: function (studentID, courseID, cycle) {
		var data = deepClone(baseJSON);

		data["courses"][0]["selected"] = true;
		data["actions"].push({
			"title": "Refresh",
			"icon": "icon-refresh"
		});

		data["details"] = {
			"courseTitle": "Combinatorics & Graph Theory",
			"coursePeriod": 1,
			"teacherName": "Blaise Pascal",
			"teacherEmail": "bpascal@oxford.edu",
			"cycleAverage": 98,
			"courseGoal": 100,
			"cycleIndex": 1,
			"lastUpdated": "42 minutes ago",
			"categories": [
				{
					"title": "Homework",
					"weight": 10,
					"average": 100,
					"assignments": [
						{
							"title": "Factorials Worksheet",
							"dateDue": "Sep 4",
							"dateAssigned": "Aug 28",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Permutations Worksheet",
							"dateDue": "Sep 11",
							"dateAssigned": "Sep 4",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Combinations Worksheet",
							"dateDue": "Sep 18",
							"dateAssigned": "Sep 11",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Combinatorics and Probability Worksheet",
							"dateDue": "Sep 25",
							"dateAssigned": "Sep 18",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Review",
							"dateDue": "Oct 2",
							"dateAssigned": "Sep 25",
							"ptsEarned": 0,
							"ptsPossible": 100,
							"weight": 1,
							"note": "(Missing)",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": true,
								"missing": true
							}
						}
					]
				},
				{
					"title": "Quizzes",
					"weight": 30,
					"average": 95,
					"assignments": [
						{
							"title": "Factorials Quiz",
							"dateDue": "Sep 4",
							"dateAssigned": "Sep 4",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Permutations Quiz",
							"dateDue": "Sep 11",
							"dateAssigned": "Sep 11",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Combinations Quiz",
							"dateDue": "Sep 18",
							"dateAssigned": "Sep 18",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "(Dropped)",
							"flags": {
								"extraCredit": false,
								"dropped": true,
								"hasNote": true,
								"missing": false
							}
						},
						{
							"title": "Combinatorics and Probability Quiz",
							"dateDue": "Sep 25",
							"dateAssigned": "Sep 25",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						},
						{
							"title": "Extra Credit",
							"dateDue": "Oct 2",
							"dateAssigned": "Sep 25",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": true,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						}
					]
				},
				{
					"title": "Tests",
					"weight": 60,
					"average": 98,
					"assignments": [
						{
							"title": "Combinatorics Test",
							"dateDue": "Oct 9",
							"dateAssigned": "Oct 9",
							"ptsEarned": 98,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"flags": {
								"extraCredit": false,
								"dropped": false,
								"hasNote": false,
								"missing": false
							}
						}
					]
				}
			]
		};

		mainView.display("course", data);
	},

	gpa: function (studentID) {
		var data = deepClone(baseJSON);

		// mainView.display("gpa", data);
	}

});

var router = new Router();

var MainView = Backbone.View.extend({

	el: $("#preview"),

	initialize: function () {
		_.bindAll(this, "display");
	},

	display: function (template, context, success) {
		var container = this.el;

		dust.render(template, context, function (err, out) {
			if (err) throw err;

			container.innerHTML = out;
			if (typeof success === "function") success.call(window);
		});
	}

});

var mainView = new MainView();

Backbone.history.start({pushState: false});

if (window.location.hash === "") {
	router.navigate("login", {trigger: true, replace: true});	
}
