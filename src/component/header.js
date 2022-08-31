import React from 'react';
import {Link} from "react-router-dom";

const Header=()=>{

    return(
        <div className='top_header'>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            {/* <Link to="/category">Category</Link> */}
            <Link to="/contact">Signin</Link>
            <Link to="/signup">Signup</Link>

        </div>
    )
}

export default Header;

