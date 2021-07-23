import React, {Component, Fragment} from 'react';
import "./Main.css";
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'

import {NuevosUsuarios} from '../NuevosUsuarios'
import {EditarProcesos} from '../EditarProcesos'
import { ContinuousColorLegend } from 'react-vis';

const baseUrl = "http://silverlight.net.co/api-fidare/todosUsuarios.php";
const cookies = new Cookies();


export class MainTablaUsuarios extends Component {

  constructor(props){
    super(props);
    this.state = {users : []}
  }

  async componentDidMount(){
    const response = await fetch(baseUrl)
    if(response.ok){
      const users = await response.json()
      this.setState({users});
    }else{
      console.log("problema");
    }
  }

  verUsuario = async(idUsuario) =>{
    window.location.href="../../Usuario/"+idUsuario;
    cookies.set('idUser', idUsuario, {path: "/"});
    
  }

  renderTableRows = () => {
    const usuariosTotales = this.state.users;
    //const usuarios = usuariosTotales["items"];
    
    return this.state.users.map(user => {
      return (
        <tr key={user.idUsuario}>
          <td>{user.idUsuario}</td>
          <td><button onClick={() => this.verUsuario(user.idUsuario)}><EditarProcesos/> </button></td>
          <td>{user.nombre}</td>
          <td>{user.apellido}</td>
          <td>{user.cedula}</td>
          <td>
            {user.tipo}
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
                  <h1>Listado de Usuarios</h1>
                </div>
                <Link to="./UsuarioNuevo">
                  <NuevosUsuarios/>
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
                      <th>Cedula</th>
                      <th>Tipo</th>
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

