import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosLleno from "../components/formularios/datos-basicos/DatosBasicosLleno"
import HistorialDeclarativos1 from "../components/formularios/historial-declarativos/HistorialDeclarativos1"
import Accordion from "../components/accordion/Accordion"
import "./estilos/MenuPpal.css"

const ProcesoFinal = () =>{
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
        <HistorialDeclarativos1 />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default ProcesoFinal;