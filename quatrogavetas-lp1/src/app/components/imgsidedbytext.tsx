interface ImgSidedByContent {
    image: string,
    text: string,
    imageLeft?: boolean;
}


export default function ImgSidedByContent({ image, text, imageLeft }: ImgSidedByContent) {
    return (
        <div className={`flex ${imageLeft ? 'flex-row' : 'flex-row-reverse'} items-center justify-between border-1 border-amber-100 max-w-[840px] h-[300px]`}>
            <div className="border-1 border-amber-200 w-[50%] h-full flex justify-center items-center">
                Ilustração
            </div>
            <div className="border-1 border-amber-200 w-[50%] h-full flex justify-center items-center p-4">
                <p> cum! Nihil quod maiores aliquam magni tenetur beatae exercitationem dignissimos illum temporibus deleniti. Accusamus molestias tenetur facere impedit ea ratione quasi?</p>
            </div>
         </div>
    )
}