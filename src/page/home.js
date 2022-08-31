import React, { useState ,useEffect} from 'react';
// import {useLocation} from 'react-router-dom';
// import PetDataContext from '../App'
import { useContext } from 'react';
import noteContext from '../context/noteContext';


const Home =()=>{
     const  petData  = useContext(noteContext);
     let ContextData=[];
    //  let ContextData;

    //  const [contexdata,setContexdata] = useState("")
    //  console.log(contexdata)
useEffect(()=>{

},[])


{petData?.data?.map((item)=>{
  
  console.log(item.name)
   ContextData.push(item.name)
})}

// petData?.data?.map((item)=>{
//   console.log(item)

//    setContexdata(item)

//  })



    return(
        
        <>
        <h4>home</h4>
        <ul>
          <li>{ContextData.join(' ,')}</li>
        </ul>
    
       {/* {contexdata} */}
        {/* <h1>{location.state.formValue.City}</h1>
        <h1>{location.state.formValue.email}</h1>
        <h1>{location.state.formValue.gender}</h1>
        <h1>{location.state.formValue.name}</h1>
        <h1>{location.state.formValue.number}</h1>
        <h1>{location.state.formValue.password}</h1>
        <h1>{location.state.formValue.remember}</h1>
        <h1><img src={location.state.formValue.file}/></h1> */}
        </>
    )
}

export default Home;