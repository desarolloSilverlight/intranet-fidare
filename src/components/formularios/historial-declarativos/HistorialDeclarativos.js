import React, { Fragment } from 'react'
import Table from "../../Table"

import "./HistorialDeclarativos.css"

const HistorialDeclarativos = () =>{

  const driversData = [
    
    {
      number: 1,
      name: '2021-04-01',
      team: 'Adiministrador',
      country: 'Radicación de la demanda',
      dob: 'Archivo.pdf',
    }
  ];

  return(
    <div className="main__container">
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Actualizaciones realizadas al Proceso</h1>
                <p>A continuacion podrá observar las actualizaciones realizadas</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <Fragment>
              <Table 
                tableData = {driversData}
                headingColumns = {['#', 'Fecha', 'Usuario', 'Etapa Asociada', 'Archivo']}
                title="Actualizaciones Realizadas"
              />
            </Fragment>
          </div>  
        </div>
      </div>
  )
}

export default HistorialDeclarativos;