var table = Ti.UI.createTableView({

	backgroundColor : "#f3872a"
});

var tableButton = function() {

	var tableWindow = Ti.UI.createWindow({

		backgroundColor : "#f3872a",
		title : this.title

	});

	var detailText = Ti.UI.createLabel({

		text : this.desc,
		font : {
			fontSize : "18dp",
			fontFamily : "Arial"
		}

	});

	tableWindow.add(detailText);
	navWindow.openWindow(tableWindow);
	tableWindow.add(table);

};

var tablePage = function(event) {

	var tableWindow = Ti.UI.createWindow({

		backgroundColor : "#f3872a",
		title : event.title

	});

	var detailText = Ti.UI.createLabel({

		text : event.desc,
		font : {
			fontSize : "18dp",
			fontFamily : "Arial"
		}

	});

	tableWindow.add(detailText);
	navWindow.openWindow(tableWindow);

};

var mySections = [];

for (var i in file.myList) {

	var tableSection = Ti.UI.createTableViewSection({

		headerTitle : file.myList[i].head,
		footerTitle : file.myList[i].foot

	});

	for (var j = 0, k = file.myList[i].items.length; j < k; j++) {

		var tableRow = Ti.UI.createTableViewRow({

			title : file.myList[i].items[j].name,
			desc : file.myList[i].items[j].description,
			hasDetail : true

		});

		tableSection.add(tableRow);

	}

	mySections.push(tableSection);

}

var osName = Ti.Platform.osname;
if (osName === "iphone") {

	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;

};

table.addEventListener("click", function(event) {

	tablePage(event.source);

});

table.setData(mySections);
tableView.addEventListener("click", tableButton);
