import { useRef } from "react";
import Child from "./Child.jsx";

const Parent = () => {
  const childRef = useRef(null);         // this will have the reference of useRef hook 
  const handleOpenModel = (val) => {
    childRef.current.openModel(val);     // this val have actual value of true or false which it holds as for Prent model it is True 
  };

  return (
    <div>
      <p>This is Parent model</p>
      <Child ref={childRef} />        
      <button onClick={() => handleOpenModel(true)}>Open Model</button>  
    </div> 
  );
};

export default Parent;
