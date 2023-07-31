// App.jsx
import React from 'react';
import './App.css';
import Card from './Card';

const cardData = [
  { value: 1, img: './cards/ace_of_spades.svg'},
  { value: 2, img: './cards/2_of_spades.svg'},
  { value: 3, img: './cards/3_of_spades.svg'},
  { value: 4, img: './cards/4_of_spades.svg'},
  { value: 5, img: './cards/5_of_spades.svg'},
  { value: 6, img: './cards/6_of_spades.svg'},
  { value: 7, img: './cards/7_of_spades.svg'},
  { value: 8, img: './cards/8_of_spades.svg'},
  { value: 9, img: './cards/9_of_spades.svg'},
  { value: 10, img: './cards/10_of_spades.svg'},
  { value: 10, img: './cards/jack_of_spades2.svg'},
  { value: 10, img: './cards/queen_of_spades2.svg'},
  { value: 10, img: './cards/king_of_spades2.svg'},
  { value: 1, img: './cards/ace_of_clubs.svg'},
  { value: 2, img: './cards/2_of_clubs.svg'},
  { value: 3, img: './cards/3_of_clubs.svg'},
  { value: 4, img: './cards/4_of_clubs.svg'},
  { value: 5, img: './cards/5_of_clubs.svg'},
  { value: 6, img: './cards/6_of_clubs.svg'},
  { value: 7, img: './cards/7_of_clubs.svg'},
  { value: 8, img: './cards/8_of_clubs.svg'},
  { value: 9, img: './cards/9_of_clubs.svg'},
  { value: 10, img: './cards/10_of_clubs.svg'},
  { value: 10, img: './cards/jack_of_clubs2.svg'},
  { value: 10, img: './cards/queen_of_clubs2.svg'},
  { value: 10, img: './cards/king_of_clubs2.svg'},
  { value: 1, img: './cards/ace_of_hearts.svg'},
  { value: 2, img: './cards/2_of_hearts.svg'},
  { value: 3, img: './cards/3_of_hearts.svg'},
  { value: 4, img: './cards/4_of_hearts.svg'},
  { value: 5, img: './cards/5_of_hearts.svg'},
  { value: 6, img: './cards/6_of_hearts.svg'},
  { value: 7, img: './cards/7_of_hearts.svg'},
  { value: 8, img: './cards/8_of_hearts.svg'},
  { value: 9, img: './cards/9_of_hearts.svg'},
  { value: 10, img: './cards/10_of_hearts.svg'},
  { value: 10, img: './cards/jack_of_hearts2.svg'},
  { value: 10, img: './cards/queen_of_hearts2.svg'},
  { value: 10, img: './cards/king_of_hearts2.svg'},
  { value: 1, img: './cards/ace_of_diamonds.svg'},
  { value: 2, img: './cards/2_of_diamonds.svg'},
  { value: 3, img: './cards/3_of_diamonds.svg'},
  { value: 4, img: './cards/4_of_diamonds.svg'},
  { value: 5, img: './cards/5_of_diamonds.svg'},
  { value: 6, img: './cards/6_of_diamonds.svg'},
  { value: 7, img: './cards/7_of_diamonds.svg'},
  { value: 8, img: './cards/8_of_diamonds.svg'},
  { value: 9, img: './cards/9_of_diamonds.svg'},
  { value: 10, img: './cards/10_of_diamonds.svg'},
  { value: 10, img: './cards/jack_of_diamonds2.svg'},
  { value: 10, img: './cards/queen_of_diamonds2.svg'},
  { value: 10, img: './cards/king_of_diamonds2.svg'},
];

function App() {
  
  const [score, setScore] = React.useState(0);
  function increaseScore() {
    setScore(score + 1);
  }  
  return (
    <div className="App">
      <h1>Card Game</h1>
      <p>Score: {score}</p>
      <button onClick={increaseScore}>Add Score </button>

      <div className="hand">
        <Card card={cardData[0]}/>
        <Card card={cardData[13]}/>
        <Card card={cardData[26]}/>
        <Card card={cardData[39]}/>
      </div>

      {score === 21 && <h1>You won!</h1>}
      {score > 21 && <h1>You lost</h1>}
    </div>
  );
}

export default App; // exported so index.js can load it
