import { useState } from "react";
import { TbSend } from "react-icons/tb";
import useSentmessage from "../../hooks/useSentmessage";
const MessageInput = () => {
  const [message,setMessage]=useState("")
  const {loading,sendMessage} = useSentmessage()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
           {loading? <div className="loading loading-spinner"></div> : <TbSend />}    
        </button>
      </div>
    </form>
  );
};

export default MessageInput;


//STARTER CODE FOR MSGINPUT
// import { BaSend } from "react-icons/bs";
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray600 text-white"
//           placeholder="Send a message"
//         />
//         <button className="absolute inset-y-0 end-0 flex items-center pe-3">
//           <BaSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
