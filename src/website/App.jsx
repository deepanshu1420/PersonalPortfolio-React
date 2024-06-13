import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import TodoApp from "./TodoApp";
import WeatherApp from "./WeatherApp";
import FoodCorner from "./FoodCorner";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import {Route , Routes} from 'react-router-dom';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
function App(){

    useGSAP(()=>{
        const tl = gsap.timeline();
      

        tl.from(".my-img-1" , {
            scale : 0,
            delay : .5,
            duration : .4
        })

        tl.to(".my-img-1" , {
            scale : .9,
            repeat : -1,
            yoyo : true,
            duration : .8
        })


    });
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/react-1" element={<Home/>}/>
                <Route exact path="/react-1/form" element={<Form/>}/>
                <Route exact path="/react-1/todo" element={<TodoApp/>}/>
                <Route exact path="/react-1/foodcorner" element={<FoodCorner/>}/>
                <Route exact path="/react-1/weather" element={<WeatherApp/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    );
};
export default App;