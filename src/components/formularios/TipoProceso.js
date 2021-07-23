import React, {Fragment, useState, Component} from 'react'
import "./datos-basicos/DatosBasicos.css";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const baseUrl = "http://silverlight.net.co/api-fidare/todosTiposProcesos.php";

class TipoProceso extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      tipo_proceso: ''
    },
    tipoProcesos: []
  }

  _handleChange = async e => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const tipoProcesos = await response.json()
      this.setState({tipoProcesos});
    }else{
      console.log("problema");
    }
  }

  guardarTipoProceso = async() =>{
    const tipo_proceso = this.state.form.tipo_proceso;

    const baseUrl = "http://silverlight.net.co/api-fidare/crearTipoProceso.php?tipo_proceso="+tipo_proceso;
    console.log(baseUrl);
    await axios.get(baseUrl)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var tipo_proceso = response[0];
        window.location.href="../../intranet/Parametros";
      }else{
        console.log("error")
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  renderTableRows = () => {
    const tipoProcesosTotales = this.state.tipoProcesos;
    //const usuarios = usuariosTotales["items"];
    
    return this.state.tipoProcesos.map(tipoProceso => {
      return (
        <tr key={tipoProceso.idTipoProceso}>
          <td>{tipoProceso.idTipoProceso}</td>
          <td>{tipoProceso.tipoProceso}</td>
        </tr>
      )
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
                <h1>Formularios</h1>
                <p>Configure los siguientes parametros</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Tipo de proceso: </label>
              <br />
              <input 
                name="tipo_proceso"
                type="text" 
                placeholder="Tipo de Proceso" 
                className="campos"
                onChange={this._handleChange} />
            </div>
            <div className="derecha">
              <br/>
              < button type="button" className="btn-guardar" onClick={() => this.guardarTipoProceso()}>
                Crear Tipo de Proceso
              </button>
            </div>
            < br/>
            < br/>
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
          </div>
        </div>
      </div>
    );
  }
  
};

export default TipoProceso;
