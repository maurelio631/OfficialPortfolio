import React from "react";
import { useEffect, useState } from "react";

export default function GoToTopBtn(){
    const [backToTop, setBackToTop] = useState(false)
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    })

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
        <div>
            {
                backToTop &&(
                    <button className="fixed bottom-12 right-12 h-12 w-12 text-5xl" onClick={scrollUp}>^</button>
                )
            }
        </div>
    )
}