var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var deviceHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	
	backgroundColor: "#fff"
	
});

var newView = Ti.UI.createView({
	
	width: deviceWidth * .25,
	height: 100,
	backgroundColor: "#ff0000",
	left: 10,
	top: 15
});

var osName = Ti.Platform.osname;
var version = Ti.Platform.version;

console.log("Width: " + deviceWidth);
console.log("Height: " + deviceHeight);
console.log("The OS is " + osName + " and the version is " + version);

win.add(newView);
win.open();