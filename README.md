# Duplicate Character Remover

This is a ReactJS app that allows users to input a string and removes duplicate characters from it.

## Screens

---

### Index Screen

The Index screen has an input field and a "Submit" button. Users can input any value in the input field, and clicking on the button will redirect the user to remove_duplicates screen.

If the input field is empty or contains only spaces, the user will be shown an alert asking them to provide a non-empty value. In this scenario, the user will not be redirected to remove_duplicates screen.

### Remove_duplicates screen

The remove_duplicates screen shows each character of the input string as a card on the UI. Each card has the character and a delete icon on top. Clicking on the delete icon deletes all duplicate instances of the chosen character in the string. Only the clicked instance of the character remains on the screen.

Cards for the same characters have the same background color. If there are no more characters with greater than 1 appearance in the string, a success header is rendered.

The app also shows the original string and the new resultant string. A back button is provided to go back to index screen. If the user goes back to index screen, the input field is cleared/empty.

## How to run the app

1.  Clone the repository: `git clone https://github.com/Ehceyn/houseware---frontend-engineering-octernship-Ehceyn.git`
2.  Go to the project directory: `cd app`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm start`
5.  Open [http://localhost:3000](http://localhost:3000/) to view the app in the browser.

## Dependencies

- ReactJS
- Typescript
- react-router-dom
- TailwindCSS
- framer-motion

## Demo

A demo of the app can be found at <https://duplicates-remover.vercel.app/>
