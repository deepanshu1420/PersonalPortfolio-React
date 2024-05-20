import './index.css';
import data from './Data';
import Card from './Card';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
function App(){
    // console.log(data);
    const headRef = useRef();
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.from(headRef.current , {
            y : 200,
            opacity : 0,
            duration : .5,

        })
        tl.from(".card" , {
          y : 400,
          opacity : 0,
          duration : .8,
          stagger : .8
        })

        
      });
    return(
        <>
            <main id="main">
                <h1 ref = {headRef} className='md-heading fw-600 container'>Famous Netflix Series of the Year</h1>
                <div className="cards container">
                    {
                        data.map((obj , id)=>{
                            return <Card key={id} {...obj}/>
                        })
                    }
                </div>
            </main>
        </>
    );
}
export default App;