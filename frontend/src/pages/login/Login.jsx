import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {loading,login} = useLogin()

  const handleSubmit =async (e)=>{
    e.preventDefault();

    await login(email,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="p-2 text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-teal-600 font-mono"> Cithi</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="m-2 p-1">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="m-2 p-1">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="password"  
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="m-2 p-1">
                <button className="btn btn-block btn-sm "
                disabled={loading}
                >{!loading ? "Login" :(
                  <span className="loading loading-spinner"></span>
                )}</button>
          </div>
          <div className="m-2 p-1">
          <Link to="/signup" className="text-sm hover:underline hover:text-teal-600 mt-2 inline-block">{"Don't"} have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


// STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="p-2 text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-teal-600 font-mono"> Cithi</span>
//           </h1>
//           <form>
//             <div className="m-2 p-1">
//               <label className="input input-bordered flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                   fill="currentColor"
//                   className="h-4 w-4 opacity-70"
//                 >
//                   <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                   <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                 </svg>
//                 <input type="text" className="grow" placeholder="Email" />
//               </label>
//             </div>
//             <div className="m-2 p-1">
//               <label className="input input-bordered flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                   fill="currentColor"
//                   className="h-4 w-4 opacity-70"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <input type="password" className="grow"  />
//               </label>
//             </div>
//             <div className="m-2 p-1">
//                   <button className="btn btn-block btn-sm ">Login</button>
//             </div>
//             <div className="m-2 p-1">
//             <a href="" className="text-sm hover:underline hover:text-teal-600 mt-2 inline-block">{"Don't"} have an account?</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;
  