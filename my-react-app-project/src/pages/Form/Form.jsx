import {Button} from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Form = () => {
    const [username, setName] = useState("");
    const navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault()
        navigate('/menu');
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    return (<main>
        <p>👋 Welcome! Please start by telling us your name:</p>
        <form action="#" onSubmit={formSubmit}>
            <Input username={username} inputChange={handleInputChange}></Input>
            <Button></Button>
        </form>
    </main>)
}

export default Form;