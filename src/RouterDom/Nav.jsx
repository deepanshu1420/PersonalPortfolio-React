import { NavLink } from "react-router-dom";
import './index.css';
function Nav(){
    return(
        <>
            <div className="items normal-text">
                <NavLink exact to="/react-1"> Home </NavLink>
                <NavLink exact to="/react-1/page1"> FirstPage </NavLink>
                <NavLink exact to="/react-1/page2"> SecondPage </NavLink>
                <NavLink exact to="/react-1/subject"> Subjects</NavLink>
            </div>
        </>
    );
}
export default Nav;