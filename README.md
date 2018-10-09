# FeedReader Testing Project

A simple project that practices testing on a feedreader.

## Installation 

To use program: 

1. Clone or download zip file to computer.

2. Open the html file in the folder to see testing page.

## Directions

The main tests for this feedreader are:

* The first test checks to make sure the allFeeds variable is defined and bigger than zero.

* The second test loops through all the feeds to make sure they have URL defined and that it's not empty.

* The third test loops through all the feeds to make sure it has a name defined and not empty.

* The fourth test checks to make sure that the menu is hidden by default.

* The fifth test checks to make sure that the menu changes visibility when the menu icon is clicked.

* The sixth test checks to make sure that there is at least one entry element in the .feed container when the loadFeed() function is called and finishes its work.

* The seventh and final test checks to make sure the content on the page actually changes when a new feed is loaded.

## Dependencies

* HTML
* Javascript
* Jasmine 3.0.0