import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosUsuario from "../components/formularios/datos-basicos/DatosBasicosUsuario"
import HistorialDeclarativos from "../components/formularios/historial-declarativos/HistorialDeclarativos"
import Accordion from "../components/accordion/Accordion"
import "./estilos/MenuPpal.css"

const UsuarioCreado = () =>{
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
        <DatosBasicosUsuario />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default UsuarioCreado;