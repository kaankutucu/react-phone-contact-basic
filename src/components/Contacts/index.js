import {useState, useEffect} from "react";
import List from "./List";
import Form from "./Form";

function Contacts () {
    const [contacts, setContacts] = useState([{
        fullname: 'Kaan',
        phone: 123123
    },
        {
            fullname: 'Sero',
            phone: 4444444
        },
        {
            fullname: 'Ozzy',
            phone: 1111
        }
    ]);
    useEffect( () => {

    }, [contacts])
    return (
        <div>
            <List contacts = {contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}


export default Contacts