import React, { useContext } from 'react';
import noteContext from '../context/noteContext';

const Contact =()=>{
    const a=useContext(noteContext);

    return(
        <>
        
        <form>
            {a.name}
            <h1>Contact</h1>
        </form>
        </>
    )
}

export default Contact;