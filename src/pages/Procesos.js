import React, {Fragment, useState} from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Table from "../components/Table"
import {NuevosProcesos} from '../components/NuevosProcesos'
import "./estilos/MenuPpal.css"
import "./estilos/Table.scss"

const Procesos = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () =>{
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }
  
  const nuevoProceso = () =>{
    window.location.href = "http://localhost:3000/sesion/123";
  }

  const driversData = [
    
    {
      number: 1,
      name: 'Andres Perez',
      team: '1256874',
      country: 'Declarativos',
      dob: 'Servidumbres',
      placeOfBirth: 'Admisión de Demanda'
    },
    {
      number: 2,
      name: 'Carolina Gomez',
      team: '7875454',
      country: 'Procesos Verbales Sumarios',
      dob: 'Controversias sobre propiedad horizontal ',
      placeOfBirth: 'Traslado de la demanda'
    },
    {
      number: 3,
      name: 'Camilo Sanchez',
      team: '19124212',
      country: 'Procesos Ejecutivos',
      dob: 'Familia',
      placeOfBirth: 'Medidas cautelares'
    },
    {
      number: 4,
      name: 'Juan Diaz',
      team: '545443543',
      country: 'Procesos Disciplinarios Administrativos y Jurisdiccionales',
      dob: 'Disciplinario Administrativo',
      placeOfBirth: 'Notificacion Personal'
    },
    {
      number: 5,
      name: 'Johan Peña',
      team: '7446212',
      country: 'Tutela y Otros',
      dob: 'Tutela',
      placeOfBirth: 'Impugnación'
    },
  ];
   

  return(
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <br />
      <Fragment>
        <Table 
          tableData = {driversData}
          headingColumns = {['#', 'Cliente', 'Documento', 'Tipo', 'Clasificación', 'Estado del Proceso']}
          title="Procesos"
        />
      </Fragment>
      <NuevosProcesos onClick={() => nuevoProceso()} />
      
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Procesos;