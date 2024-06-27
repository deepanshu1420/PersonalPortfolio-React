import { createContext, useContext } from 'react';
import CompA from './CompA';
import { Important } from './CompB';
const FirstName = createContext();
const LastName = createContext();
const MiddleName = createContext();
function App() {
    const data = useContext(Important);
    alert(data);
    return (
        <>
            <FirstName.Provider value="Mr.">
                <MiddleName.Provider value="Parth">
                    <LastName.Provider value="Kapoor">
                        <h1>hey Shiva ji the boss , {data}</h1>
                        <CompA />
                    </LastName.Provider>
                </MiddleName.Provider>
            </FirstName.Provider>
        </>
    );
}

export { FirstName, LastName, MiddleName };
export default App;