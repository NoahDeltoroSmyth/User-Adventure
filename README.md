URL SEARCH PARAMETERS
	* Allows the use of one HTML index rather than multiple.

	* EXAMPLE : ?color=red&id=4

	* APP.JS —> const params = new URLSearchParams(window.location.search);
			const color = params.get(‘color’);

			const mySquare = document.getElementById(‘square’);
			mySquare.classList.add(color);

PLAN FOR QUEST LAB

HOME PAGE

	* HTML
		+ text input for name
		+ buttons for character select
		+ submit button

	* APP.JS
		+ generate a user
		+ store user data in LS
		+ direct to map page

MAP PAGE

	* HTML
		+ List of links
			- link can only be clicked once
			- link contains a URL search parameter with an ID

	* MAP.JS
		+ Import quest-data.js
		+ getElementById (‘map-links’)
		+ make for loop 
			- createElement variable anchor tag
			- a.href = 
			- a.textContent = 
			- append mapLinks.appendChild(a);

QUEST PAGE
	
	*HTML
		+ Title
		+ Description
		+ Image
		+ Choices
		+ Submit button

	* QUEST.JS
		+ Import quest-data.js
		+ Use search parameters to determine which quest to display
			EXAMPLE: const params = new URLSearchParams(window.locations.search)
		+ Update all of the HTML elements using quest data
		+ On submit
			- update user data
			- redirect to MAP

QUEST DATA

	*JS
		+ array of 3 elements containing 
			- ID
			- Title
			- Description
			- Image
			- Choices

