import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import TodoApp from "./TodoApp";
import Page from "./projects/Page";
import WeatherApp from "./WeatherApp";
import FoodCorner from "./projects/FoodCorner";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import {Route , Routes} from 'react-router-dom';

// I have removed the 'gsap' and 'useGSAP' imports as the animation
// logic should be moved to the Home.jsx component.

function App(){

    // The animation logic for '.my-img-1' has been removed from this file.
    // You need to add this logic to your 'Home.jsx' file for the animation to work correctly.

    return(
        <>
            <Navbar/>
            <Routes>
                {/* In react-router-dom v6, the 'exact' prop is no longer needed, so I've removed it. */}
                <Route path="/react-1" element={<Home/>}/>
                <Route path="/react-1/form" element={<Form/>}/>
                <Route path="/react-1/todo" element={<TodoApp/>}/>
                <Route path="/react-1/projects/foodcorner" element={<FoodCorner/>}/>
                <Route path="/react-1/projects/foodcorner/:id" element={<Page/>}/>
                <Route path="/react-1/weather" element={<WeatherApp/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    );
};

export default App;
