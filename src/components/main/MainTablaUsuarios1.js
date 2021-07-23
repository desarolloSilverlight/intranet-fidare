import React, {Fragment} from 'react';
import "./Main.css";
import Table from "../Table";
import {Link} from 'react-router-dom'

import {NuevosUsuarios} from '../NuevosUsuarios'
import {EditarProcesos} from '../EditarProcesos'


const MainTablaUsuarios1 = () => {

  const driversData = [
    
    {
      number: 1,
      editar:  <Link to='./UsuarioCreado'><EditarProcesos/> </Link>,
      name: 'Administrador Tecnico',
      team: '1256874',
      country: 'Usuario Permanente',
      dob: 'Activo',
      placeOfBirth: 'Conectado'
    },
    {
      number: 2,
      editar:  <Link to='./UsuarioCreado1'><EditarProcesos/> </Link>,
      name: 'Leonardo Diaz',
      team: '1010229338',
      country: 'Usuario Permanente',
      dob: 'Activo',
      placeOfBirth: 'Conectado'
    },
  ];


  

  return (
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
              <Table 
                tableData = {driversData}
                headingColumns = {['#', 'editar', 'Cliente', 'Documento', 'Tipo', 'Clasificación', 'Estado del Proceso']}
                title="Busqueda de Usuarios"
              />
            </Fragment>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default MainTablaUsuarios1;
