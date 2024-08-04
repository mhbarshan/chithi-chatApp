import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName:'',
    email:'',
    age:'',
    gender:'',
    password:'',
    confirmPassword:''

  })

  const {loading,signup} = useSignup()
  const handleCheckboxChange =(gender)=>{
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="p-2 text-3xl font-semibold text-center text-gray-300">
            Register on
            <span className="text-teal-600 font-mono"> Cithi</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="m-2 p-1">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Full Name" value={inputs.fullName} onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}/>
              </label>
            </div>
            <div className="m-2 p-1">
              <label className="input input-bordered flex items-center gap-2">
    
                <input type="email" className="grow" placeholder="Email" value={inputs.email} onChange={(e)=> setInputs({...inputs, email:e.target.value})}/>
              </label>
            </div>
            <div className="m-2 p-1">
              <label className="input input-bordered flex items-center gap-2">
               
                <input type="number" className="grow" placeholder=" Age" value={inputs.age} onChange={(e)=> setInputs({...inputs, age:e.target.value})}/>
              </label>
            </div>
            <div className="m-2 p-1">
              <GenderCheckBox onCheckBoxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            </div>
            <div className="m-2 p-1">
              <label className="input input-bordered flex items-center gap-2">
                
                <input type="password" className="grow" placeholder="Password" value={inputs.password} onChange={(e)=> setInputs({...inputs, password:e.target.value})} minLength={6}/>
              </label>
            </div>
            <div className="m-2 p-1">
              <label className="input input-bordered flex items-center gap-2">
                
                <input type="password" className="grow" placeholder="Confirm Password" value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})} minLength={6}/>
              </label>
            </div>
            <div className="m-2 p-1">
              <button className="btn btn-block btn-sm" disabled={loading}>
                {!loading ? "Signup" : (
                  <span className="loading loading-spinner"></span>
                )}
              </button>
            </div>
            <div className="m-2 p-1">
              <Link
               to="/login"
                className="text-sm hover:underline hover:text-teal-600 mt-2 inline-block"
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
