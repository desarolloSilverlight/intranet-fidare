import axios from 'axios';
import React, {useState} from 'react';
import { Component } from 'react';

import "./SeguimientoDeclarativos.css"

function SeguimientoDeclarativos (){

  const [datos, setDatos] = useState({
    lugar_actualizacion: '',
    observaciones: '',
    fecha_actualizacion: ''
  })

  const handleInputChange = (event) => {
      //console.log(event.target.name)
      //console.log(event.target.value)
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      });
      console.log(datos.lugar_actualizacion);
      console.log(datos.observaciones);
      console.log(datos.fecha_actualizacion);
  }

  const [ archivos, setArchivos ] = useState(null);

    const subirArchivos = e =>{
      setArchivos(e);
    }

    const insertarArchivos=async()=>{
      const baseUrl = "http://silverlight.net.co/api-fidare/guardarActualizacion.php"
      const f = new FormData();
      f.append("lugar_actualizacion", datos.lugar_actualizacion);
      f.append("observaciones", datos.observaciones);
      f.append("fecha_actualizacion", datos.fecha_actualizacion);

      for(let index = 0; index < archivos.length; index++){
        f.append("files", archivos[index]);
      }

      await axios.post(baseUrl, f, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response=>{
        console.log(response.data)
        window.location.href="http://intranet-fidare.surge.sh/BusquedaProcesos";
      }).catch(error=>{
        console.log(error)
      })
    }

    return(
      <div className="charts1">
        <div className="charts__left1">
          <div className="charts__left__title">
            <div>
              <p>Por favor suministre los siguientes datos</p>
            </div>
          </div>
          <div className="izquierda">
            <label className="nombres">Lugar de Actualizacion: </label>
            <br />
            <select className="campos"
                    name="lugar_actualizacion"
                    onChange={handleInputChange}>
              <option value="0">Seleccione</option>
              <option value="Bogota">Bogota</option>
            </select>
            <br />
            <br />
            <label className="nombres">Observaciones: </label>
            <br />
            <textarea className="campos"
                      name="observaciones"
                      onChange={handleInputChange} 
                      rows="5"></textarea>
          </div>
          <div className="derecha">
            <label className="nombres">Fecha de Actualizacion: </label>
            <br />
            <input className="campos" 
                   name="fecha_actualizacion"
                   onChange={handleInputChange}
                   type="date"/>
            <br />
            <br />
            <label className="nombres">Archivos Adjuntos: </label>
            <br />
            <input type="file" className="campoArchivos" name="adjunto" multiple onChange={(e) => subirArchivos(e.target.files)} />
          </div>
          <div className="btn-guardado">
            <button className="btn-guardar" onClick={()=>insertarArchivos()}>Guardar Actualizacion</button>
          </div>
        </div>
      </div>
    );
}

export default SeguimientoDeclarativos;