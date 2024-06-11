import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import {Route , Routes} from 'react-router-dom';
function App(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/react-1" element={<Home/>}/>
                <Route exact path="/react-1/form" element={<Form/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    );
};
export default App;