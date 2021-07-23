import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class DatosBasicosUsuario extends Component {

  constructor(props){
    super(props);
    this.state = {usuario : {}, infoLogin : {}}
  }

  _fetchUsuario = async({id}) =>{
    const idus = cookies.get('idUser');
    console.log(idus);
    const baseUrl = "http://silverlight.net.co/api-fidare/usuarioUnico.php?idUsuario="+idus;
    console.log(baseUrl);
    await axios.get(baseUrl)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var usuario = response[0];
        this.setState({usuario});

      }else{
        console.log("error")
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  _fetchLogin = async({id}) =>{
    const idus = cookies.get('idUser');
    console.log(idus);
    const baseUrlLogin = "http://silverlight.net.co/api-fidare/usuarioLogin.php?idUsuario="+idus;
    console.log(baseUrlLogin);

    await axios.get(baseUrlLogin)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var infoLogin = response[0];
        this.setState({infoLogin});
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
    const  idUser  = cookies.get('idUser');
    this._fetchUsuario({ id: idUser});
    this._fetchLogin({ id: idUser});
  }

  render(){
    const {nombre, apellido, cedula} = this.state.usuario;
    const {usuario} = this.state.infoLogin;
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
              <input type="text" className="campos" disabled="true" value={nombre} />
              <br />
              <br />
              <label className="nombres">Apellido: </label>
              <br />
              <input type="text" className="campos" disabled="true" value={apellido} />
              <br />
              <br />
              <label className="nombres">Estado: </label>
              <br />
              <input type="text" className="campos" disabled="true" value="Activo" />
            </div>
            <div className="derecha">
              <label className="nombres">Cedula: </label>
              <br />
              <input type="text" className="campos" value={cedula} disabled="true" />
              <br />
              <br />
              <label className="nombres">Tipo: </label>
              <br />
              <input type="text" className="campos" value="Usuario Permanente" disabled="true" />
              <br />
              <br />
              <label className="nombres">Usuario: </label>
              <br />
              <input type="text" placeholder="Nombre de Usuario" className="campos" value={usuario} disabled="true"/>
            </div>
            <br />
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosUsuario;
