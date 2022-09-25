Cat Facts
Scenario
A website built in Angular using CSS or your preferred framework which displays cat facts to the user.
This site should consist of two or more pages.
Page 1 will have some rules which you should abide by.
Layout
Create a navbar which contains a logo on the far left and a title of the website on the far right. The logo and title can of your choice.
Page 1
• Create a cat fact array
• Create a header and a button
• The header and the button should be as far apart as possible, see the example below
• When the page initialises call the API https://meowfacts.herokuapp.com?count=6
• Transform the data from the API into an array of objects with the following data structure
   CatId should be the current count of cats plus the index of the CatFact should be the fact from the API
• Use a combination of RxJs operators and ES5/ES6 functions to transform the data
• No for loops
• Store the result into cat fact array
• Display the cat facts in grid in HTML which are tracked by their catId
• The grid should be its own component
• One way data binding used for the component
• When the button is pressed, it calls the same API as before
      https://meowfacts.herokuapp.com?count=6
• A link to a second page in the app
Page 2
• A link back to page 1
• This can consist of any skills you want to show off. If you would rather refine page 1 then
that’s fine.
Bonus Points
• Use pure CSS/SCSS or Tailwind
• Using RxJs create a way to stop users clicking the button too many times in a brief period
current cat
 
• Create an “order by descending” button which orders the cat facts in descending order based upon their id using a pipe
• A search box which lets users search the existing catFacts array and filters the results based upon their criteria. An empty search box should return all results
• If invited to an interview, any knowledge on RxJs, NgRx/Redux and immutability would be beneficial
