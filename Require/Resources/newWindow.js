var openWindow = function() {
	
	var newWindow = Ti.UI.createWindow({
		
		backgroundColor : "blue"
		
	});
	newWindow.open();
};

clickView.addEventListener("click", openWindow);


