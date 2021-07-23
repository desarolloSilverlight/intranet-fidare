import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import {Link} from 'react-router-dom'

class DatosBasicosUsuario1 extends Component {

  constructor(props) {
    super(props);
    
  }

  render(){
    return (
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Datos Basicos del Usuario</h1>
                <p>Por favor suministre los siguientes datos</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Nombre: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Leonardo" />
              <br />
              <br />
              <label className="nombres">Apellido: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Diaz" />
              <br />
              <br />
              <label className="nombres">Estado: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Activo" />
            </div>
            <div className="derecha">
              <label className="nombres">Cedula: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="1010229338" disabled="true" />
              <br />
              <br />
              <label className="nombres">Tipo: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="Usuario Permanente" disabled="true" />
              <br />
              <br />
              <label className="nombres">Usuario: </label>
              <br />
              <input type="text" placeholder="Nombre de Usuario" className="campos" value="jldiazg" disabled="true"/>
            </div>
            <br />
            <div className="btn-guardado">
              <Link to="#">
                <button type="button" className="btn-guardar" >
                  Eliminar Usuario
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosUsuario1;
