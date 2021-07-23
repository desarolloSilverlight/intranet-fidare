import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import Cookies from 'universal-cookie'
import axios from 'axios'

const cookies = new Cookies();

class DatosBasicosLleno extends Component {

  constructor(props) {
    super(props);
    this.state = {proceso : {}}
  }

  _fetchProceso = async({id}) =>{
    const idPro = cookies.get('idPro');
    console.log(idPro);
    const baseUrl = "http://silverlight.net.co/api-fidare/procesoUnico.php?idProceso="+idPro;
    console.log(baseUrl);
    await axios.get(baseUrl)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var proceso = response[0];
        this.setState({proceso});

      }else{
        console.log("error")
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  componentDidMount(){
    //console.log(cookies.get('idUser'));
    const  idPro  = cookies.get('idPro');
    this._fetchProceso({ id: idPro});
  }

  render(){
    const {documento_cliente, falta_delito, sujetos_procesales, competencia, abogado_responsable, caracter, contraparte, valueTipoProceso, valueClasificacion, numero_juzgado, numero_proceso, sucursal2} = this.state.proceso;
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
            <label className="nombres">Documento Cliente: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={documento_cliente} />
              <br />
              <br />
              <label className="nombres">Falta Y/O Delito: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={falta_delito} />
              <br />
              <br />
              <label className="nombres">Tipo de Proceso: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={valueTipoProceso} />
              <br />
              <br />
              <label className="nombres">Sujetos Procesales: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={sujetos_procesales} />
              <br />
              <br />
              <label className="nombres">Competencia: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={competencia} />
              <br />
              <br />
              <label className="nombres">Abogado Responsable: </label>
              <br />
              <input type="text" placeholder="Falta o delito" className="campos" disabled="true" value={abogado_responsable} />
            </div>
            <div className="derecha">
              <label className="nombres">Caracter: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={caracter} disabled="true" />
              <br />
              <br />
              <label className="nombres">Clasificación: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={valueClasificacion} disabled="true" />
              <br />
              <br />
              <label className="nombres">Contraparte: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={contraparte} disabled="true" />
              <br />
              <br />
              <label className="nombres">Numero de Juzgado: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={numero_juzgado} disabled="true" />
              <br />
              <br />
              <label className="nombres">Numero de Proceso: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={numero_proceso} disabled="true" />
              <br />
              <br />
              <label className="nombres">Sucursal: </label>
              <br />
              <input type="text" placeholder="Clase de Proceso" className="campos" value={sucursal2} disabled="true" />
              
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosLleno;
