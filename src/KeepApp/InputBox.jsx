import Button from '@mui/material/Button';
import { useState } from 'react';
function InputBox({func}){
    const [show , updateShow] = useState(false);
    const [obj , updateObj] = useState({title : "" , desc : ""});
    function toggle(){
        updateShow(!show);
        if(obj.title && obj.desc){
            func(obj);
            updateObj({title : "" , desc : ""});
        }else{
            alert("Fill both the fields ....");
        }
    }
    function submitData(e){
        e.preventDefault();
        
    }
    function triggerShow(){
        updateShow(!show);
    }
    function trigger(e){
        const {name , value} = e.target;

        
        updateObj({...obj , [name] : value});
    }
    return(
        <>
            <div className="input-div container">
                <form onSubmit={submitData}>
                    <div className="input-area title" onClick={triggerShow}>
                        <input 
                            type="text" 
                            placeholder="Enter the title"
                            name="title"
                            value={obj.title}
                            onChange={trigger}
                        />
                    </div>
                    {
                        show ? <div className="input-area input-area-box">
                        <textarea 
                            name="desc" 
                            value={obj.desc}
                            onChange={trigger}
                            placeholder='describe your task here ...'
                        ></textarea>
                        <Button variant="contained" id="my-btn" onClick={toggle}>Add Task</Button>
                    </div> : ""
                    
                    }
                </form>
                
            </div>
        </>
    );
}
export default InputBox;