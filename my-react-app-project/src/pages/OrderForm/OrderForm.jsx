import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "../../components/formSchema.js";
import './style.css'

const HookForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'onBlur',
            defaultValues: {
                userName: '',
                phone: 380,
                adress: '',
                priority: false,
            },
            resolver: zodResolver(formSchema),
        }
    );


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <h5>Ready to Order? Let's go</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('userName')} type="text" placeholder="User name"/>
                {errors.userName && <p>{errors.userName.message}</p>}
                <input {...register('phone')} type="number" placeholder="Phone Number"/>
                {errors.phone && <p>{errors.phone.message}</p>}
                <input  {...register('adress')} type="text" placeholder="user adress"/>
                {errors.adress && <p>{errors.adress.message}</p>}
                <br/>
                <input {...register('priority')} id="priority" type="checkbox"/>
                <label htmlFor="priority">Want to give your order priority?</label>
                <div>
                    <button className="order_form_button" type="submit">ORDER NOW FOR</button>
                </div>
            </form>
        </>
    )
}

export default HookForm;