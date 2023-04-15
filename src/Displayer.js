import "./Displayer.css"
import AnswerBlocks from "./AnswerBlocks"
import { useState } from "react"

function Displayer({prompt,setOfWords,correctOrder}){
    const [bank, setBank] = useState(setOfWords)
    //console.log(bank)
    const [current, setCurrent] = useState([])
    const [isCorrect, setIsCorrect] = useState(undefined)

    let wordListner = (event) =>{
        let wordId = event.target.getAttribute("wordid")
        let word = setOfWords.find(e => e.id == wordId)
        //console.log(word);
        if (!(current.includes(word))){
            let cloneCurrent = [...current]
            cloneCurrent.push(word)
            setCurrent(cloneCurrent)
            let filteredBank = [...bank].filter(e => e.id != wordId)
            setBank(filteredBank)
        }
    }
    let answerListner = (event) =>{
        let wordId = event.target.getAttribute("wordid")
        //console.log(wordId);
        let word = setOfWords.find(e => e.id == wordId)
        if (!(bank.includes(word))){
            let cloneBank = [...bank]
            cloneBank.push(word)
            setBank(cloneBank)
            let filteredCurrent = [...current].filter(e => e.id != wordId)
            setCurrent(filteredCurrent)
        }
    }
    let checkListner = () =>{
        if(current.length == correctOrder.length){
            let flag = false;
            for (let i = 0; i < correctOrder.length; i++) {
                if (current[i].id != correctOrder[i]){
                    flag = true;
                }
            }
            setIsCorrect(!flag)
        }else{
            setIsCorrect(false)
        }
    }
    
 return (
    <div className="displayer">
        <div>
            <div>
                <h1>Translate this in german</h1>
                <p> {prompt}</p>
            </div>
            <div>
                <AnswerBlocks current={current} listner={answerListner}></AnswerBlocks>
            </div>
            <div className="word-bank">
                <div className="holders">
                    {bank.map(el =>{
                        return(<div key={prompt+el.id} className="holder"  wordid={el.id} onClick={wordListner}><span wordid={el.id} className="word">{el.value}</span></div>)
                    })
                    }
                </div>
            </div>
            <div className="check">
                <button onClick={checkListner}>Check</button>
            </div>
            <div>
                {
                    isCorrect === undefined ? <span></span>: 
                        isCorrect ? <span>Correct</span> : <span>Wrong</span>
                }
            </div>
        </div>
    </div>
 )
}
export default Displayer