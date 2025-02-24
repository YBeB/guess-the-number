import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [guessedNumber, setGuessedNumber] = useState(0);
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [hint , setHint]=useState("")

  useEffect(() => {
    setNumberToGuess(Math.floor(Math.random() * 100));
  }, []);

  function GUESGUESS(nim) {
    if (numberToGuess > nim) {
      setHint( "Plus gros");
    } else {
      setHint( "Plus Bas");
    }
    console.log(numberToGuess);
    if (numberToGuess == nim) {
      setHint ("Parfait");
    }
  }

  return (
    <>
      <input
        type="number"
        onChange={(e) => setGuessedNumber(parseInt(e.target.value))}
      />

      <p className="guess-hint">{hint}</p>

      <button
        onClick={() => {
          GUESGUESS(guessedNumber);
        }}
      >
        Hint
      </button>
    </>
  );
}

export default App;

