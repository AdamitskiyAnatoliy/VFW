var mainWindow = Ti.UI.createWindow({
	
	name: "Main Window",
	id: 1,
	backgroundColor: "#fff", 
});

var header = Ti.UI.createView({
	
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	//width: 200,
	height: 50,
	top: 20,
	right: 10,
	left: 10,
	//bottom:10
});

var appName = Ti.UI.createLabel({
	
	text: "Dice Game",
	color: "#fff",
	font: {fontSize : "20dp", fontFamily: "Helvetica"}
	
});

header.add(appName);
mainWindow.add(header);
//opens window
mainWindow.open();
