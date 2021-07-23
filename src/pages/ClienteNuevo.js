import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosClienteNuevo from "../components/formularios/datos-basicos/DatosBasicosClienteNuevo"
import HistorialDeclarativos from "../components/formularios/historial-declarativos/HistorialDeclarativos"
import Accordion from "../components/accordion/Accordion"
import "./estilos/MenuPpal.css"

const ClienteNuevo = () =>{
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
        <DatosBasicosClienteNuevo />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default ClienteNuevo;