import React, {Fragment} from 'react';
import "./Main.css";
import Table from "../Table";
import {Link} from 'react-router-dom'

import {NuevosProcesos} from '../NuevosProcesos'
import {EditarProcesos} from '../EditarProcesos'


const MainTabla = () => {

  const driversData = [
    
    {
      number: 1,
      editar:  <Link to='./ProcesoDeclarativoExistente'><EditarProcesos/> </Link>,
      name: 'Andres Perez',
      team: '1256874',
      country: 'Declarativos',
      dob: 'Declaracion de Pertenencia',
      placeOfBirth: 'Finalizado'
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
                <h1>Listado de Procesos</h1>
              </div>
              <Link to="./ProcesoNuevo">
                <NuevosProcesos/>
              </Link>
            </div>
            <Fragment>
              <Table 
                tableData = {driversData}
                headingColumns = {['#', 'Editar', 'Cliente', 'Documento', 'Tipo', 'Clasificación', 'Estado del Proceso']}
                title="Busqueda de Procesos"
              />
            </Fragment>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default MainTabla;
