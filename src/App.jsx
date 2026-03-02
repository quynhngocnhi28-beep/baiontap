import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LetterForm from './LetterForm'
import LetterList from './LetterList'

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted - lần render đầu tiên");
  }, []);

  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (conteent) => {
    setLetters([
      ...letters,
      {
        id: Data.now(),
        content,
      },
    ]);
  };

  return (
    <div>
      <LetterForm onAdd={addLetter} />
      <LetterList letters={letters} />
    </div>
  )
}

export default App;
