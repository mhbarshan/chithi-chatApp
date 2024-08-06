import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeleton/MessageSkeleton"
import Message from "./Message"
import notification from "../../assets/sound/notification.mp3"

// import useListenMessages from "../../hooks/useListenMessages"

import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustand/useConversations"
import useGetConversation from "../../hooks/useGetConversation"
import toast from "react-hot-toast"



const Messages = () => {

  const {messages,loading,receiverIdCompare} = useGetMessages()
  // console.log("messages: ",messages)
  // console.log("REID",receiverIdCompare)
  const {socket} = useSocketContext()
  const {setMessages} = useConversation()
  const {conversations} = useGetConversation()
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake=true
        const sound = new Audio(notification)
        sound.play()
        // console.log("LM UE")
        // console.log(newMessage)
        // console.log("newmsz SenderId " ,newMessage.senderId)
        if (receiverIdCompare == newMessage.senderId) {
          // console.log("Matced convo")
          setMessages([...messages,newMessage])
        }
      else{
      
        // console.log(conversations)
        for (let index = 0; index < conversations.length; index++) {
          if (conversations[index]._id == newMessage.senderId) {
            // toast(`New Message from ${conversations[index].fullName}`, {
            //   icon: '👏',
            // });
            toast.custom((t) => (
              
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full text-white bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={conversations[index].profilePic}
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white-900">
                       {conversations[index].fullName}
                      </p>
                      <p className="mt-1 text-sm text-white-500">
                        {newMessage.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-400">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white-600 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ))
            
          }
          
        }

    }
    })
    // const off =
    // const log = console.log(messages)
    return ()=>socket.off("newMessage")
},[socket,setMessages,messages,receiverIdCompare])


  // useListenMessages(receiverIdCompare) 
  const lastMessageRef =useRef()
  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)
    
  },[messages])
  return (
    <div className="px-4 flex-1 overflow-auto">
     {!loading && messages.length >0 && messages.map((message) =>(
      <div key={message._id} ref={lastMessageRef}>
        <Message message={message}/>
      </div>
     )
      
     )} 
     {loading && [...Array(4)].map((_,idx)=><MessageSkeleton key={idx}/>)}
     {!loading && messages.length ===0 &&(
      <p className="text-center">Send a message to start conversation!</p>
     )} 
      
    </div>
  )
}

export default Messages

//STarter code
// import Message from "./Message"


// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
      
//     </div>
//   )
// }

// export default Messages
