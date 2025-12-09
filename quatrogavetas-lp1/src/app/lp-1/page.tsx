import  ImgSidedByContent from "../components/imgsidedbytext";
import LocalStorageLpRegister from "../components/localstoragelpregister";
import Questions from "../components/questions";



export default function LandingPageOne(){
    return(
    <>
      <LocalStorageLpRegister lpId={"lp-1"}/>
      <div className="h-full text-white p-4 flex flex-col items-center">
          Começo      
      </div>
    </>
        
    )
}