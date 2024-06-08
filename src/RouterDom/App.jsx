import Page1 from './Page1';
import Page2 from './Page2';
import Error from './Error';
import Home from './Home';
import Subject from './Subject';
import {Route , Routes} from 'react-router-dom';
import Name from './Name';
import Nav from './Nav';
function App(){
    return(
        <>
            <Nav/>
            <Routes>
                <Route exact path="/react-1" element={<Home/>}/>
                <Route exact path="/react-1/page1" element={<Page1/>}/>
                <Route exact path="/react-1/page2" element={<Page2/>}/>
                <Route exact path="/react-1/subject" element={<Subject/>}/>
                <Route exact path="/react-1/subject/:name" element={<Name/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
}
export default App;