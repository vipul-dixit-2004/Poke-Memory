import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardHolder from "./components/CardHolder";
function App() {
  const [score, setscore] = useState(0);
  const [highscore, sethighscore] = useState(0);
  const array = [1, 2, 4, 7, 8, 10, 12, 14, 15];
  return (
    <>
      <Navbar score={score} bestScore={highscore} />
      <CardHolder position={array} />
    </>
  );
}

export default App;
