import React from 'react';
import {MenuData} from './MenuData' 

function Menu(){
  return (
    <div className="Menu">
      <ul className="MenuList">
        {MenuData.map((val, key) => {
          return (
            <li 
              key={key} 
              className = "row"
              onClick={()=>{
                window.location.href = val.link
              }}
            >
              
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;