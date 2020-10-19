import React from 'react';
import './BeerSearch.scss'
import { useForm } from "react-hook-form";


export default function BeerSearch (props) {

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        props.fnSubmit(data)
        console.log(data)
    };

    return (
        <form onChange={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <span className="b-text-label">Search</span>
                <input className="b-input" name="name" id="name"
                       ref={register} />
            </label>

</form>
);
}
