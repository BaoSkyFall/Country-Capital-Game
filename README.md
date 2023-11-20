## Game Description 
In the game, the player needs to match a country to its capital by clicking on appropriate buttons 
1. Your component should receive a data property in the following format (an object with the corre answer, where the keys are the names of the countries :Ind the value of each key is the capital of country) : 
0CountryCapitalGame data—(f Germany: "Berlin", Azerbaijan: "Baku" 37 1> 
2. A button should be displayed for each country and each capital. So, the example above would ret buttons: Germany , Berlin, Azerbaijan and Baku. 
3. The buttons should be displayed in a random order. 
4. Clicking a button should set its background color to blue (4009Bff) 
5. Clicking another button should: • remove both buttons if a correct country and capital pair has been selected; • set the background color of both buttons to red (\*rreeee) if a wrong pair has been selected. 
6. Assuming the previously selected pair was wrong, clicking another button should restore the default background color of the wrong pair and set the bac kground color of the clicked button to blue (as in point 4) 
7. When there are no buttons left, display a message: Congratulations. 
8. Export your component as the default export.

# Angular Country Capital Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
1. Run `npx @angular/cli new ng-country-capital --minimal --defaults --standalone --routing=false`
2. Run `npm i -D tailwindcss postcss autoprefixer`
3.  Run `npm i -D prettier-plugin-tailwindcss prettier-plugin-organize-imports prettier`
4.  Run `npx tailwindcss init -p`
5.  In `tailwind.config.js` add this `content: ['./src/**/*.{html,ts}']`
6.  Add prettier config in `package.json` with this code `"prettier": {
		"singleQuote": true,
		"useTabs": true,
		"htmlWhitespaceSensitivity": "ignore",
		"plugins": [
			"prettier-plugin-organize-imports",
			"prettier-plugin-tailwindcss"
		]
	}`
7. Run `npx prettier --write .`
8. Set up tailwind css in `styles.css` by adding: `@tailwind base;@tailwind components;@tailwind utilities;`


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


