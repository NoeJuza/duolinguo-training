
import "./answerBlocks.css"
export default function AnswerBlocks({current, listner}) {
  return (
    <div className="answer-blocks">
      <div className="answer-holder">
        <div className="holders">
        {current?.map(el =>{
            return(
              <div key={el.id+el.value} className="holder" wordid={el.id} onClick={listner}> <span wordid={el.id} className="word">{el.value}</span> </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
