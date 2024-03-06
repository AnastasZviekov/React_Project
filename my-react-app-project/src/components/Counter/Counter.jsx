import {useState} from "react";
import './style.css'


export const Counter = ({ quantity }) => {
    return (
        <div className="counter">
            <p>{quantity}</p>
        </div>
    );
};