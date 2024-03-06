import {ButtonAddToCart} from "../../ButtonAddToCart.jsx";
import {useState} from "react";
import {Counter} from "../../Counter/Counter.jsx";


export const Product = ({ name, ingredients, unitPrice, soldOut }) => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    }

    const reset = () => {
        setQuantity(0);
    }


    const [isClicked,setClick]=useState(false);
    const addToCart=()=>{
        setClick(true)
    }
    return (
        <li className="product">
            <div>
                <p>{name}</p>
                <p>{ingredients.join(", ")}</p>
                <p>€ {unitPrice}</p>
                {soldOut ? <p>Sold Out</p> : <ButtonAddToCart addToCart={addToCart}/>}
                {  isClicked&&<>
                    <Counter quantity={quantity} />
                        <button className="color" onClick={increment}>+</button>
                        <button className="color" onClick={decrement}>-</button>
                        <button className="color" onClick={reset}>DELETE</button>
                    </>
                }
            </div>
        </li>
    );
};