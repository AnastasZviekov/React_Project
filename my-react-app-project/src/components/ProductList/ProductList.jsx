import {PIZZAS} from "../../consts/data.js";
import {ButtonAddToCart} from "../ButtonAddToCart.jsx";
import {useState} from "react";
import {useEffect} from "react";
import './style.css'
import {Product} from "./Product/Product.jsx";

const API = "https://react-fast-pizza-api.onrender.com/api/menu";
export const ProductList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
            const getData = async () => {
                try {
                    const response = await fetch(API);
                    if (!response.ok) {
                        throw new Error("Failed");
                    }
                    const {data} = await response.json();
                    console.log({data})
                    setItems(data);
                } catch (e) {
                    console.log(e);
                }

            }
            getData()
        },
        [])
    return (
             <ul>
            {items.map((item) => (
                <Product
                    key={item.id}
                    name={item.name}
                    ingredients={item.ingredients}
                    unitPrice={item.unitPrice}
                    soldOut={item.soldOut}
                />
            ))}
        </ul>
    )
}