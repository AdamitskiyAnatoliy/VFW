var openGallery = function() {
	var galleryPage = Ti.UI.createWindow({
		backgroundColor : "#4b3829",
		title : "Gallery"
	});

	var navWindow = Ti.UI.iOS.createNavigationWindow({

		window : galleryPage

	});

	var images = ["coffee1.jpg", "coffee2.jpg", "coffee3.jpg", "coffee4.jpg", "coffee5.jpg", "coffee6.jpg", "coffee7.jpg"];

	var homeButtonLabel = Ti.UI.createLabel({
		text : "Home",
		font : {
			fontFamily : "noteworthy",
			fontSize : 25
		},
	});

	var homeButton = Ti.UI.createView({
		height : 50,
		bottom : 0,
		backgroundColor : "#007aff",
		opacity : 1 / 2
	});

	homeButton.addEventListener("click", function() {
		navWindow.close();
	});

	var view = Ti.UI.createImageView({
		image : images[0],
		height : 300,
		width : 300,
		top : 50,
		borderRadius : 20,
		backgroundColor : "white"
	});


	var randomButton = Ti.UI.createView({
		height : 50,
		bottom : 75,
		width : 150,
		backgroundColor : "#007aff",
		borderRadius : 20,
		opacity : 1 / 2
	});

	var randomButtonLabel = Ti.UI.createLabel({
		text : "Randomize",
		font : {
			fontFamily : "noteworthy",
			fontSize : 25
		},
	});

	randomButton.addEventListener("click", function() {
		var i = Math.floor(Math.random() * images.length);
		view.image = images[i];

		if (i = i) {
			i++;
		}


	});

	randomButton.add(randomButtonLabel);
	galleryPage.add(homeButton, view, randomButton);
	homeButton.add(homeButtonLabel);
	navWindow.open();

};

galleryButton.addEventListener("click", openGallery);
