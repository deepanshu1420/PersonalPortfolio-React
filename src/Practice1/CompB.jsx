import { useContext } from "react";
import { CrucialData  , Gender} from "./App";
const CompB = () => {
    const fname = useContext(CrucialData);
    const gender = useContext(Gender);
  return (
    <>
        <h1>Central Information is present here  , {fname} , is back  with {gender}</h1>
    </>
  )
}

export default CompB;
