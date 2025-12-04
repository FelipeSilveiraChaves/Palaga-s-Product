interface QuestionContent {
    question: string,
    asnwer: string,
}


export default function Questions({question, asnwer}: QuestionContent){
    return (
       <div className="pb-3 pt-3">
         <h4 className="text-xl font-bold text-amber-300">{question}</h4>
         <p className="text-xs font-light">{asnwer}</p>
       </div> 
    )
}
