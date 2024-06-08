import { createContext } from "react";
import CompA from "./CompA";
const CrucialData = createContext();
const Gender = createContext();
function App(){
    return(
        <>
            <CrucialData.Provider value="Parth Kapoor">
                <Gender.Provider value="Male">
                    <CompA/>
                </Gender.Provider>
            </CrucialData.Provider>
            
            
        </>
    );
}
export default App;
export {CrucialData , Gender};