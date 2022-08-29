import React from "react";

 const Button = ({action, title})=>{
    return(
    <>
    <button  onClick={action}>{title}</button>
    </>
    )
}


export default Button