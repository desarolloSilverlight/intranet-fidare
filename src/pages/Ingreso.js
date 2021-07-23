import React, {Component} from 'react'

import { Login } from "../components/login/index";
import './estilos/Login.scss';


export class Ingreso extends Component {
  render(){
    return(
      <div className="App-1">
        <div className='login'>
          <div className='container'>
            <Login />
          </div>
        </div>
      </div>
      
    )
  }
}