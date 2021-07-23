import React, {Fragment, useState} from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import { MainTablaUsuarios} from "../components/main/MainTablaUsuarios"
import axios from 'axios'
import Cookies from 'universal-cookie'

import "./estilos/MenuPpal.css"
import "./estilos/Table.scss"

const cookies = new Cookies();

const BusquedaUsuarios = () => {
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
      <MainTablaUsuarios />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default BusquedaUsuarios;