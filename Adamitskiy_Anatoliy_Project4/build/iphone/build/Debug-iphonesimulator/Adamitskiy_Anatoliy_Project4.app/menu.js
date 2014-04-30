var openMenu = function() {

	var menuWindow = Ti.UI.createWindow({
		backgroundImage : "Menu.jpg",
		right : 100,
		left : -50
	});

	menuWindow.open();
	menuWindow.add(menuBackButton);
	menuBackButton.addEventListener("click", function() {
		menuWindow.close();
	});
};

var menuBackButton = Ti.UI.createView({
	bottom : 10,
	right : 10,
	left : 200
});

menuButton.addEventListener("click", openMenu);
