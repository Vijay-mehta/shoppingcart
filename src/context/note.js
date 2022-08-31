import React, { useEffect, useState } from 'react';
import noteContext from './noteContext';
import Axios from 'axios'
import axios from 'axios';

const NoteState=(props)=>{
    const [data,setData]=useState('');


    useEffect(()=>{
        getApi();
    },[])

const getApi = ()=>{

    var config={
        method:"get",
        url:`${`https://jsonplaceholder.typicode.com/users`}`,
    }
    axios(config).then(function(response){
        setData(response)
    }).catch(function(error){
        console.log(error)
    })
};

    const state={
        name:"vija",
        rollId:"29"
    }



    return(
        <>
        <noteContext.Provider value={data}>
            {props.children}
        </noteContext.Provider>
        </>
    )
}

export default NoteState;