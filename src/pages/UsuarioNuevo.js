import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DatosBasicosUsuarioNuevo from "../components/formularios/datos-basicos/DatosBasicosUsuarioNuevo"
import "./estilos/MenuPpal.css"

const UsuarioNuevo = () =>{
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
        <DatosBasicosUsuarioNuevo />
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default UsuarioNuevo;