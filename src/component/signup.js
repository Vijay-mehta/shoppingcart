import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import '../App.css'
import { useNavigate } from "react-router-dom";



const Signup = () => {
  var id=Math.floor(Math.random()*100+1)

  console.log(id)
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset, } = useForm();


    // const initialValues = { name: "", email: "", number: "", password: "", remember: false, gender: "Other", City: ""};

    // const [formValue, setFormValue] = useState(initialValues)
    
 


    // const handleChange = (e) => {

    //     const { name, value, type, checked } = e.target;
    //     setFormValue({ ...formValue, [name]: type === 'checkbox' ? checked : value })
    

    // }



    const submit = (formDtata) => {
        
        //  e.preventDefault()
         console.log(formDtata,"formValue")

        let storeData =JSON.parse(localStorage.getItem('formDtata') || "[]")

      storeData.push(formDtata)

      // console.log(storeData,"12345")

   localStorage.setItem('formDtata',JSON.stringify(storeData));

  //  console.log(b,"12345")
          // JSON.parse(localStorage.getItem('newData') || "[]");

        //  newData.push(formDtata)
     
        // localStorage.setItem('newData',JSON.stringify(formDtata));
        //  newData.push(formValue)
        navigate("/about", { replace: true });
    }

    return (
<>

        <form onSubmit={handleSubmit(submit)}>

            <h1>Sign Up</h1>
            <div className='main_singup'>
                <h6>Please fill in this form to create an account.</h6>
                
                <hr />
                <div className='signup'>

                    <label ><b> Name</b></label>


                    <input   {...register("name", { required: true, pattern: /^[A-Za-z]+$/i, })}
                    // value={formValue.name} onChange={handleChange}
                                    />
                                    {errors?.name?.type === "pattern" && (
                                      <p>Alphabet only</p>
                                    )}
                                    {errors?.name?.type === "required" && (
                                      <p>This field is required</p>
                                    )}

                    {/* <input  type="text" placeholder="Enter Name" name="name"  /> */}


                    <label ><b>Email</b></label>


                    <input   {...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, })}
                    // value={formValue.name} onChange={handleChange}
                                    />
                                    {errors?.email?.type === "pattern" && (
                                      <p>email pattern is not correct</p>
                                    )}
                                    {errors?.email?.type === "required" && (
                                      <p>This field is required</p>
                                    )}
                    {/* <input type="text" placeholder="Enter Email" name="email" value={formValue.email} onChange={handleChange} /> */}
                    <label ><b>Number</b></label>


                    <input   {...register("number", { required: true,  pattern :new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/), })}
                    // value={formValue.name} onChange={handleChange}
                                    />
                                    {errors?.number?.type === "pattern" && (
                                      <p> 10 number digit is required</p>
                                    )}
                                    {errors?.number?.type === "required" && (
                                      <p>This field is required</p>
                                    )}
                    {/* <input type="number" placeholder="Enter Number" name="number" value={formValue.number} onChange={handleChange} /> */}

                    <label ><b>Password</b></label>

                    <input  type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, })}
                    // value={formValue.name} onChange={handleChange}
                                    />
                                    {errors?.password?.type === "pattern" && (
                                      <p>weak</p>
                                    )}
                                    {errors?.password?.type === "required" && (
                                      <p>This field is required</p>
                                    )}
                    {/* <input type="password" placeholder="Enter Password" name="password" value={formValue.password} onChange={handleChange} /> */}

                    <div><label>


                    {/* <input   
                   
                                    /> */}
                        <input type="checkbox"  {...register("remember", { required: true })} /> <b>Remember me</b>

                        {errors?.remember?.type === "required" && (
                                      <p>This field is required</p>
                                    )}
                    </label></div>


                    <label ><b>Select Gender</b></label>
                    <div><input type="radio"  value="Male"  {...register("gender")} />
                        Male</div>
                    <div><input type="radio"  value="Female" {...register("gender")} /> Female</div>
                    <div><input type="radio"  value="Other" {...register("gender")} /> other</div>

                    <div className='select_city'>
                        <label htmlFor="pet-select" >Choose a City:

                            <select {...register("City")} name="City" id="cty-select"  >
                                <option value="">--Please choose an option--</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Kolkota">Kolkota</option>
                                <option value="Kota">Kota</option>
                                <option value="MP">MP</option>
                                <option value="UP">UP</option>
                            </select>
                        </label>
                    </div>




                    <div className="clearfix">
                        <button type="button"  className="cancelbtn" >Cancel</button>
                        <button type="submit" className="signupbtn" >Sign Up</button>
                    </div>
                </div>
            </div>

        </form>


</>
    )
}

export default Signup;


