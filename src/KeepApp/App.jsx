import './index.css';
import InputBox from './InputBox';
import Card from './Card';
import Text from './Text';
import { useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

function App(){

    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.from(".logo" , {
            y : 20,
            opacity : 0,
            duration : .8,
            delay : .8
        })

        tl.from(".title" , {
            opacity : 0,
            duration : .8,
            y : 20
            

        })

       
    });
    const [bag , updateBag] = useState([]);
    function addObj(obj){
        const {title , desc} = obj;
        updateBag([...bag , {title , desc}]);
    }
    function func(uniqueKey){
        updateBag(prev=>{
            return prev.filter((obj , id)=>{
                return id !== uniqueKey;
            })
        })
    }
    return(
        <>
            <h1 className='container md-heading logo fw-700'>Google <span>Keep App</span></h1>
            <InputBox func={addObj}/>
            {
                bag.length > 0 ? <div className="father container">
                {
                    bag.map((obj , id)=>{
                        return <Card key={id} id={id} title={obj.title} desc = {obj.desc} func={func}/>
                    })
                }
                
            </div> : <Text/>
            }
        </>
    );
};

export default App;