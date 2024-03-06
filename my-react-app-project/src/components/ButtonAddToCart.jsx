import {Counter} from "./Counter/Counter.jsx";
import React, {useState} from "react";
export const ButtonAddToCart = ({addToCart}) => {


    return (<div><button onClick={addToCart}>Add to Cart </button>
           </div>)
}