import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Form from "./pages/Form/Form.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import {createRoot} from "react-dom/client";
import {Counter} from "./components/Counter/Counter.jsx";
import {ProductList} from "./components/ProductList/ProductList.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import OrderForm from "./pages/OrderForm/OrderForm.jsx";

function App() {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Header/>
            <nav>
                <NavLink to="login"> Login </NavLink>
                <NavLink to="menu"> Menu </NavLink>
                <NavLink to="order"> Order </NavLink>
            </nav>
            <Routes>
                <Route path='/login' element={<Form/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/order' element={<OrderForm/>}/>
            </Routes>

        </>
    )
}

export default App
