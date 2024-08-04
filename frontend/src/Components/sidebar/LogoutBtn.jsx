
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";
const LogoutBtn = () => {
  const {loading,logout} = useLogout()
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
        />
      ) :(
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutBtn

//STARTER CODE FOR LOGOUTBTN

// import { BiLogOut } from "react-icons/bi";
// const LogoutBtn = () => {
//   return (
//     <div className="mt-auto">
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
//     </div>
//   )
// }

// export default LogoutBtn
