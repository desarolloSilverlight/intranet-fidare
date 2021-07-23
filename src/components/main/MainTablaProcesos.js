import React, {Component, Fragment} from 'react';
import "./Main.css";
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'

import {NuevosProcesos} from '../NuevosProcesos'
import {EditarProcesos} from '../EditarProcesos'

const baseUrl = "http://silverlight.net.co/api-fidare/todosProcesos.php";

const cookies = new Cookies();


export class MainTablaProcesos extends Component {

  constructor(props){
    super(props);
    this.state = {procesos : []}
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const procesos = await response.json()
      this.setState({procesos});
    }else{
      console.log("problema");
    }
  }

  renderTableHeader = () => {
    const usuarios = this.state.users
    console.log(usuarios[0]);
    return Object.keys(this.state.usuarios[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  verProceso = async(idProceso) =>{
    window.location.href="../../intranet/Proceso/"+idProceso;
    cookies.set('idPro', idProceso, {path: "/"});
    
  }

  renderTableRows = () => {
    return this.state.procesos.map(proceso => {
      return (
        <tr key={proceso.idProceso}>
          <td>{proceso.idProceso}</td>
          <td><button onClick={() => this.verProceso(proceso.idProceso)}><EditarProcesos/> </button></td>
          <td>{proceso.documento_cliente}</td>
          <td>{proceso.falta_delito}</td>
          <td>{proceso.valueTipoProceso}</td>
          <td>
            {proceso.valueClasificacion}
          </td>
          <td>
            {proceso.numero_proceso}
          </td>
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
                  <h1>Listado de Procesos</h1>
                </div>
                <Link to="./ProcesoNuevo">
                  <NuevosProcesos/>
                </Link>
              </div>
              <Fragment>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Editar</th>
                      <th>Documento del Cliente</th>
                      <th>Falta y/o Delito</th>
                      <th>Tipo de Proceso</th>
                      <th>Clasificación</th>
                      <th>Numero de Proceso</th>
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

