import React, { Component } from 'react';
//import loginImg from "../../login.svg";
import loginImg from "../../logo_login.jpg"
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'

const baseUrl = "http://silverlight.net.co/api-fidare/accesoLogin.php";
const cookies = new Cookies();


export class Login extends React.Component {
  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      username: '',
      password: ''
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

  iniciarSesion = async() =>{
    const baseUrl1 = baseUrl+'?usuario='+this.state.form.username+'&password='+md5(this.state.form.password);
    await axios.get(baseUrl1)
    .then(response => {
      return response.data
    })
    .then(response =>{
      const user = response["item"];
      const datos = user[0];
      const idLogin = datos["idLogin"];
      if(idLogin.length>0){
        cookies.set('idLogin', idLogin, {path: "/"});
        //alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
        window.location.href="../intranet/MenuPpal";
      }else{
        alert("Usuario y contraseña invalidos");
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  

  render(){
    return <div className="base-container" ref={this.props.containerRef}>
      <div className="header_1">Bienvenido</div>
      <br />
      <form>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario:</label>
              <input 
                autoComplete="off"
                name="username"
                onChange={this._handleChange}
                placeholder="username"
                type="text"   />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                name="password"
                onChange={this._handleChange}
                placeholder="password"
                type="password"   />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={() => this.iniciarSesion()}>
            Login
          </button>
        </div>
      </form>
    </div>
  }
}