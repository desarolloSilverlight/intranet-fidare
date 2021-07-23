import React, {Component, Fragment} from 'react';
import "./Main.css";
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'

import {NuevosClientes} from '../NuevosClientes'
import {EmpresaNueva} from '../EmpresaNueva'
import {EditarProcesos} from '../EditarProcesos'

const baseUrl = "http://silverlight.net.co/api-fidare/todosClientes.php";

const cookies = new Cookies();


export class MainTablaClientes extends Component {

  constructor(props){
    super(props);
    this.state = {clientes : []}
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const clientes = await response.json()
      this.setState({clientes});
    }else{
      console.log("problema");
    }
  }

  renderTableHeader = () => {
    const usuarios = this.state.users
    console.log(usuarios[0]);
    return Object.keys(this.state.usuarios[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  verCliente = async(idCliente) =>{
    window.location.href="../../Cliente/"+idCliente;
    cookies.set('idCli', idCliente, {path: "/"});
    
  }

  renderTableRows = () => {
    return this.state.clientes.map(cliente => {
      return (
        <tr key={cliente.idCliente}>
          <td>{cliente.idCliente}</td>
          <td><button onClick={() => this.verCliente(cliente.idCliente)}><EditarProcesos/> </button></td>
          <td>{cliente.primer_nombre}</td>
          <td>{cliente.primer_apellido}</td>
          <td>{cliente.numero_identificacion}</td>
          <td>
            {cliente.direccion_residencia}
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
                  <h1>Listado de Clientes</h1>
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
                      <th>Editar</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Documento</th>
                      <th>Direccion</th>
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

