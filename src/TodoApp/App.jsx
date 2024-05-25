import './index.css';
import DateAndTime from './DateAndTime';
import Input from './Input';
import Item from './Item';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef , useState} from 'react';
function App(){
    const [bag , updateBag] = useState([]);
    const headRef = useRef();
    
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".head" ,{
            opacity : 0,
            y : -50,
           
            delay : .5,
            stagger : .5,
            
        })

        tl.from(headRef.current , {
            y : 30,
            opacity : 0,
            duration : .8

        })
        tl.from(".inputRef" ,{
            y : -30,
            duration : .8,
            opacity : 0

        })
        
        gsap.from(".message" , {
            opacity : 0,
            // scale : 0,
            duration : 1,
            delay : .5
        })
        
     });

     function Animate(){
        gsap.from(".item" , {
            y : 70,
            duration : .5,
            stagger : .5,
            opacity : 0,
            
        })
     }
     function fire(uniqueId){
        updateBag(prev=>{
            return prev.filter((ele , id)=>{
                return id !== uniqueId;
            })
        })
     }
    function trigger(ele){
        updateBag([...bag , ele]);
    }
    return(
        <>
            <header className="header container">
                <h2 className="logo head semi-md-heading fw-700">Parth <span>Kapoor</span></h2>
                <DateAndTime/>
            </header>
            <h2 ref = {headRef} className='md-heading fw-500 text-center text-capitalize'>todo app</h2>
            <br />
            <hr />

            <Input shoot={trigger}/>
            {bag.length >= 0 ? <Animate/> : ""}

            {
                bag.length > 0 ? <ul className="bag container">
                {
                    bag.map((ele , id)=>{
                        return <Item key={id} index={id} data = {ele} func={fire}/>
                    })
                }
            </ul> : <p className='message container text-center fw-300'>Welcome to my todo-app .You can add your task here and can trash them when done 💯</p>
            }


        </>
    );
}
export default App;