var openCoverFlow = function(e) {

	var coverFlowWindow = Ti.UI.createWindow({
		backgroundColor : "#4b3829",
		title: "Coffee Around the World"
	});
	var navWindow = Ti.UI.iOS.createNavigationWindow({

		window : coverFlowWindow

	});
	navWindow.open();

	var homeButton = Ti.UI.createView({
		height : 50,
		bottom : 0,
		backgroundColor : "#007aff",
		opacity : 1 / 2
	});

	var homeButtonLabel = Ti.UI.createLabel({
		text : "Home",
		font : {
			fontFamily : "noteworthy",
			fontSize : 25
		},
	});

	homeButton.add(homeButtonLabel);
	coverFlowWindow.add(homeButton);

	homeButton.addEventListener("click", function() {
		navWindow.close();
	});

	var view = Ti.UI.iOS.createCoverFlowView({
		images : ["coffee1.jpg", "coffee2.jpg", "coffee3.jpg", "coffee4.jpg", "coffee5.jpg", "coffee6.jpg", "coffee7.jpg"],
		height: 300,
		width: 300,
		top: 75,
		borderRadius : 20
	});
	coverFlowWindow.add(view);
};

extraButton.addEventListener("click", openCoverFlow);
