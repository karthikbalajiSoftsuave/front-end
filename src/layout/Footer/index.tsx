import React from "react";
import  "./styles.scss"
type Tprops = {

}

export const Footer: React.FC<Tprops> = () => {
    return (
        <footer className="footer" onWheel={(e:any)=>console.log("event",e)}>
            
        </footer>
    )
}