import { extractTime } from "../../../../backend/utils/extractTime"
import {useAuthContext} from "../../context/AuthContext"
import useConversation from "../../zustand/useConversations"

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromLoggedUser = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  // console.log("message.senderId")
  // console.log({message});
  const chatClassName = fromLoggedUser ?'chat-end' : 'chat-start'
  const profilePic = fromLoggedUser ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromLoggedUser ? 'bg-teal-500' :'';
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic}/>
            </div>
        </div>
      <div className={`chat-bubble text-white ${shakeClass} ${bubbleBgColor} pb-2`}>
       {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message


//Starter code


// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//               <img
//           alt="Tailwind CSS chat bubble component"
//           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//               </div>
//           </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>
//           Hello Mates
//         </div>
//         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//       </div>
//     )
//   }
  
//   export default Message
  