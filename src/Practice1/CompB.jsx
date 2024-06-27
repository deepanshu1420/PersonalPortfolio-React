import { createContext, useContext } from "react";
import { FirstName, LastName, MiddleName } from "./App";
const Important = createContext();
function CompB({ name }) {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const mname = useContext(MiddleName);
  return (
    <>
      <Important.Provider value="Maa di bhen">
        <h1 style={{ fontFamily: "sans-serif" }}>Hi , I am form Comp B , {fname} {mname} {lname}</h1>
        <h1>Cool is my friend . {name}</h1>
      </Important.Provider>
    </>
  );
}
export {Important};
export default CompB;