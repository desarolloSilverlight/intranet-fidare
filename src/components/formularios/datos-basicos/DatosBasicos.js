import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import axios from 'axios'


const baseUrl1 = "http://silverlight.net.co/api-fidare/todosTiposProcesos.php";
const baseUrl = "http://silverlight.net.co/api-fidare/todasClasificaciones.php";

class DatosBasicos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueTipoProceso: '',
      valueClasificacion: '',
      options: [],
      tipoProcesos: []
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleChange2 = this._handleChange2.bind(this);
  }

  state = {
    form:{
      documento_cliente: '',
      falta_delito: '',
      sujetos_procesales: '',
      competencia: '',
      abogado_responsable: '',
      caracter: '',
      clasificacion: '',
      contraparte: '',
      numero_juzgado: '',
      numero_proceso: '',
      sucursal1: '',
      sucursal2: '',
      telefono_contraparte: '',
      direccion_contraparte: '',
      notificacion_contraparte: '', 
      email_contraparte: ''
    }
  }

  async componentDidMount(){
    const response1 = await fetch(baseUrl1)
    if(response1.ok){
      const tipoProcesos = await response1.json()
      this.setState({tipoProcesos});
    }else{
      console.log("problema");
    }

    const response = await fetch(baseUrl)
    if(response.ok){
      const clasificaciones = await response.json()
      this.setState({clasificaciones});
    }else{
      console.log("problema");
    }
  }

  _handleChange(event){

    const options = event.target.value === '1' 
      ? [ 'Resolución de compraventa', 
          'Declaración de Pertenencia', 
          'Servidumbres', 
          'Posesorios', 
          'Entrega de la cosa por el tradente al adquiriente',
          'Rendición provocada de cuentas',
          'Rendición espontanea de cuentas',
          'Pago por consignación',
          'Impugnación de actos de asambleas, juntas directivas o de socios',
          'Declaración de bienes vacantes o mostrencos',
          'Restitución de inmueble arrendado',
          'Otros Procesos de Restitución de tenencia',
          'Investigación o impugnación de la paternidad o maternidad',
          'Nulidad de matrimonio civil',
          'Divorcio',
          'Laborales',
          'Procesos administrativos',
          'Otro'
        ]
      : event.target.value === '2' 
      ? [ 'Controversias sobre propiedad horizontal',
          'Fijación, aumento, disminución, exoneración de alimentos',
          'Restitución de pensiones alimenticias, cuando no hubieren sido señalados judicialmente',
          'Las controversias que se susciten respecto del ejercicio de la patria potestad',
          'Las diferencias que surjan entre los cónyuges sobre fijación y dirección del hogar, derecho a ser recibido en este y obligación de vivir juntos',
          'Salida de los hijos menores al exterior y del restablecimiento de derechos de los niños, niñas y adolescentes',
          'Venta sobre muestras',
          'Calidad media en compras de género',
          'Objeciones al recibir la cosa',
          'Compraventa de cuerpo cierto existente o inexistente',
          'Objeciones del comprador',
          'Acciones por evicción',
          'Obligación de efectuar inventario y caución especial',
          'Consideraciones de la minoria de condueños por reparaciones',
          'Procedencia de la peritación',
          'Los relacionados con los derechos de autor',
          'Los de reposición, cancelación y reivindicación de títulos valores',
          'Los que conforme a disposición especial deba resolver el juez con conocimiento de causa, o breve y sumariamente, o a su prudente juicio, o a manera de árbitro',
          'Los de lanzamiento por ocupación de hecho de predios rurales',
          'Los que en leyes especiales se ordene tramitar por el proceso verbal sumario',
          'Otro'
        ]
      : event.target.value === '3' 
      ? [ 'Familia',
          'Civil',
          'Laboral',
          'Otro'
        ]
      : event.target.value === '4'
      ? [
          'Procesos disciplinarios administrativos',
          'Procesos jurisdiccionales disciplinarios'
        ]
      : event.target.value === '5'
      ? [
          'Tutela',
          'Procesos ante la superintendencia de industria y comercio',
          'Procesos ante la superintendencia financiera'
        ]
      : ['-']
    
    
    this.setState({
      options,
      valueTipoProceso: event.target.value
    });

  }

  _handleChange2(event){
    //const prueba = event.target.value;
    this.setState({valueClasificacion: event.target.value});

    console.log(this.state.valueTipoProceso);
    console.log(this.state.valueClasificacion);
  }

  handleChange = async e =>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  guardarProceso = async() =>{
    const documento_cliente = this.state.form.documento_cliente;
    const falta_delito = this.state.form.falta_delito;
    const sujetos_procesales = this.state.form.sujetos_procesales;
    const competencia = this.state.form.competencia;
    const abogado_responsable = this.state.form.abogado_responsable;
    const caracter = this.state.form.caracter;
    const contraparte = this.state.form.contraparte;
    const numero_juzgado = this.state.form.numero_juzgado;
    const numero_proceso = this.state.form.numero_proceso;
    const sucursal1 = this.state.form.sucursal1;
    const sucursal2 = this.state.form.sucursal2;
    const direccion_contraparte = this.state.form.direccion_contraparte;
    const email_contraparte = this.state.form.email_contraparte;
    const notificacion_contraparte = this.state.form.notificacion_contraparte;
    const telefono_contraparte = this.state.form.telefono_contraparte;
    const valueClasificacion = this.state.valueClasificacion;
    const valueTipoProceso = this.state.valueTipoProceso;
  

    const baseUrl = "http://silverlight.net.co/api-fidare/crearProceso.php?documento_cliente="+documento_cliente+"&falta_delito="+falta_delito+"&sujetos_procesales="+sujetos_procesales+"&competencia="+competencia+"&abogado_responsable="+abogado_responsable+"&caracter="+caracter+"&contraparte="+contraparte+"&numero_juzgado="+numero_juzgado+"&numero_proceso="+numero_proceso+"&sucursal1="+sucursal1+"&sucursal2="+sucursal2+"&valueClasificacion="+valueClasificacion+"&valueTipoProceso="+valueTipoProceso+"&direccion_contraparte="+direccion_contraparte+"&email_contraparte="+email_contraparte+"&notificacion_contraparte="+notificacion_contraparte+"&telefono_contraparte="+telefono_contraparte;
    const baseUrl1 = baseUrl.replace(/ /g, "%20");
    console.log(baseUrl1);
    await axios.get(baseUrl1)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var proceso = response[0];
        
        window.location.href="../../intranet/BusquedaProcesos";
      }else{
        console.log("error")
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  render(){
    return (
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Datos Basicos del Proceso</h1>
                <p>Por favor suministre los siguientes datos</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Documento Cliente: </label>
              <br />
              <input className="campos"
                     name="documento_cliente" 
                     onChange = {this.handleChange}
                     placeholder="Documento Cliente"
                     type="text"
                     />
              <br />
              <br />
              <label className="nombres">Clase de Proceso: </label>
              <br />
              <input className="campos"
                     name="falta_delito"
                     onChange = {this.handleChange} 
                     placeholder="Clase de Proceso"
                     type="text" 
                     />
              <br />
              <br />
              <label className="nombres">Clasificación: </label>
              <br />
              <select className="campos" value={this.state.valueClasificacion} onChange={this._handleChange2}>
                <option value=''>Seleccione</option>
                {
                  this.state.options.map((item, index) => <option value={item} key={index}>{item}</option>)
                }
              </select>
              <br />
              <br />
              <label className="nombres">Direccion de Contraparte: </label>
              <br />
              <input className="campos"
                     name="direccion_contraparte"
                     onChange = {this.handleChange} 
                     placeholder="Direccion de residencia"
                     type="text" 
                     />
              <br />
              <br />
              <label className="nombres">Telefono de Contraparte: </label>
              <br />
              <input className="campos"
                     name="telefono_contraparte"
                     onChange = {this.handleChange} 
                     placeholder="Telefono de Contraparte"
                     type="text" 
                     />
              <br />
              <br />
              <label className="nombres">Sujetos Procesales: </label>
              <br />
              <select className="campos"
                      name="sujetos_procesales"
                      onChange={this.handleChange}>
                <option value="0">Seleccione</option>
                <option value="Acusado">Acusado</option>
                <option value="Demandante">Demandante</option>
                <option value="Demandado">Demandado</option>
                <option value="Denunciante">Denunciante</option>
                <option value="Denunciado">Denunciado</option>
                <option value="Investigado">Investigado</option>
                <option value="Imputado">Imputado</option>
                <option value="Indicado">Indiciado</option>
                <option value="Accionante">Accionante</option>
                <option value="Accionado">Accionado</option>
                <option value="Mutuo Acuerdo">Mutuo Acuerdo</option>
                <option value="Victima">Victima</option>
              </select>
              <br />
              <br />
              <label className="nombres">Competencia: </label>
              <br />
              <select className="campos"
                      name="competencia"
                      onChange={this.handleChange}>
                <option value="0">Seleccione</option>
                <option value="Juzgado Penal Municipal">Juzgado Penal Municipal</option>
                <option value="Juzgado Penal del Circuito">Juzgado Penal del Circuito</option>
                <option value="Juzgado Civil Municipal">Juzgado Civil Municipal</option>
                <option value="Juzgado Civil del Circuito">Juzgado Civil del Circuito</option>
                <option value="Juzgado Civil Municipal de ejecucion">Juzgado Civil Municipal de ejecucion</option>
                <option value="Juzgado Civil del Circuito de ejecucion">Juzgado Civil del Circuito de ejecucion</option>
                <option value="Juzgado Promiscuo">Juzgado Promiscuo</option>
                <option value="Juzgado laboral">Juzgado laboral</option>
                <option value="Juzgado Familia">Juzgado Familia</option>
                <option value="Juzgado de Pequeñas Causas">Juzgado de Pequeñas Causas</option>
              </select>
              <br />
              <br />
              <label className="nombres">Abogado Responsable: </label>
              <br />
              <select className="campos"
                      name="abogado_responsable"
                      onChange={this.handleChange}>
                <option value="0">Seleccione</option>
                <option value="Alejandra Del Pilar Viedma">Alejandra Del Pilar Viedma</option>
              </select>
            </div>
            <div className="derecha">
              <label className="nombres">Caracter: </label>
              <br />
              <select className="campos"
                      name="caracter"
                      onChange={this.handleChange}>
                <option value="0">Seleccione</option>
                <option value="Afiliado">Afiliado</option>
                <option value="Beneficiario">Beneficiario</option>
              </select>
              <br />
              <br />
              <label className="nombres">Tipo de Proceso: </label>
              <br />
              <select className="campos" name="tipo_proceso" onChange={this._handleChange} value={this.state.valueTipoProceso}>
                <option value="0">Seleccione</option>
                {
                  this.state.tipoProcesos.map((tipoProceso) => <option value={tipoProceso.idTipoProceso} key={tipoProceso.idTipoProceso}>{tipoProceso.tipoProceso}</option>)
                }
              </select>
              
              <br />
              <br />
              <label className="nombres">Nombre de Contraparte: </label>
              <br />
              <input className="campos" 
                     name="contraparte"
                     onChange={this.handleChange}
                     placeholder="Contraparte"
                     type="text" />
              <br />
              <br />
              <label className="nombres">Notificacion Contraparte: </label>
              <br />
              <input className="campos" 
                     name="notificacion_contraparte"
                     onChange={this.handleChange}
                     placeholder="Direccion de Notificacion"
                     type="text" />
              <br />
              <br />
              <label className="nombres">Email Contraparte: </label>
              <br />
              <input className="campos" 
                     name="email_contraparte"
                     onChange={this.handleChange}
                     placeholder="Email de Contraparte"
                     type="text" />
              <br />
              <br />
              <label className="nombres">Numero de Juzgado: </label>
              <br />
              <input className="campos"
                     name="numero_juzgado"
                     onChange = {this.handleChange}
                     placeholder="Numero de Juzgado" 
                     type="text" />
              <br />
              <br />
              <label className="nombres">Numero de Proceso: </label>
              <br />
              <input className="campos"
                     name="numero_proceso"
                     onChange={this.handleChange}
                     placeholder="Numero de Proceso" 
                     type="text" />
              <br />
              <br />
              <label className="nombres">Sucursal: </label>
              <br />
              <select className="campo-dividido" 
                      name="sucursal1"
                      onChange={this.handleChange}>
                <option value ="0">Seleccione</option>
                <option value='Amazonas'> Amazonas</option>
                <option value='Antioquía'> Antioquía</option>
                <option value='Arauca'> Arauca</option>
                <option value='Atlántico'> Atlántico</option>
                <option value='Bolívar'> Bolívar</option>
                <option value='Boyacá'> Boyacá</option>
                <option value='Caldas'> Caldas</option>
                <option value='Caquetá'> Caquetá</option>
                <option value='Casanare'> Casanare</option>
                <option value='Cauca'> Cauca</option>
                <option value='Cesar'> Cesar</option>
                <option value='Chocó'> Chocó</option>
                <option value='Córdoba'> Córdoba</option>
                <option value='Cundinamarca'> Cundinamarca</option>
                <option value='Guainía'> Guainía</option>
                <option value='Guaviare'> Guaviare</option>
                <option value='Huila'> Huila</option>
                <option value='La Guajira'> La Guajira</option>
                <option value='Magdalena'> Magdalena</option>
                <option value='Meta'> Meta</option>
                <option value='Nariño'> Nariño</option>
                <option value='Norte de Santander'> Norte de Santander</option>
                <option value='Putumayo'> Putumayo</option>
                <option value='Quindío'> Quindío</option>
                <option value='Risaralda'> Risaralda</option>
                <option value='San Andrés y Providencia'> San Andrés y Providencia</option>
                <option value='Santander'> Santander</option>
                <option value='Sucre'> Sucre</option>
                <option value='Tolima'> Tolima</option>
                <option value='Valle del Cauca'> Valle del Cauca</option>
                <option value='Vaupés'> Vaupés</option>
                <option value='Vichada'> Vichada</option>
              </select>
              <select className="campo-dividido" 
                      name="sucursal2"
                      onChange={this.handleChange}>
                <option>Seleccione</option>
                <option value="Arauca">Arauca</option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Florencia">Florencia</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Leticia">Leticia</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Mitú">Mitú</option>
                <option value="Mocoa">Mocoa</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Puerto Carreño">Puerto Carreño</option>
                <option value="Puerto Inírida">Puerto Inírida</option>
                <option value="Quibdó">Quibdó</option>
                <option value="Riohacha">Riohacha</option>
                <option value="San Andrés">San Andrés</option>
                <option value="San José del Guaviare">San José del Guaviare</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Sincelejo">Sincelejo</option>
                <option value="Tunja">Tunja</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>

              </select>
            </div>
            <br />
            <div className="btn-guardado">
              <button type="button" className="btn-guardar" onClick={() => this.guardarProceso()}>
                Crear Proceso
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicos;
