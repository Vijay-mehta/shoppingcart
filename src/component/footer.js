import React from 'react';
import {Link} from "react-router-dom";



const Footer =()=>{

    return(
        <div className='top_footer'>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        {/* <Link to="/category">Category</Link> */}
        <Link to="/contact">Contact</Link>

    </div>
    )
}

export default Footer;