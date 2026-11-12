# A guide (work-in-progress)

## What is React

React is an extremely popular HTML/JavaScript library that powers much of the modern web. Its 'language', JSX, is essentially just JavaScript that you can put HTML inside of.

## The render loop

If you've come with experience in HTML/JavaScript, the only thing that will be new to you how the code is run. Instead of a static HTML file and JavaScript that reaches in and changes it, the page is broken down into JavaScript functions that handle logic and *then* build HTML.

Everything starts in `main.tsx`. Functions that you've built magically become HTML components that you then put together to make up the website. For example: `function Card() { return <p>Jack of Queens</p> }` can then be used in another function: `function App() { return <Card></Card> }`. So on and so forth...

Since things like variables would normally be lost with each re-run of these functions, React gives you ways to store them, called "hooks". These always start with `use`. The main one you need to know is `useState`. Say you want to store the player's current cards: `const [cards, setCards] = useState([]);` gives you a getter and a setter for an array of cards.

Take a look at the example in [App.tsx](./src/App.tsx). In practice, apps are often made of many complex layers. Thus, we often split smaller hooks (like `useState`) into larger hooks (such as `useDeck` for the deck of cards). So the render of `App` calls the hook `useDeck`, which calls `useState` to store the cards.

The HTML is where the real magic comes in, however. To display a variable, we simply embed it with curly brackets: `function App() { return <p>Your name is {username}</p> }`. For an example like the cards in a deck, we can loop over the cards:

```jsx
function App() {
  const {cards, takeCard} = useDeck();

  return (
    <div>
      <p>Your cards:</p>
      {cards.map((card) => (
        <p><b>{card.value}</b> of </b>{card.suit}</b></p>
      )}
      <button onClick={() => console.log(takeCard())}>Take Card</button>
    </div>
  );
}
```

The button when clicked calls useCard's addCard, and React detects the change in useState and this function rerenders. In a sense, it's "reactive"... get it?

Guess what - this is all you need to know to get started building the app!

[More to come...]
