const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex ">
        <div className="from-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900x" 
            checked={selectedGender==="male"}
            onChange={()=> onCheckBoxChange("male")}
            />
            </label>
        </div>
        <div className="from-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected":""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900x" 
            checked={selectedGender==="female"}
            onChange={()=> onCheckBoxChange("female")}
            />
            </label>
        </div>
        <div className="from-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="others" ? "selected":""}`}>
            <span className="label-text">Others</span>
            <input type="checkbox" className="checkbox border-slate-900x" 
            checked={selectedGender==="others"}
            onChange={()=> onCheckBoxChange("others")}
            />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox

//STARTER CODE FOR SIGNUP
// const GenderCheckBox = () => {
//     return (
//       <div className="flex ">
//           <div className="from-control">
//               <label className={`label gap-2 cursor-pointer`}>
//               <span className="label-text">Male</span>
//               <input type="checkbox" className="checkbox border-slate-900x" />
//               </label>
//           </div>
//           <div className="from-control">
//               <label className={`label gap-2 cursor-pointer`}>
//               <span className="label-text">Female</span>
//               <input type="checkbox" className="checkbox border-slate-900x" />
//               </label>
//           </div>
//           <div className="from-control">
//               <label className={`label gap-2 cursor-pointer`}>
//               <span className="label-text">Others</span>
//               <input type="checkbox" className="checkbox border-slate-900x" />
//               </label>
//           </div>
        
//       </div>
//     )
//   }
  
//   export default GenderCheckBox
  