import React, {Component, Fragment} from 'react';
import "./Main.css";
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'

import {NuevosClientes} from '../NuevosClientes'
import {EmpresaNueva} from '../EmpresaNueva'
import {EditarProcesos} from '../EditarProcesos'

const baseUrl = "http://silverlight.net.co/api-fidare/traerActualizaciones.php";

const cookies = new Cookies();


export class MainTablaActualizaciones extends Component {

  constructor(props){
    super(props);
    this.state = {actualizaciones : []}
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const actualizaciones = await response.json()
      this.setState({actualizaciones});
    }else{
      console.log("problema");
    }
  }

  descargar = async(ruta) =>{
    window.location.href="http://silverlight.net.co/api-fidare/"+ruta;
    
  }


  renderTableRows = () => {
    return this.state.actualizaciones.map(actualizacion => {
      return (
        <tr key={actualizacion.idActualizacion}>
          <td>{actualizacion.idActualizacion}</td>
          <td><button onClick={() => this.descargar(actualizacion.ruta)}><EditarProcesos/> </button></td>
          <td>{actualizacion.fecha_actualizacion}</td>
          <td>{actualizacion.lugar_actualizacion}</td>
          <td>{actualizacion.etapa}</td>
        </tr>
      )
    })
  }

  render(){

    const users = this.state.users;

    //console.log(users);
    return(
      <main>
        <div className="main__container">

          {/* <!-- CHARTS STARTS HERE --> */}
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Listado de Actualizaciones</h1>
                </div>
                <Link to="./ClienteNuevo">
                  <NuevosClientes/>
                </Link>
              </div>
              <Fragment>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Descargar</th>
                      <th>Fecha de Actualizacion</th>
                      <th>Lugar de Actualizacion</th>
                      <th>Etapa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTableRows()}
                  </tbody>
                </table>
              </Fragment>
            </div>
          </div>
          {/* <!-- CHARTS ENDS HERE --> */}
        </div>
      </main>
    );
  }
};

