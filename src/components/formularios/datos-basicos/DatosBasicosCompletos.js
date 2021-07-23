import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";

class DatosBasicosCompletos extends Component {

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
                <h1>Datos Basicos del Proceso</h1>
                <p>Por favor suministre los siguientes datos</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Falta Y/O Delito: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Proceso de pertenencia" />
              <br />
              <br />
              <label className="nombres">Tipo de Proceso: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Declarativo" />
              <br />
              <br />
              <label className="nombres">Sujetos Procesales: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Acusado" />
              <br />
              <br />
              <label className="nombres">Competencia: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Penal" />
              <br />
              <br />
              <label className="nombres">Clase de Proceso: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="-" />
              <br />
              <br />
              <label className="nombres">Abogado Responsable: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value="Encargado 1" />
            </div>
            <div className="derecha">
              <label className="nombres">Caracter: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="Afiliado" disabled="true" />
              <br />
              <br />
              <label className="nombres">Clasificación: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="Declaracion de Pertenencia" disabled="true" />
              <br />
              <br />
              <label className="nombres">Contraparte: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="ALFONSO CRUZ MONTAÑA" disabled="true" />
              <br />
              <br />
              <label className="nombres">Numero de Juzgado: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="Primero Civil Municipal" disabled="true" />
              <br />
              <br />
              <label className="nombres">Numero de Proceso: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="11001400300120170102900" disabled="true" />
              <br />
              <br />
              <label className="nombres">Sucursal: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value="Bogota" disabled="true" />
              
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosCompletos;
