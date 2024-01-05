import { useState } from "react"

function Radioauto(){
    const items:{value:String,label:string}[]=[
        { value:'music',label:'Music'},
        { value:'art', label:'Art'},
        { value:'sport', label:'Sport'}
    ]

    const [value,setValue]=useState<string|null> (null);
    function handleChange(e){
      setValue(e.target.value)
      e.target.label=e.target.label + '✔️'
    }

    return (
    <>{
        items.map(item=>(
            <div key={item.value} className="w-20 m-auto h-9">
              <div className="bg-slate-200 m-4 p-2 w-20 h-10 rounded-md flex items-center"> 
                <input 
                name="hobby"
                type="radio"
                value={item.value}
                id={item.value}
                checked={value===item.value}
                onChange={handleChange}/>

            <label htmlFor={item.value}
             className={`  ${value === item.value? "selected" :" "}`}>
              {item.label}{value === item.value && "✔️"}
              </label>
              </div>  
            </div>
        ))}

    </>);
}
export default Radioauto