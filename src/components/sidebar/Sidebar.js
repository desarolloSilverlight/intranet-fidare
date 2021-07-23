import "./Sidebar.css";
import logo from "../../logo_login.jpg";
import {Link} from 'react-router-dom'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  
  return(
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
        <i 
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="../../intranet/MenuPpal">
            <a>Dashboard</a>
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-folder-open"></i>
          <Link to="../../intranet/BusquedaProcesos">
            <a>Procesos</a>
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-users"></i>
          <Link to="../../intranet/BusquedaUsuarios">
            <a>Usuarios</a>
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-line-chart"></i>
          <Link to="../../intranet/Informes">
            <a>Informes</a>
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-id-card"></i>
          <Link to="../../intranet/BusquedaClientes">
            <a>Clientes</a>
          </Link>
        </div><div className="sidebar__link">
          <i className="fa fa-cogs"></i>
          <Link to="../../intranet/Parametros">
            <a>Configuración</a>
          </Link>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="./">
            <a>Log Out</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;