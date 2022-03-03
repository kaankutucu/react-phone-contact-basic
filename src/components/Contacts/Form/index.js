import {useEffect, useState} from "react";

const initalFormValues = {fullname: '', phone: ''}

function Form ({addContact, contacts}) {

    const [form, setForm ] = useState( initalFormValues);

    useEffect(() => {
        setForm(initalFormValues);
    }, [contacts])

    const onChangeInput = (event) => {
        setForm({...form,[ event.target.name] : event.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();


        if (form.fullname === '' || form.phone === '') {
            return false;
        }

        addContact([...contacts, form]);
        console.log(form);


    };



    return (

        <form onSubmit={onSubmit} >
            <div>
            <input name="fullname" placeholder="Name" value={form.fullname} onChange={onChangeInput}/>
            </div>
            <br/>
            <div>
            <input name="phone" value={form.phone} placeholder="Number" onChange={onChangeInput}/>
            </div>
            <br/>
            <button > Add</button>
        </form>
    );

}


export default Form