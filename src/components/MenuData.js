import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

export const MenuData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "Procesos ",
    icon: <FolderIcon />,
    link: "/123/Declarativos"
  },
  {
    title: "Informes",
    icon: <ListAltIcon />,
    link: "/123/VerbalesSumarios"
  },
  {
    title: "Usuarios",
    icon: <PersonIcon />,
    link: "/123/Ejecutivos"
  },
  {
    title: "Perfiles",
    icon: <PeopleIcon />,
    link: "/123/Disciplinarios"
  },
  {
    title: "Cerrar Sesion",
    icon: <ExitToAppIcon />,
    link: "/123/TutelayOtros"
  }
]