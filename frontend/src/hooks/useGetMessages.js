import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversations"
import toast from "react-hot-toast"


const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const [receiverIdCompare, setReceiverIdCompare] = useState('')

  const {messages,setMessages,selectedConversation} = useConversation()
  

  useEffect(()=>{
    const getMessages = async() =>{
        setLoading(true)
        try {
           const res = await fetch(`/api/message/${selectedConversation._id}`);
           
           const data = await res.json()
        //    console.log(data)
           if(data.error) throw new Error(data.error)
            setMessages(data)
           setReceiverIdCompare(selectedConversation._id)
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }
    if(selectedConversation?._id) getMessages()
  },[selectedConversation?._id,setMessages])

  return {loading,messages,receiverIdCompare}
}

export default useGetMessages
