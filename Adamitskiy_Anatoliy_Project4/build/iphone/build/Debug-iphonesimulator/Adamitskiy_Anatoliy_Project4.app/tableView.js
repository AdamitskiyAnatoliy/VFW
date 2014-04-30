var myList = {

	"coffee" : {

		"head" : "Coffee Styles",
		"flavors" : [{
			"name" : "The Caffé Macchiato",
			"description" : "1 Part Espresso\n1 Part Foamed Milk\nand Shaved Cream",
			"image" : "1.jpg"
		}, {
			"name" : "The Espresso",
			"description" : "1 Shot of Espresso\n0 Parts of Anything",
			"image" : "2.jpg"
		}, {
			"name" : "The Galåo",
			"description" : "1/4 Espresso\n3/4 Steamed Milk",
			"image" : "3.jpg"
		}, {
			"name" : "The Black Coffee",
			"description" : "1 Cup of Coffee\n0 Parts of Anything",
			"image" : "4.jpg"
		}, {
			"name" : "The Americano",
			"description" : "1/3 Espresso\n2/3 Hot Water",
			"image" : "5.jpg"
		}, {
			"name" : "The Caffé Latte",
			"description" : "2/3 Coffee\n1/3 Steamed Milk\nTop with Milk Foam",
			"image" : "6.jpg"
		}, {
			"name" : "The Café Melange",
			"description" : "1 Black Coffee\nTop with Whip Cream",
			"image" : "7.jpg"
		}, {
			"name" : "The Cappucinno",
			"description" : "1 Part Espresso\n1 Part Hot Milk\nSteamed Milk Foam",
			"image" : "8.jpg"
		}, {
			"name" : "The Café Viennois",
			"description" : "1/3 Part Espresso\nTop with Whip Cream",
			"image" : "9.jpg"
		}, {
			"name" : "The Tripplo",
			"description" : "3 Shots of Espresso",
			"image" : "10.jpg"
		}, {
			"name" : "The Iced Coffee",
			"description" : "Chilled Coffee\nServed over Ice",
			"image" : "11.jpg"
		}, {
			"name" : "The Brew",
			"description" : "1 Tea Bag\nCup of Hot Water",
			"image" : "12.jpg"
		}, {
			"name" : "The Flat White",
			"description" : "1 Shot of Espresso\nRest Steamed Milk",
			"image" : "13.jpg"
		}]

	}
};

var flavorsWindow = Ti.UI.createWindow({
	backgroundColor : "#4b3829"
});

var table = Ti.UI.createTableView({

	backgroundColor : "#4b3829",
	top : 80
});

var homeButton = Ti.UI.createView({
	top : 20,
	bottom : 488,
	backgroundColor : "#007aff",
	opacity : 1 / 2
});

var homeButtonLabel = Ti.UI.createLabel({
	text : "Home",
	font : {
		fontFamily : "noteworthy",
		fontSize : 25
	}
});

var backHome = function() {
	flavorsWindow.close();
};

var openTableView = function() {
	flavorsWindow.open();
	flavorsWindow.add(table);
	flavorsWindow.add(homeButton);
};

var mySections = [];

for (var i in myList) {

	var tableSection = Ti.UI.createTableViewSection({

		headerTitle : myList[i].head

	});

	for (var j = 0, k = myList[i].flavors.length; j < k; j++) {

		var tableRow = Ti.UI.createTableViewRow({

			title : myList[i].flavors[j].name,
			desc : myList[i].flavors[j].description,
			image : myList[i].flavors[j].image,
			hasDetail : true

		});

		tableSection.add(tableRow);

	}

	mySections.push(tableSection);

	var tableClick = function(e) {

		var rowClickWindow = Ti.UI.createWindow({
			backgroundColor : "#4b3829",
			title : e.source.title
		});
		var navWindow = Ti.UI.iOS.createNavigationWindow({

			window : rowClickWindow

		});
		var backButton = Ti.UI.createView({
			backgroundColor : "#007aff",
			opacity : 1 / 2,
			height : 50,
			bottom : 0
		});
		var backButtonText = Ti.UI.createLabel({
			text : "Back",
			font : {
				fontFamily : "noteworthy",
				fontSize : 25
			}
		});
		var tableImageView = Ti.UI.createImageView({
			image : e.source.image,
			height : 170,
			width : 170,
			top : 75
		});
		var tableTextView = Ti.UI.createView({
			backgroundColor: "white",
			height: 100,
			bottom: 100,
			width: 170
		});
		var tableTextViewText = Ti.UI.createLabel({
			text: e.source.desc
		});
		
		backButton.addEventListener("click", function() {
			navWindow.close();
		});
		
		tableTextView.add(tableTextViewText);
		backButton.add(backButtonText);
		rowClickWindow.add(backButton, tableImageView, tableTextView);
		navWindow.open();
	};

}

homeButton.addEventListener("click", backHome);
homeButton.add(homeButtonLabel);
table.setData(mySections);
tableViewButton.addEventListener("click", openTableView);
table.addEventListener("click", tableClick);

