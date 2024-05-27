import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useState } from 'react';
function Card({question , answer}){
    const [show , updateShow] = useState(false);
    const [icon , updateIcon] = useState(true);
    function trigger(){
        updateShow(!show);
        updateIcon(!icon);
    }
    return(
        <>
            <div className="card">
                
                <p className='question'>
                    <span>
                        {
                            icon ? <AddLocationOutlinedIcon onClick={trigger} className='icon' id="icon"/> : <RemoveCircleOutlineOutlinedIcon onClick={trigger} className='icon' id="icon"/>
                        }
                    </span>
                    {question}
                </p>
                {
                    show ?  <p className='answer sm-text'>{answer}</p> : ""
                }
            </div>
        </>
    );
}
export default Card;