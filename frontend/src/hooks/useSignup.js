import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser} = useAuthContext()
  const signup = async({fullName,email,age,gender,password,confirmPassword})=>{
    const success = handleInputErrors({fullName,email,age,gender,password,confirmPassword})
    if (!success) return;
    setLoading(true)
    try {
        // console.log("try")
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({fullName,email,age,gender,password,confirmPassword})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        //localstorage
        localStorage.setItem("chat-user", JSON.stringify(data))
        //context
        setAuthUser(data)
        console.log(data)
    } catch (error) {
        toast.error(error.message)
    } finally{
        setLoading(false)
    }
  }
  return {loading,signup}

}


export default useSignup

function handleInputErrors({fullName,email,age,gender,password,confirmPassword}){
    // console.log(fullName,email,age,gender,password,confirmPassword)
    if (!fullName || !email || !age || !gender || !password || !confirmPassword) {
        toast.error('Please Fill in all Fields') 
        return false     
    }

    if (password !== confirmPassword) {
        toast.error('Password do not match')
        return false
    }

    return true
}