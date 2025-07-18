Project Overview: Advanced Dictionary App
This is an interactive English-to-English dictionary app that allows users to search for a word and get its meaning, pronunciation, and audio playback. The interface also includes accordion sections for extra learning resources.

Tools & Technologies Used
HTML: Structured content and layout.

CSS (external file assumed): Styled layout, fonts, and components.

JavaScript:

script.js: Handles dictionary API requests.

accordion.js: Enables accordion toggle logic.

FontAwesome: Icons for UI and accordion controls.

Dictionary API: https://dictionaryapi.dev used for word meanings and pronunciation.

JavaScript Development Workflow
script.js (Word Search)
Fetches word data from the API on button click.

Handles both valid and error responses.

Dynamically updates:

title (word)

meaning (definition)

audio (pronunciation)

accordion.js (Accordion Toggle)
Selects all elements with class .accordion.

Adds click event to toggle:

.plusIcon and .minusIcon

.accordionText visibility (using .active class)

Key Features
✔ Real-time word search with API
✔ Displays audio pronunciation if available
✔ Responsive UI with toggleable accordion sections
✔ Modular JS files for separation of concerns
