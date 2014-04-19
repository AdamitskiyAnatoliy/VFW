var windowWidth = Ti.Platform.displayCaps.platformWidth;
var rows = 4;
var numberOfViews = 33;
var spacing = 5;

var newWidth = windowWidth - (spacing * (rows + 1));
var newSize = newWidth / rows;

var mainWindow = Ti.UI.createWindow({

	backgroundColor : "#b1b1b0",
	layout : "horizontal",
	title: "MOTOCROSS IMAGES"

});

var navWindow = Ti.UI.iOS.createNavigationWindow({

	window : mainWindow
	
});

var viewContainer = Ti.UI.createScrollView({

	layout : "horizontal",
	scrollType: "vertical",
	width : windowWidth,
	contentWidth : windowWidth,
	showVerticalScrollIndicator : true,
	backgroundColor : "#b1b1b0",
	height: Ti.Platform.displayCaps.platformHeight - 64

});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
var galleryList = gallery.getDirectoryListing();

mainWindow.add(viewContainer);
navWindow.open();
var newPage = require("mainCode");
