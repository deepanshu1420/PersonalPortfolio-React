// import { useRef } from "react";

import { useState } from "react";

// import { useState } from "react";

function Input({shoot}){
    const [item , updateItem]= useState("");
    function postData(e){
        e.preventDefault();
        if(!item){
            alert("Enter the item pls ...");
            return;
        }
        shoot(item);
        updateItem("");
    }
    function trigger(e){
        updateItem(e.target.value);
    }
    
    return(
        <>
            <div className="inputRef input-field container">
                <form onSubmit={postData}>
                    <input 
                        type="text" 
                        placeholder="Enter your task here ..."
                        value={item}
                        onChange={trigger}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    );
}
export default Input;