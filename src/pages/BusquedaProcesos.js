import React, {Fragment, useState} from 'react'
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import { MainTablaProcesos } from "../components/main/MainTablaProcesos"
import axios from 'axios'
import Cookies from 'universal-cookie'

import "./estilos/MenuPpal.css"
import "./estilos/Table.scss"

const baseUrl = "http://localhost:3001/procesos";
const cookies = new Cookies();

const BusquedaProcesos = () => {
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

  

  return(
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <MainTablaProcesos />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default BusquedaProcesos;