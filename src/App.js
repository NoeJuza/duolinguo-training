import './App.css';
import Displayer from './Displayer';
import sentences from "./sentences.json"

function App() {
  return (
    sentences.map(ellement =>{
      return(
      <Displayer key={ellement.prompt} prompt={ellement.prompt} setOfWords={ellement.setOfWords} correctOrder={ellement.correctOrder}></Displayer>
      )
    })
  );
}
export default App;
