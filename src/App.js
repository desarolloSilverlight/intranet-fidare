import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Ingreso } from './pages/Ingreso'
import  MenuPpal  from './pages/MenuPpal'
import  BusquedaProcesos  from './pages/BusquedaProcesos'
import  ProcesoParcial  from './pages/ProcesoParcial'
import ProcesoCreado from './pages/ProcesoCreado'
import ProcesoNuevo from './pages/ProcesoNuevo'
import ProcesoActivo from './pages/ProcesoActivo'
import ProcesoFinal from './pages/ProcesoFinal'
import BusquedaUsuarios from './pages/BusquedaUsuarios'
import BusquedaClientes from './pages/BusquedaClientes'
import Cliente from './pages/Cliente'
import ClienteNuevo from './pages/ClienteNuevo'
import UsuarioNuevo from './pages/UsuarioNuevo'
import Parametros from './pages/Parametros'
import Informes from './pages/Informes'
import { NotFound } from './pages/NotFound'
import  Usuario  from './pages/Usuario'


import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Ingreso} />
          <Route exact path='/index.html' component={Ingreso} /> 
          <Route exact path='/intranet/index.html' component={Ingreso} />        
          <Route exact path='/intranet/MenuPpal' component={MenuPpal} />
          <Route exact path='/intranet/BusquedaProcesos' component={BusquedaProcesos} />
          <Route exact path='/intranet/ProcesoNuevo' component={ProcesoNuevo} />
          <Route exact path='/intranet/ProcesoDeclarativoExistente' component={ProcesoCreado} />
          <Route exact path='/intranet/ProcesoParcial' component={ProcesoParcial} />
          <Route exact path='/intranet/Proceso/:idProceso' component={ProcesoActivo} />
          <Route exact path='/intranet/ProcesoFinal' component={ProcesoFinal} />
          <Route exact path='/intranet/BusquedaUsuarios' component={BusquedaUsuarios} />
          <Route exact path='/intranet/BusquedaClientes' component={BusquedaClientes} />
          <Route exact path='/intranet/UsuarioNuevo' component={UsuarioNuevo} />
          <Route exact path='/intranet/ClienteNuevo' component={ClienteNuevo} />
          <Route exact path='/intranet/Parametros' component={Parametros} />
          <Route exact path='/intranet/Informes' component={Informes} />
          <Route exact path='/intranet/Usuario/:idUsuario' component={Usuario} />
          <Route exact path='/intranet/Cliente/:idCliente' component={Cliente} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
