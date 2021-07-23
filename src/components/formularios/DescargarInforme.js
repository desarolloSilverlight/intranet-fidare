import React, {Fragment, useState, Component} from 'react'
import "./datos-basicos/DatosBasicos.css";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class DescargarInforme extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      fecha1: '',
      fecha2: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  descargarinforme = async() =>{
    const fecha1 = this.state.form.fecha1;
    const fecha2 = this.state.form.fecha2;
    window.open('http://silverlight.net.co/api-fidare/descargar_informe/procesos/informe_procesos.php?fecha1='+fecha1+"&fecha2="+fecha2, '_blank');
  }

  render(){
    return (
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Descargar Informe</h1>
                <p>Seleccione el rango de fechas</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Fecha Inicial: </label>
              <br />
              <input className="campos"
                     name="fecha1" 
                     onChange = {this.handleChange}
                     placeholder="Seleccione Fecha"
                     type="date"
                     />
            </div>
            <div className="derecha">
            <label className="nombres">Fecha Final: </label>
              <br />
              <input className="campos"
                     name="fecha2" 
                     onChange = {this.handleChange}
                     placeholder="Seleccione Fecha"
                     type="date"
                     />
            </div>
            
            < button type="button" className="btn-guardar" onClick={() => this.descargarinforme()}>
                Descargar Informe de Procesos
              </button>
          </div>
        </div>
      </div>
    );
  }
  
};

export default DescargarInforme;
