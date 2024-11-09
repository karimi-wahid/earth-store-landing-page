import { useState } from 'react';  

const useSideToggle = () => {  
  const [sideToggle, setSideToggle] = useState(true);  
  console.log(sideToggle)

  const handleSideToggle = () => {  
    setSideToggle((prev) => {  
      const newToggleState = !prev; // Compute new state   
      return newToggleState; // Return the new state  
    });  
  };  

  return { handleSideToggle, sideToggle };  
};  

export default useSideToggle;