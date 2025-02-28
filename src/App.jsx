import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [guessedNumber, setGuessedNumber] = useState(0);
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [count, setCount] = useState(3)
  const [hint , setHint]=useState("");
  const [attempt,setAttempt]=useState("")

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
        onChange={(e) => setGuessedNumber(parseInt(e.target.value)) }
      />

      <p className="guess-hint">{hint}</p>

      <button
        onClick={() => {
          GUESGUESS(guessedNumber);
          console.log(count)

          setCount((prevCount) => {
            let newCount = prevCount - 1;
          
            if (newCount === 0) {
              setAttempt("Perdu !");
              setNumberToGuess(Math.floor(Math.random() * 100)); 
              setGuessedNumber(0); 
              setCount(3);
              setHint(""); 
              setAttempt(""); 
            } else if (newCount === 2) {
              setAttempt("Encore 2 tentatives");
            } else if (newCount === 1) {
              setAttempt("Encore une !");
            }
          
            return newCount;
          });

        }}
      >
        Hint
      </button>
      <p> {attempt}</p>
      <button onClick={()=>{            setAttempt("perdu")
            setNumberToGuess(Math.floor(Math.random() * 100)); 
            setGuessedNumber(0); 
            setCount(3);
            setHint(""); 
            setAttempt("");}}>Replay</button>
    </>
  );
}

export default App;

