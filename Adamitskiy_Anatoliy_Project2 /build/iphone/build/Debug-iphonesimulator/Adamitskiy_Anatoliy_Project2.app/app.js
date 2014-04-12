var file = require("data");

var mainWindow = Ti.UI.createWindow({

	backgroundColor : "#f3872a",
	title : "DESPICABLE ME",
	backgroundImage : "minion.png"

});

var navWindow = Ti.UI.iOS.createNavigationWindow({

	window : mainWindow

});

var tableView = Ti.UI.createView({

	backgroundColor : "#383838",
	borderRadius : 200,
	borderWidth : 1,
	height : 100,
	width : 300,
	top : 300

});

var listView = Ti.UI.createView({

	backgroundColor : "#383838",
	borderRadius : 200,
	borderWidth : 1,
	height : 100,
	width : 300,
	top : 400

});

var listLabel = Ti.UI.createLabel({

	text : "List View",
	font : {
		fontSize : "18dp",
		fontFamily : "chalkduster"
	},
	color : "white"

});

var tableLabel = Ti.UI.createLabel({

	text : "Table View",
	font : {
		fontSize : "18dp",
		fontFamily : "chalkduster"
	},
	color : "white"

});

var listViewPage = require("listView1");
var tableViewPage = require("tableView");

listView.add(listLabel);
tableView.add(tableLabel);
mainWindow.add(tableView, listView);
navWindow.open();
