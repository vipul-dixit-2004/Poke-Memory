import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardHolder from "./components/CardHolder";
let visited = [];
function App() {
  const [score, setscore] = useState(0);
  const [highscore, sethighscore] = useState(0);
  // const [visited, setvisited] = useState([]);
  const [array, updatearray] = useState([1, 2, 4, 7, 8, 10, 12, 14, 15]);
  // const array = [1, 2, 4, 7, 8, 10, 12, 14, 15];
  function checkVisted(element) {
    for (let index = 0; index < visited.length; index++) {
      const item = array[index];
      if (item == element) {
        return true;
      }
    }
    return false;
  }

  function updateScore(element) {
    if (checkVisted(element)) {
      sethighscore(score);
      console.log("gameover");
      visited = [];
      setscore(0);
      return;
    } else {
      visited = [...visited, element];
      setscore(score + 1);
    }
    console.log("scored");
    console.log(visited, element);
    return;
  }

  function shuffle() {
    let newpos = [];
  }
  // const card = document.getElementsByClassName("card");

  // useEffect(()=>{});
  return (
    <>
      <Navbar score={score} bestScore={highscore} />
      <CardHolder position={array} updateScore={updateScore} />
    </>
  );
}

export default App;
