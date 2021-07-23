import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class DatosBasicosUsuarioNuevo extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      nombre: '',
      apellido: '', 
      cedula: '',
      tipo: '2',
      estado: '1',
      usuario: '',
      password: '',
      confirmPassword: ''
    }
  }

  _handleChange = async e => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  guardarUsuario = async() =>{
    const nombre1 = this.state.form.nombre;
    const apellido1 = this.state.form.apellido;
    const cedula1 = this.state.form.cedula;
    const tipo1 = this.state.form.tipo;
    const estado1 = this.state.form.estado;
    const usuario1 = this.state.form.usuario;
    const password1 = this.state.form.password;

    const baseUrl = "http://silverlight.net.co/api-fidare/crearUsuario.php?nombre="+nombre1+"&apellido="+apellido1+"&cedula="+cedula1+"&tipo="+tipo1+"&estado="+estado1+"&usuario="+usuario1+"&password="+password1;
    await axios.get(baseUrl)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var usuario = response[0];
        this.setState({usuario});
        window.location.href="../../BusquedaUsuarios";
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
                <h1>Datos Basicos del Usuario</h1>
                <p>Por favor suministre los siguientes datos</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Nombre: </label>
              <br />
              <input 
                name="nombre"
                type="text" 
                placeholder="Nombres" 
                className="campos"
                onChange={this._handleChange} />
              <br />
              <br />
              <label className="nombres">Apellido: </label>
              <br />
              <input name="apellido" onChange={this._handleChange} type="text" placeholder="Apellidos" className="campos"/>
              <br />
              <br />
              <label className="nombres">Estado: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
              <br />
              <br />
              <label className="nombres">Contraseña: </label>
              <br />
              <input name="password" onChange={this._handleChange} type="password" placeholder="Password" className="campos"/>
            </div>
            <div className="derecha">
              <label className="nombres">Cedula: </label>
              <br />
              <input name="cedula" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Tipo: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Temporal</option>
                <option>Permanente</option>
              </select>
              <br />
              <br />
              <label className="nombres">Usuario: </label>
              <br />
              <input name="usuario" onChange={this._handleChange} type="text" placeholder="Nombre de Usuario" className="campos"/>
              <br />
              <br />
              <label className="nombres">Confirmar Contraseña: </label>
              <br />
              <input name="confirmPassword" onChange={this._handleChange} type="password" placeholder="Confirmar Password" className="campos"/>
            </div>
            <br />
            <div className="btn-guardado">
              
                <button type="button" className="btn-guardar" onClick={() => this.guardarUsuario()}>
                  Crear Usuario
                </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosUsuarioNuevo;
