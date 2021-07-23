import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosLleno from "../components/formularios/datos-basicos/DatosBasicosLleno"
import Accordion from "../components/accordion/Accordion"
import "./estilos/MenuPpal.css"
import { MainTablaActualizaciones } from '../components/main/MainTablaActualizaciones'

const ProcesoActivo = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () =>{
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

  

  return(
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <DatosBasicosLleno />
        <Accordion />
        <MainTablaActualizaciones />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default ProcesoActivo;