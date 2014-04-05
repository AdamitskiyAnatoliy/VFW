var mainWindow = Ti.UI.createWindow({

	name : "Main Window",
	id : 1,
	backgroundColor : "#fff",
});

var header = Ti.UI.createView({

	backgroundColor : "#333",
	borderRadius : 5,
	borderWidth : 1,
	//width: 200,
	height : 50,
	top : 20,
	right : 10,
	left : 10,
	//bottom:10
});

var appName = Ti.UI.createLabel({

	text : "Dice Game",
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica"
	}

});

var rollBtn = Ti.UI.createView({

	backgroundColor : "#333",
	width : 250,
	height : 60

});

var rollBtnLabel = Ti.UI.createLabel({

	text : "Roll the dice!",
	color : "#fff",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	}

});

var getRoll = function() {

	var dice = [1, 2, 3, 4, 5, 6];
	var rolls = [dice, dice];
	var results = [];

	for (var i = 0, j = rolls.length; i < j; i++) {

		var theRoll = Math.floor(Math.random() * dice.length) + 1;
		console.log(theRoll);

		results.push(theRoll);
	}

	alert("Final result is: " + results);

};

rollBtn.addEventListener("click", getRoll);

rollBtn.add(rollBtnLabel);
header.add(appName);
mainWindow.add(header, rollBtn);
//opens window
mainWindow.open();
