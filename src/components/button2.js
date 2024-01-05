import { useState } from "react";

function ButtonLoad(){
    const [isLoading,setIsLoading]=useState(false);

    const handleClick=()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            alert('you clicked the button!')
        },1000);
    
    }
return(
    <div>
        <button className="w-21 p-2 h-11 bg-red-600 m-auto mt-12 text-white rounded-xl"

                onClick={handleClick}
                disabled={isLoading}>
                    {isLoading?'Loading...':'Click Here'}
                </button>
    </div>
    );
}
export default ButtonLoad;