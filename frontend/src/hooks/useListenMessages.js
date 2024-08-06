import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversations"

import notification from "../assets/sound/notification.mp3"
const useListenMessages = (receiverIdCompare) => {
    const {socket} = useSocketContext()
    const {messages,setMessages} = useConversation()
    console.log("Listen msz Selected Chat ",receiverIdCompare)
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake=true
            const sound = new Audio(notification)
            sound.play()
            // console.log("LM UE")
            console.log(newMessage)
            console.log("newmsz SenderId " ,newMessage.senderId)
            if (receiverIdCompare == newMessage.senderId) {
                console.log("Matced convo")
            // setMessages([...messages,newMessage])
            }else{
                console.log("Dont mar")
            }
        })
        // const off =
        // const log = console.log(messages)
        return ()=>socket.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessages
