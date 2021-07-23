import React, {Fragment, useState, Component} from 'react'
import "./datos-basicos/DatosBasicos.css";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

import "./estilos/estilos.css"

const cookies = new Cookies();
const baseUrl = "http://silverlight.net.co/api-fidare/todasClasificaciones.php";
const baseUrl1 = "http://silverlight.net.co/api-fidare/todosTiposProcesos.php";

class ClasificacionProceso extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      tipo_proceso: '',
      clasificacion: ''
    },
    clasificaciones: [],
    tipoProcesos: []
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const clasificaciones = await response.json()
      this.setState({clasificaciones});
    }else{
      console.log("problema");
    }

    const response1 = await fetch(baseUrl1)
    if(response1.ok){
      const tipoProcesos = await response1.json()
      this.setState({tipoProcesos});
    }else{
      console.log("problema");
    }
  }

  handleChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form.clasificacion);
    console.log(this.state.form.tipo_proceso);
  }

  renderTableRows = () => {
    const clasificacionesTotales = this.state.clasificaciones;
    //const usuarios = usuariosTotales["items"];
    
    return this.state.clasificaciones.map(clasificacion => {
      return (
        <tr key={clasificacion.idClasificacion}>
          <td>{clasificacion.idClasificacion}</td>
          <td>{clasificacion.tipoProceso}</td>
          <td>{clasificacion.clasificacion}</td>
        </tr>
      )
    })
  }

  guardarClasificacion = async() =>{
    const tipo_proceso = this.state.form.tipo_proceso;
    const clasificacion = this.state.form.clasificacion;
  
    const baseUrl = "http://silverlight.net.co/api-fidare/crearClasificacion.php?tipo_proceso="+tipo_proceso+"&clasificacion="+clasificacion;
    const baseUrl1 = baseUrl.replace(/ /g, "%20");
    console.log(baseUrl1);
    await axios.get(baseUrl1)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var clasificacion = response[0];
        
        window.location.href="../../intranet/Parametros";
      }else{
        console.log("error")
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  render(){
    return (
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Clasificacion de los Procesos</h1>
                <p>Configure los siguientes parametros</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody>
            </table>
            <div className="izquierda">
              <label className="nombres">Tipo de proceso: </label>
              <br />
              <select className="campos" name="tipo_proceso" onChange={this.handleChange}>
                <option value="0">Seleccione</option>
                {
                  this.state.tipoProcesos.map((tipoProceso) => <option value={tipoProceso.idTipoProceso} key={tipoProceso.idTipoProceso}>{tipoProceso.tipoProceso}</option>)
                }
              </select>
            </div>
            <div className="derecha">
              <label className="nombres">Clasificacion: </label>
              <br />
              <input className="campos"
                     name="clasificacion" 
                     onChange = {this.handleChange}
                     placeholder="Clasificacion"
                     type="text"
                     />
              <br />
              <br />
            </div>
            <div className="btn-guardado">
              <button type="button" className="btn-guardar" onClick={() => this.guardarClasificacion()}>
                Crear Clasificacion
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default ClasificacionProceso;
