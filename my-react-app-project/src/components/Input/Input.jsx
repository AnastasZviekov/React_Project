import {useState} from "react";

const Input = ({username, inputChange}) => {

    return <input type="text" placeholder="Your full name" value={username} onChange={inputChange}/>
}

export default Input;