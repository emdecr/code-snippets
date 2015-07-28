// find all the elements with the class of menu-heading
	//specifically applied to all main h2 elements to be a part of main nav
var menuheadings = document.getElementsByClassName('menu-heading');
// specify ul or ol into which the <li>s will be appended
var mainmenu = document.getElementById('mainmenu');

console.log(menuheadings);

//for each items in the menuheadings array do the following:
for (var i = 0; i < menuheadings.length; i++) {
	// grab the value of h2 - stored in 'headingvalue'
	var headingvalue = menuheadings[i].innerHTML;
	// remove special characters and spaces, and replace them with an underscore
	var plainvalue = headingvalue.replace(/[^A-Z0-9]+/ig, "_"); 
	// convert all uppercase characters to lowercase
	var lowercase = plainvalue.toLowerCase();

	// create a link (<a>)
	var menuLink = document.createElement("A");
		// give said link an href of # + 'lowercase'
        menuLink.setAttribute("href", "#" + lowercase);
        // append the text value of 'headingvalue' into the created <a> element
        menuLink.appendChild(document.createTextNode(headingvalue));

    // create a <li> element
    var listItem = document.createElement("LI");
    	// append 'menulink' (which is an <a>) into the created <li> element
        listItem.appendChild(menuLink);

        // append 'listItem' (which is a <li>) into 'mainmenu' (which is an <ul>)
        mainmenu.appendChild(listItem);
};

