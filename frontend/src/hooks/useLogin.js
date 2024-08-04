import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
  const [loading,setLoading]=useState(false)
    const {setAuthUser} =useAuthContext()
  const login = async (email,password) =>{
    const success = handleInputErrors({email,password})
    if (!success) return;
    setLoading(true)
    try {
 
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({email,password})
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
    }finally{
        setLoading(false)
    }
  }
  return {loading,login}
}

export default useLogin

function handleInputErrors({email,password}){
    // console.log(fullName,email,age,gender,password,confirmPassword)
    if (!email || !password ) {
        toast.error('Please Fill in all Fields') 
        return false     
    }
    return true
}