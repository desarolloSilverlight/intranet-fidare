import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosCompletos from "../components/formularios/datos-basicos/DatosBasicosCompletos"
import HistorialDeclarativosCompletos from "../components/formularios/historial-declarativos/HistorialDeclarativosCompletos"
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
        <DatosBasicosCompletos />
        <HistorialDeclarativosCompletos />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default Proceso;