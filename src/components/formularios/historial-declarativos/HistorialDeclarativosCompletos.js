import React, { Fragment } from 'react'
import Table from "../../Table"

import "./HistorialDeclarativos.css"

const HistorialDeclarativosCompletos = () =>{

  const driversData = [
    
    {
      number: 1,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Radicación de la demanda',
      dob: <a href="#">Acta Radicación Demanda</a>,
    },
    {
      number: 2,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Radicación de la demanda',
      dob: <a href="#">Demanda</a>,
    },
    {
      number: 3,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Admisión o Inadmision de la demanda',
      dob: <a href="#">Admisión Demanda</a>,
    },
    {
      number: 4,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Citatorio 291</a>,
    },
    {
      number: 5,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Aviso Art 292</a>,
    },
    {
      number: 6,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Emplazamiento Parrado</a>,
    },
    {
      number: 7,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Memorial Aportando 291 y 292</a>,
    },
    {
      number: 8,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Memorial Aportando Emplazamiento</a>,
    },
    {
      number: 9,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">MemorialOficio 2020-1091</a>,
    },
    {
      number: 10,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">Anexos Notificacion</a>,
    },
    {
      number: 11,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">2017 - 1029 Respuesta Registro</a>,
    },
    {
      number: 12,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">2017 - 1029 auto.Requiere</a>,
    },
    {
      number: 13,
      name: '2021-04-25',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">2017 - 1029 Pertenencia en cuenta</a>,
    },
    {
      number: 14,
      name: '2021-04-27',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">aun sigo cantando</a>,
    },
    {
      number: 15,
      name: '2021-04-27',
      team: 'Adiministrador',
      country: 'Notificaciones',
      dob: <a href="#">LOGO_FIDARE_DATOS</a>,
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

export default HistorialDeclarativosCompletos;