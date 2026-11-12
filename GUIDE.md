# A guide (work-in-progress)

## What is React

React is an extremely popular HTML/JavaScript library that powers much of the modern web. Its 'language', JSX, is essentially just JavaScript that you can put HTML inside of.

## The render loop

If you've come with experience in HTML/JavaScript, the only thing that will be new to you how the code is run. Instead of a static HTML file and JavaScript that reaches in and changes it, the page is broken down into JavaScript functions that handle logic and *then* build HTML.

Everything starts in `main.tsx`. Functions that you've built, such as `function App()`, become new HTML components that you then put together. The entire app is essentially just a bunch of JavaScript functions that React magically turns into HTML components.

Since things like variables would normally be lost with each render/frame, React gives you ways to store that state where it gets reused with each call. The main one you need to know is `useState`. Say you want to store the player's current cards: simply add `const [cards, setCards] = useState([]);` - you can now use the cards in the returned HTML (`cards`) or update them, say, when a button is pressed: (`setCards`).

Take a look at the this exact `useState` cards example in [App.tsx](./src/App.tsx) to see what this looks like in practice.

[More to come...]
