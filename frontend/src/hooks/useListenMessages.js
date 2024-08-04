import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversations"

import notification from "../assets/sound/notification.mp3"
const useListenMessages = () => {
    const {socket} = useSocketContext()
    const {messages,setMessages} = useConversation()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake=true
            const sound = new Audio(notification)
            sound.play()
            setMessages([...messages,newMessage])
        })
        // const off =
        // const log = console.log(messages)
        return ()=>socket.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessages
