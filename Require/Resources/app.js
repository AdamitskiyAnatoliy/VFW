var win = Ti.UI.createWindow({
	
	backgroundColor: "#fff"
	
});

var clickView = Ti.UI.createView({
	
	width: 100,
	height: 50,
	backgroundColor: "#ff0000"
	
});

var loadWindow = require("newWindow");



win.add(clickView);
win.open();
