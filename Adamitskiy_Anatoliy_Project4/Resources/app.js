var mainWindow = Ti.UI.createWindow({
	backgroundImage : "coffeeBean.jpg"
});

var titleView = Ti.UI.createView({
	top : 67,
	bottom : 433,
	left : 10,
	right : 10
});

var title = Ti.UI.createLabel({
	text : "COFFEE",
	font : {
		fontFamily : "noteworthy",
		fontSize : 45
	}
});

var menuButton = Ti.UI.createView({
	left : 10,
	bottom : 10,
	right : 270,
	top : 518
});

var tableViewButton = Ti.UI.createView({
	left : 10,
	right : 10,
	top : 300,
	bottom : 218
});

var tableViewButtonText = Ti.UI.createLabel({
	text : "Flavors",
	font : {
		fontFamily : "noteworthy",
		fontSize : 25
	}
});

var galleryButton = Ti.UI.createView({
	left : 10,
	right : 10,
	top : 350,
	bottom : 168
});

var galleryButtonText = Ti.UI.createLabel({
	text : "Gallery",
	font : {
		fontFamily : "noteworthy",
		fontSize : 25
	}
});

var extraButton = Ti.UI.createView({
	left : 10,
	right : 10,
	top : 400,
	bottom : 118
});

var extraButtonText = Ti.UI.createLabel({
	text : "CoverFlow",
	font : {
		fontFamily : "noteworthy",
		fontSize : 25
	}
});

var newPage1 = require("tableView");
var newPage2 = require("galleryView");
var newPage3 = require("coverflow");
var newPage4 = require("menu");

extraButton.add(extraButtonText);
galleryButton.add(galleryButtonText);
tableViewButton.add(tableViewButtonText);
titleView.add(title);
mainWindow.add(titleView, menuButton, tableViewButton, galleryButton, extraButton);
mainWindow.open(); 