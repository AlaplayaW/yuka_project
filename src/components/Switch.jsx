import React, {useState} from 'react';

export default function Switch({renderOn, renderOff}){
const [isOn, setIsOn] = userState(false);
  if(isOn){
    return renderOn(setIsOn);
  }
  return renderOff(setIsOn);
}


// A mettre dans le composant voulu
{/* <Switch 

renderOff={(setIsOn) => (
  <input 
    type="checkbox" 
    checked={false} 
    onClick = {() => setIsOn(true)}>Je suis sur OFF</input>)}

renderOn={(setIsOn) => (
  <div onClick = {() => setIsOn(false)}>Je suis sur On</div>)}
/> */}
