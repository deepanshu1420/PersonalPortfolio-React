import CompB from './CompB';
import { MiddleName } from './App';
import { useContext } from 'react';
function CompA(){
  const name = useContext(MiddleName);
  // alert(mname);
  return(
    <>
     
      <CompB name={name}/>
    </>
  );
}

export default CompA;