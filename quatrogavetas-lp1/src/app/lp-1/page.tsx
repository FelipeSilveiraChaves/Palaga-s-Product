import  ImgSidedByContent from "../components/imgsidedbytext";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import Questions from "../components/questions";



export default function LandingPageOne(){
    const FAQ = {
        x: {
          question: "Mas se isso acontecer o que acontece?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi ratione atque explicabo odio velit quasi quam accusantium dolor nostrum."
        },
        y: {
          question: "Mas se isso acontecer o que acontece?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi ratione atque explicabo odio velit quasi quam accusantium dolor nostrum."
        },
        z: {
          question: "Mas se isso acontecer o que acontece?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi ratione atque explicabo odio velit quasi quam accusantium dolor nostrum."
        }
      };
   

    return(
    <>
      <LocalStorageLpRegister lpId={"lp-1"}/>
      <div className="bg-black h-full text-white p-4 flex flex-col items-center">
            <h1 className="flex justify-center w-2xs h-2x border-1 border-amber-300 mb-3">
                Headline
            </h1>
            <div className="border-1 border-amber-300 min-h-96 min-w-[600px] items-center justify-center flex mb-3">
                Video
            </div>
            <button className="border-1 border-amber-300 h-12 w-52 mb-3">Comprar</button>
           <div className="flex flex-col space-y-6">
                <ImgSidedByContent image="e" text="" imageLeft/>
                <ImgSidedByContent image="e" text="" imageLeft={false}/>
                <ImgSidedByContent image="e" text="" imageLeft/>
           </div>

           <div className="min-w-[800px]">
                <Questions question={FAQ.x.question} asnwer={FAQ.x.answer} />
                <Questions question={FAQ.y.question} asnwer={FAQ.y.answer} />
                <Questions question={FAQ.z.question} asnwer={FAQ.z.answer} />
           </div>
        </div>
    </>
        
    )
}