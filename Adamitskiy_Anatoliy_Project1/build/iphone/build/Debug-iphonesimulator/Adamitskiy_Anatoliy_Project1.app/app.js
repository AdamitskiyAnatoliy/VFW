//	Anatoliy Adamitskiy
//	Visual Frameworks

var flavors = ["Vanilla", "Chocolate", "Mint Chocolate Chip", "Strawberry", "Cookies and Cream", "Rocky Road"];

var mainWindow = Ti.UI.createWindow({
	
	name: "Main Window",
	id: 1,
	backgroundColor: "#94ffd4", 
});

var header = Ti.UI.createView({
	
	backgroundColor: "#fff",
	borderRadius: 5,
	borderWidth: 1,
	height: 50,
	top: 20,
	right: 10,
	left: 10,

});

var title = Ti.UI.createLabel({
	
	text: "Ice Cream Flavors",
	color: "#000",
	font: {fontSize : "22dp", fontFamily: "Chalkduster"}
	
});

var mainView = Ti.UI.createView({
	
	backgroundColor: "#94ffd4",
	borderRadius: 5,
	borderWidth: 1,
	height: 415,
	top: 80,
	right: 10,
	left: 10,
});

var mainText = Ti.UI.createLabel({
	
	text: flavors[0],
	color: "#000",
	font: {fontSize: "22dp", fontFamily: "Chalkduster"}
	
});
	


var previousButton = Ti.UI.createView({
	
	backgroundColor: "#fff",
	borderRadius: 5,
	borderWidth: 1,
	height: 50,
	width: 140,
	top: 505,
	right: 10,
	left: 10,
});

var nextButton = Ti.UI.createView({
	
	backgroundColor: "#fff",
	borderRadius: 5,
	borderWidth: 1,
	height: 50,
	width: 140,
	top: 505,
	left: 170,
	right: 10,
	
});

var nextLabel = Ti.UI.createLabel({
	
	text: "Next",
	color: "#000",
	font: {fontSize : "22dp", fontFamily: "Chalkduster"}
	
});

var previousLabel = Ti.UI.createLabel({
	
	text: "Previous",
	color: "#000",
	font: {fontSize : "22dp", fontFamily: "Chalkduster"}
	
});

var loadWindow = require("iceCream");


mainView.add(mainText);
previousButton.add(previousLabel);
nextButton.add(nextLabel);
header.add(title);
mainWindow.add(header, mainView, previousButton, nextButton);
mainWindow.open();
