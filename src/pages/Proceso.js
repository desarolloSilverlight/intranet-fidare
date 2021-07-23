import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicos from "../components/formularios/datos-basicos/DatosBasicos"
import HistorialDeclarativos from "../components/formularios/historial-declarativos/HistorialDeclarativos"
import Accordion from "../components/accordion/Accordion"
import "./estilos/MenuPpal.css"

const Proceso = () =>{
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
        <DatosBasicos />
        <Accordion />
        {/*<SeguimientoDeclarativos />*/}
        <HistorialDeclarativos />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Proceso;