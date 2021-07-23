import React, {Fragment, useState, Component} from 'react'
import "./DatosBasicos.css";
import {Link} from 'react-router-dom'
import axios from 'axios'
import md5 from 'md5'

const baseUrl = "http://silverlight.net.co/public/api/usuarios/";

class DatosBasicosClienteNuevo extends Component {

  constructor(props){
    super(props);
    
  }

  state = {
    form:{
      primer_nombre: '',
      primer_apellido: '', 
      fecha_afiliacion: '',
      fecha_nacimiento: '',
      barrio: '',
      telefono_fijo: '',
      profesion: '',
      numero_identificacion: '',
      segundo_nombre: '',
      segundo_apellido: '',
      direccion_residencia: '',
      telefono_movil: '',
      barrio: ''
    }
  }

  _handleChange = async e => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  guardarCliente = async() =>{

    const primer_nombre1 = this.state.form.primer_nombre;
    const primer_apellido1 = this.state.form.primer_apellido;
    const fecha_afiliacion1 = this.state.form.fecha_afiliacion;
    const fecha_nacimiento1 = this.state.form.fecha_nacimiento;
    const telefono_fijo1 = this.state.form.telefono_fijo;
    const profesion1 = this.state.form.profesion;
    const numero_identificacion1 = this.state.form.numero_identificacion;
    const segundo_nombre1 = this.state.form.segundo_nombre;
    const segundo_apellido1 = this.state.form.segundo_apellido;
    const direccion_residencia1 = this.state.form.direccion_residencia;
    const telefono_movil1 = this.state.form.telefono_movil;
    const barrio1 = this.state.form.barrio;

    const baseUrl = "http://silverlight.net.co/api-fidare/crearCliente.php?primer_nombre="+primer_nombre1+"&primer_apellido="+primer_apellido1+"&fecha_afiliacion="+fecha_afiliacion1+"&fecha_nacimiento="+fecha_nacimiento1+"&telefono_fijo="+telefono_fijo1+"&profesion="+profesion1+"&numero_identificacion="+numero_identificacion1+"&segundo_nombre="+segundo_nombre1+"&segundo_apellido="+segundo_apellido1+"&direccion_residencia="+direccion_residencia1+"&telefono_movil="+telefono_movil1+"&barrio="+barrio1;
    const baseUrl1 = baseUrl.replace(/ /g, "%20");
    console.log(baseUrl1);
    
    await axios.get(baseUrl1)
    .then(response => {
      return response.data
    })
    .then(response =>{
      if(response.length>0){
        var cliente = response[0];
        window.location.href="../../BusquedaClientes";
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
                <h1>Datos Basicos del Cliente</h1>
                <p>Por favor suministre los siguientes datos</p>
              </div>
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="izquierda">
              <label className="nombres">Tipo de Documento: </label>
              <br />
              <select className="campos">
                <option>Cedula de Ciudadania</option>
                <option>Cedula de Extranjeria</option>
              </select>
              <br />
              <br />
              <label className="nombres">Primer Nombre: </label>
              <br />
              <input name="primer_nombre" onChange={this._handleChange} type="text" placeholder="Apellidos" className="campos"/>
              <br />
              <br />
              <label className="nombres">Primer Apellido: </label>
              <br />
              <input name="primer_apellido" onChange={this._handleChange} type="text" placeholder="Apellidos" className="campos"/>
              <br />
              <br />
              <label className="nombres">Fecha de Afiliacion: </label>
              <br />
              <input name="fecha_afiliacion" onChange={this._handleChange} type="date" placeholder="Password" className="campos"/>
              <br />
              <br />
              <label className="nombres">Fecha de Nacimiento: </label>
              <br />
              <input name="fecha_nacimiento" onChange={this._handleChange} type="date" placeholder="Password" className="campos"/>
              <br />
              <br />
              <label className="nombres">Nacionalidad: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option value="argentina">Argentina</option>
                <option value="20">Afganistán</option>
                <option value="30">Albania</option>
                <option value="40">Alemania</option>
                <option value="50">Andorra</option>
                <option value="60">Angola</option>
                <option value="70">Anguilla</option>
                <option value="80">Antártida Argentina</option>
                <option value="90">Antigua y Barbuda</option>
                <option value="100">Antillas Holandesas</option>
                <option value="110">Arabia Saudita</option>
                <option value="120">Argelia</option>
                <option value="130">Armenia</option>
                <option value="140">Aruba</option>
                <option value="150">Australia</option>
                <option value="160">Austria</option>
                <option value="170">Azerbaiján</option>
                <option value="180">Bahamas</option>
                <option value="190">Bahrain</option>
                <option value="200">Bangladesh</option>
                <option value="210">Barbados</option>
                <option value="220">Bélgica</option>
                <option value="230">Belice</option>
                <option value="240">Benin</option>
                <option value="250">Bhutan</option>
                <option value="260">Bielorusia</option>
                <option value="bolivia">Bolivia</option>
                <option value="280">Bosnia Herzegovina</option>
                <option value="290">Botswana</option>
                <option value="brasil">Brasil</option>
                <option value="310">Brunei</option>
                <option value="320">Bulgaria</option>
                <option value="330">Burkina Faso</option>
                <option value="340">Burundi</option>
                <option value="350">Cabo Verde</option>
                <option value="360">Camboya</option>
                <option value="370">Camerún</option>
                <option value="380">Canadá</option>
                <option value="390">Chad</option>
                <option value="chile">Chile</option>
                <option value="410">China</option>
                <option value="420">Chipre</option>
                <option value="430">Colombia</option>
                <option value="440">Comoros</option>
                <option value="450">Congo</option>
                <option value="460">Corea del Norte</option>
                <option value="470">Corea del Sur</option>
                <option value="480">Costa de Marfil</option>
                <option value="490">Costa Rica</option>
                <option value="500">Croacia</option>
                <option value="510">Cuba</option>
                <option value="520">Darussalam</option>
                <option value="530">Dinamarca</option>
                <option value="540">Djibouti</option>
                <option value="550">Dominica</option>
                <option value="560">Ecuador</option>
                <option value="570">Egipto</option>
                <option value="580">El Salvador</option>
                <option value="590">Em. Arabes Un.</option>
                <option value="600">Eritrea</option>
                <option value="610">Eslovaquia</option>
                <option value="620">Eslovenia</option>
                <option value="espana">España</option>
                <option value="640">Estados Unidos</option>
                <option value="650">Estonia</option>
                <option value="660">Etiopía</option>
                <option value="670">Fiji</option>
                <option value="680">Filipinas</option>
                <option value="690">Finlandia</option>
                <option value="700">Francia</option>
                <option value="710">Gabón</option>
                <option value="720">Gambia</option>
                <option value="730">Georgia</option>
                <option value="740">Ghana</option>
                <option value="750">Gibraltar</option>
                <option value="760">Grecia</option>
                <option value="770">Grenada</option>
                <option value="780">Groenlandia</option>
                <option value="790">Guadalupe</option>
                <option value="800">Guam</option>
                <option value="810">Guatemala</option>
                <option value="820">Guayana Francesa</option>
                <option value="830">Guinea</option>
                <option value="840">Guinea Ecuatorial</option>
                <option value="850">Guinea-Bissau</option>
                <option value="860">Guyana</option>
                <option value="870">Haití</option>
                <option value="880">Holanda</option>
                <option value="890">Honduras</option>
                <option value="900">Hong Kong</option>
                <option value="910">Hungría</option>
                <option value="920">India</option>
                <option value="930">Indonesia</option>
                <option value="940">Irak</option>
                <option value="950">Irán</option>
                <option value="960">Irlanda</option>
                <option value="970">Islandia</option>
                <option value="980">Islas Cayman</option>
                <option value="990">Islas Cook</option>
                <option value="1000">Islas Faroe</option>
                <option value="1010">Islas Marianas del Norte</option>
                <option value="1020">Islas Marshall</option>
                <option value="1030">Islas Solomon</option>
                <option value="1040">Islas Turcas y Caicos</option>
                <option value="1050">Islas Vírgenes</option>
                <option value="1060">Islas Wallis y Futuna</option>
                <option value="1070">Israel</option>
                <option value="1080">Italia</option>
                <option value="1090">Jamaica</option>
                <option value="1100">Japón</option>
                <option value="1110">Jordania</option>
                <option value="1120">Kazajstán</option>
                <option value="1130">Kenya</option>
                <option value="1140">Kirguistán</option>
                <option value="1150">Kiribati</option>
                <option value="1160">Kuwait</option>
                <option value="1170">Laos</option>
                <option value="1180">Lesotho</option>
                <option value="1190">Letonia</option>
                <option value="1200">Líbano</option>
                <option value="1210">Liberia</option>
                <option value="1220">Libia</option>
                <option value="1230">Liechtenstein</option>
                <option value="1240">Lituania</option>
                <option value="1250">Luxemburgo</option>
                <option value="1260">Macao</option>
                <option value="1270">Macedonia</option>
                <option value="1280">Madagascar</option>
                <option value="1290">Malasia</option>
                <option value="1300">Malawi</option>
                <option value="1310">Mali</option>
                <option value="1320">Malta</option>
                <option value="1330">Marruecos</option>
                <option value="1340">Martinica</option>
                <option value="1350">Mauricio</option>
                <option value="1360">Mauritania</option>
                <option value="1370">Mayotte</option>
                <option value="1380">México</option>
                <option value="1390">Micronesia</option>
                <option value="1400">Moldova</option>
                <option value="1410">Mónaco</option>
                <option value="1420">Mongolia</option>
                <option value="1430">Montserrat</option>
                <option value="1440">Mozambique</option>
                <option value="1450">Myanmar</option>
                <option value="1460">Namibia</option>
                <option value="1470">Nauru</option>
                <option value="1480">Nepal</option>
                <option value="1490">Nicaragua</option>
                <option value="1500">Níger</option>
                <option value="1510">Nigeria</option>
                <option value="1520">Noruega</option>
                <option value="1530">Nueva Caledonia</option>
                <option value="1540">Nueva Zelandia</option>
                <option value="1550">Omán</option>
                <option value="1570">Pakistán</option>
                <option value="1580">Panamá</option>
                <option value="1590">Papua Nueva Guinea</option>
                <option value="paraguay">Paraguay</option>
                <option value="1610">Perú</option>
                <option value="1620">Pitcairn</option>
                <option value="1630">Polinesia Francesa</option>
                <option value="1640">Polonia</option>
                <option value="1650">Portugal</option>
                <option value="1660">Puerto Rico</option>
                <option value="1670">Qatar</option>
                <option value="1680">RD Congo</option>
                <option value="1690">Reino Unido</option>
                <option value="1700">República Centroafricana</option>
                <option value="1710">República Checa</option>
                <option value="1720">República Dominicana</option>
                <option value="1730">Reunión</option>
                <option value="1740">Rumania</option>
                <option value="1750">Rusia</option>
                <option value="1760">Rwanda</option>
                <option value="1770">Sahara Occidental</option>
                <option value="1780">Saint Pierre y Miquelon</option>
                <option value="1790">Samoa</option>
                <option value="1800">Samoa Americana</option>
                <option value="1810">San Cristóbal y Nevis</option>
                <option value="1820">San Marino</option>
                <option value="1830">Santa Elena</option>
                <option value="1840">Santa Lucía</option>
                <option value="1850">Sao Tomé y Príncipe</option>
                <option value="1860">Senegal</option>
                <option value="1870">Serbia y Montenegro</option>
                <option value="1880">Seychelles</option>
                <option value="1890">Sierra Leona</option>
                <option value="1900">Singapur</option>
                <option value="1910">Siria</option>
                <option value="1920">Somalia</option>
                <option value="1930">Sri Lanka</option>
                <option value="1940">Sudáfrica</option>
                <option value="1950">Sudán</option>
                <option value="1960">Suecia</option>
                <option value="1970">Suiza</option>
                <option value="1980">Suriname</option>
                <option value="1990">Swazilandia</option>
                <option value="2000">Taiwán</option>
                <option value="uruguay">Uruguay</option>
              </select>
              <br />
              <br />
              <label className="nombres">Nivel de Estudios: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Bachiller</option>
                <option>Especializado</option>
                <option>Ninguno</option>
                <option>Primaria</option>
                <option>Tecnologico</option>
                <option>Universitario</option>
              </select>
              <br />
              <br />
              <label className="nombres">Departamento: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option value="ANTIOQUIA">ANTIOQUIA </option>
											<option value="ARAUCA">ARAUCA </option>
											<option value="SAN_ANDRES_Y_PROVIDENCIA">SAN_ANDRES_Y_PROVIDENCIA </option>
											<option value="ATLANTICO">ATLANTICO </option>
											<option value="BOGOTA_DC">BOGOTA_DC </option>
											<option value="BOLIVAR">BOLIVAR </option>
											<option value="BOYACA">BOYACA </option>
											<option value="CALDAS">CALDAS </option>
											<option value="CAQUETA">CAQUETA </option>
											<option value="CASANARE">CASANARE </option>
											<option value="CAUCA">CAUCA </option>
											<option value="CESAR">CESAR </option>
											<option value="CHOCO">CHOCO </option>
											<option value="CORDOBA">CORDOBA </option>
											<option value="CUNDINAMARCA">CUNDINAMARCA </option>
											<option value="GUAINIA">GUAINIA </option>
											<option value="GUAVIARE">GUAVIARE </option>
											<option value="HUILA">HUILA </option>
											<option value="LA_GUAJIRA">LA_GUAJIRA </option>
											<option value="MAGDALENA">MAGDALENA </option>
											<option value="META">META </option>
											<option value="NARINO">NARIÑO </option>
											<option value="NORTE_DE_SANTANDER">NORTE_DE_SANTANDER </option>
											<option value="PUTUMAYO">PUTUMAYO </option>
											<option value="QUINDIO">QUINDIO </option>
											<option value="RISARALDA">RISARALDA </option>
											<option value="SANTANDER">SANTANDER </option>
											<option value="SUCRE">SUCRE </option>
											<option value="TOLIMA">TOLIMA </option>
											<option value="VALLE_DEL_CAUCA">VALLE_DEL_CAUCA </option>
											<option value="VAUPES">VAUPES </option>
											<option value="VICHADA">VICHADA </option>
              </select>
              <br />
              <br />
              <label className="nombres">Barrio: </label>
              <br />
              <input name="barrio" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Telefono Fijo: </label>
              <br />
              <input name="telefono_fijo" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Tipo de Vivienda: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Arriendo</option>
                <option>Familiar</option>
                <option>Propia sin Hipoteca</option>
                <option>Propia con Hipoteca</option>
              </select>
              <br />
              <br />
              <label className="nombres">Profesion u Oficio: </label>
              <br />
              <input name="profesion" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
            </div>


            <div className="derecha">
              <label className="nombres">Numero de Identificación: </label>
              <br />
              <input name="numero_identificacion" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Segundo Nombre: </label>
              <br />
              <input name="segundo_nombre" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Segundo Apellido: </label>
              <br />
              <input name="segundo_apellido" onChange={this._handleChange} type="text" placeholder="Nombre de Usuario" className="campos"/>
              <br />
              <br />
              <label className="nombres">Genero: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
              <br />
              <br />
              <label className="nombres">Lugar de Nacimiento: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option value="Afganistán" id="AF">Afganistán</option>
                <option value="Albania" id="AL">Albania</option>
                <option value="Alemania" id="DE">Alemania</option>
                <option value="Andorra" id="AD">Andorra</option>
                <option value="Angola" id="AO">Angola</option>
                <option value="Anguila" id="AI">Anguila</option>
                <option value="Antártida" id="AQ">Antártida</option>
                <option value="Antigua y Barbuda" id="AG">Antigua y Barbuda</option>
                <option value="Antillas holandesas" id="AN">Antillas holandesas</option>
                <option value="Arabia Saudí" id="SA">Arabia Saudí</option>
                <option value="Argelia" id="DZ">Argelia</option>
                <option value="Argentina" id="AR">Argentina</option>
                <option value="Armenia" id="AM">Armenia</option>
                <option value="Aruba" id="AW">Aruba</option>
                <option value="Australia" id="AU">Australia</option>
                <option value="Austria" id="AT">Austria</option>
                <option value="Azerbaiyán" id="AZ">Azerbaiyán</option>
                <option value="Bahamas" id="BS">Bahamas</option>
                <option value="Bahrein" id="BH">Bahrein</option>
                <option value="Bangladesh" id="BD">Bangladesh</option>
                <option value="Barbados" id="BB">Barbados</option>
                <option value="Bélgica" id="BE">Bélgica</option>
                <option value="Belice" id="BZ">Belice</option>
                <option value="Benín" id="BJ">Benín</option>
                <option value="Bermudas" id="BM">Bermudas</option>
                <option value="Bhután" id="BT">Bhután</option>
                <option value="Bielorrusia" id="BY">Bielorrusia</option>
                <option value="Birmania" id="MM">Birmania</option>
                <option value="Bolivia" id="BO">Bolivia</option>
                <option value="Bosnia y Herzegovina" id="BA">Bosnia y Herzegovina</option>
                <option value="Botsuana" id="BW">Botsuana</option>
                <option value="Brasil" id="BR">Brasil</option>
                <option value="Brunei" id="BN">Brunei</option>
                <option value="Bulgaria" id="BG">Bulgaria</option>
                <option value="Burkina Faso" id="BF">Burkina Faso</option>
                <option value="Burundi" id="BI">Burundi</option>
                <option value="Cabo Verde" id="CV">Cabo Verde</option>
                <option value="Camboya" id="KH">Camboya</option>
                <option value="Camerún" id="CM">Camerún</option>
                <option value="Canadá" id="CA">Canadá</option>
                <option value="Chad" id="TD">Chad</option>
                <option value="Chile" id="CL">Chile</option>
                <option value="China" id="CN">China</option>
                <option value="Chipre" id="CY">Chipre</option>
                <option value="Ciudad estado del Vaticano" id="VA">Ciudad estado del Vaticano</option>
                <option value="Colombia" id="CO">Colombia</option>
                <option value="Comores" id="KM">Comores</option>
                <option value="Congo" id="CG">Congo</option>
                <option value="Corea" id="KR">Corea</option>
                <option value="Corea del Norte" id="KP">Corea del Norte</option>
                <option value="Costa del Marfíl" id="CI">Costa del Marfíl</option>
                <option value="Costa Rica" id="CR">Costa Rica</option>
                <option value="Croacia" id="HR">Croacia</option>
                <option value="Cuba" id="CU">Cuba</option>
                <option value="Dinamarca" id="DK">Dinamarca</option>
                <option value="Djibouri" id="DJ">Djibouri</option>
                <option value="Dominica" id="DM">Dominica</option>
                <option value="Ecuador" id="EC">Ecuador</option>
                <option value="Egipto" id="EG">Egipto</option>
                <option value="El Salvador" id="SV">El Salvador</option>
                <option value="Emiratos Arabes Unidos" id="AE">Emiratos Arabes Unidos</option>
                <option value="Eritrea" id="ER">Eritrea</option>
                <option value="Eslovaquia" id="SK">Eslovaquia</option>
                <option value="Eslovenia" id="SI">Eslovenia</option>
                <option value="España" id="ES">España</option>
                <option value="Estados Unidos" id="US">Estados Unidos</option>
                <option value="Estonia" id="EE">Estonia</option>
                <option value="c" id="ET">Etiopía</option>
                <option value="Ex-República Yugoslava de Macedonia" id="MK">Ex-República Yugoslava de Macedonia</option>
                <option value="Filipinas" id="PH">Filipinas</option>
                <option value="Finlandia" id="FI">Finlandia</option>
                <option value="Francia" id="FR">Francia</option>
                <option value="Gabón" id="GA">Gabón</option>
                <option value="Gambia" id="GM">Gambia</option>
                <option value="Georgia" id="GE">Georgia</option>
                <option value="Georgia del Sur y las islas Sandwich del Sur" id="GS">Georgia del Sur y las islas Sandwich del Sur</option>
                <option value="Ghana" id="GH">Ghana</option>
                <option value="Gibraltar" id="GI">Gibraltar</option>
                <option value="Granada" id="GD">Granada</option>
                <option value="Grecia" id="GR">Grecia</option>
                <option value="Groenlandia" id="GL">Groenlandia</option>
                <option value="Guadalupe" id="GP">Guadalupe</option>
                <option value="Guam" id="GU">Guam</option>
                <option value="Guatemala" id="GT">Guatemala</option>
                <option value="Guayana" id="GY">Guayana</option>
                <option value="Guayana francesa" id="GF">Guayana francesa</option>
                <option value="Guinea" id="GN">Guinea</option>
                <option value="Guinea Ecuatorial" id="GQ">Guinea Ecuatorial</option>
                <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                <option value="Haití" id="HT">Haití</option>
                <option value="Holanda" id="NL">Holanda</option>
                <option value="Honduras" id="HN">Honduras</option>
                <option value="Hong Kong R. A. E" id="HK">Hong Kong R. A. E</option>
                <option value="Hungría" id="HU">Hungría</option>
                <option value="India" id="IN">India</option>
                <option value="Indonesia" id="ID">Indonesia</option>
                <option value="Irak" id="IQ">Irak</option>
                <option value="Irán" id="IR">Irán</option>
                <option value="Irlanda" id="IE">Irlanda</option>
                <option value="Isla Bouvet" id="BV">Isla Bouvet</option>
                <option value="Isla Christmas" id="CX">Isla Christmas</option>
                <option value="Isla Heard e Islas McDonald" id="HM">Isla Heard e Islas McDonald</option>
                <option value="Islandia" id="IS">Islandia</option>
                <option value="Islas Caimán" id="KY">Islas Caimán</option>
                <option value="Islas Cook" id="CK">Islas Cook</option>
                <option value="Islas de Cocos o Keeling" id="CC">Islas de Cocos o Keeling</option>
                <option value="Islas Faroe" id="FO">Islas Faroe</option>
                <option value="Islas Fiyi" id="FJ">Islas Fiyi</option>
                <option value="Islas Malvinas Islas Falkland" id="FK">Islas Malvinas Islas Falkland</option>
                <option value="Islas Marianas del norte" id="MP">Islas Marianas del norte</option>
                <option value="Islas Marshall" id="MH">Islas Marshall</option>
                <option value="Islas menores de Estados Unidos" id="UM">Islas menores de Estados Unidos</option>
                <option value="Islas Palau" id="PW">Islas Palau</option>
                <option value="Islas Salomón" d="SB">Islas Salomón</option>
                <option value="Islas Tokelau" id="TK">Islas Tokelau</option>
                <option value="Islas Turks y Caicos" id="TC">Islas Turks y Caicos</option>
                <option value="Islas Vírgenes EE.UU." id="VI">Islas Vírgenes EE.UU.</option>
                <option value="Islas Vírgenes Reino Unido" id="VG">Islas Vírgenes Reino Unido</option>
                <option value="Israel" id="IL">Israel</option>
                <option value="Italia" id="IT">Italia</option>
                <option value="Jamaica" id="JM">Jamaica</option>
                <option value="Japón" id="JP">Japón</option>
                <option value="Jordania" id="JO">Jordania</option>
                <option value="Kazajistán" id="KZ">Kazajistán</option>
                <option value="Kenia" id="KE">Kenia</option>
                <option value="Kirguizistán" id="KG">Kirguizistán</option>
                <option value="Kiribati" id="KI">Kiribati</option>
                <option value="Kuwait" id="KW">Kuwait</option>
                <option value="Laos" id="LA">Laos</option>
                <option value="Lesoto" id="LS">Lesoto</option>
                <option value="Letonia" id="LV">Letonia</option>
                <option value="Líbano" id="LB">Líbano</option>
                <option value="Liberia" id="LR">Liberia</option>
                <option value="Libia" id="LY">Libia</option>
                <option value="Liechtenstein" id="LI">Liechtenstein</option>
                <option value="Lituania" id="LT">Lituania</option>
                <option value="Luxemburgo" id="LU">Luxemburgo</option>
                <option value="Macao R. A. E" id="MO">Macao R. A. E</option>
                <option value="Madagascar" id="MG">Madagascar</option>
                <option value="Malasia" id="MY">Malasia</option>
                <option value="Malawi" id="MW">Malawi</option>
                <option value="Maldivas" id="MV">Maldivas</option>
                <option value="Malí" id="ML">Malí</option>
                <option value="Malta" id="MT">Malta</option>
                <option value="Marruecos" id="MA">Marruecos</option>
                <option value="Martinica" id="MQ">Martinica</option>
                <option value="Mauricio" id="MU">Mauricio</option>
                <option value="Mauritania" id="MR">Mauritania</option>
                <option value="Mayotte" id="YT">Mayotte</option>
                <option value="México" id="MX">México</option>
                <option value="Micronesia" id="FM">Micronesia</option>
                <option value="Moldavia" id="MD">Moldavia</option>
                <option value="Mónaco" id="MC">Mónaco</option>
                <option value="Mongolia" id="MN">Mongolia</option>
                <option value="Montserrat" id="MS">Montserrat</option>
                <option value="Mozambique" id="MZ">Mozambique</option>
                <option value="Namibia" id="NA">Namibia</option>
                <option value="Nauru" id="NR">Nauru</option>
                <option value="Nepal" id="NP">Nepal</option>
                <option value="Nicaragua" id="NI">Nicaragua</option>
                <option value="Níger" id="NE">Níger</option>
                <option value="Nigeria" id="NG">Nigeria</option>
                <option value="Niue" id="NU">Niue</option>
                <option value="Norfolk" id="NF">Norfolk</option>
                <option value="Noruega" id="NO">Noruega</option>
                <option value="Nueva Caledonia" id="NC">Nueva Caledonia</option>
                <option value="Nueva Zelanda" id="NZ">Nueva Zelanda</option>
                <option value="Omán" id="OM">Omán</option>
                <option value="Panamá" id="PA">Panamá</option>
                <option value="Papua Nueva Guinea" id="PG">Papua Nueva Guinea</option>
                <option value="Paquistán" id="PK">Paquistán</option>
                <option value="Paraguay" id="PY">Paraguay</option>
                <option value="Perú" id="PE">Perú</option>
                <option value="Pitcairn" id="PN">Pitcairn</option>
                <option value="Polinesia francesa" id="PF">Polinesia francesa</option>
                <option value="Polonia" id="PL">Polonia</option>
                <option value="Portugal" id="PT">Portugal</option>
                <option value="Puerto Rico" id="PR">Puerto Rico</option>
                <option value="Qatar" id="QA">Qatar</option>
                <option value="Reino Unido" id="UK">Reino Unido</option>
                <option value="República Centroafricana" id="CF">República Centroafricana</option>
                <option value="República Checa" id="CZ">República Checa</option>
                <option value="República de Sudáfrica" id="ZA">República de Sudáfrica</option>
                <option value="República Democrática del Congo Zaire" id="CD">República Democrática del Congo Zaire</option>
                <option value="República Dominicana" id="DO">República Dominicana</option>
                <option value="Reunión" id="RE">Reunión</option>
                <option value="Ruanda" id="RW">Ruanda</option>
                <option value="Rumania" id="RO">Rumania</option>
                <option value="Rusia" id="RU">Rusia</option>
                <option value="Samoa" id="WS">Samoa</option>
                <option value="Samoa occidental" id="AS">Samoa occidental</option>
                <option value="San Kitts y Nevis" id="KN">San Kitts y Nevis</option>
                <option value="San Marino" id="SM">San Marino</option>
                <option value="San Pierre y Miquelon" id="PM">San Pierre y Miquelon</option>
                <option value="San Vicente e Islas Granadinas" id="VC">San Vicente e Islas Granadinas</option>
                <option value="Santa Helena" id="SH">Santa Helena</option>
                <option value="Santa Lucía" id="LC">Santa Lucía</option>
                <option value="Santo Tomé y Príncipe" id="ST">Santo Tomé y Príncipe</option>
                <option value="Senegal" id="SN">Senegal</option>
                <option value="Serbia y Montenegro" id="YU">Serbia y Montenegro</option>
                <option value="Sychelles" id="SC">Seychelles</option>
                <option value="Sierra Leona" id="SL">Sierra Leona</option>
                <option value="Singapur" id="SG">Singapur</option>
                <option value="Siria" id="SY">Siria</option>
                <option value="Somalia" id="SO">Somalia</option>
                <option value="Sri Lanka" id="LK">Sri Lanka</option>
                <option value="Suazilandia" id="SZ">Suazilandia</option>
                <option value="Sudán" id="SD">Sudán</option>
                <option value="Suecia" id="SE">Suecia</option>
                <option value="Suiza" id="CH">Suiza</option>
                <option value="Surinam" id="SR">Surinam</option>
                <option value="Svalbard" id="SJ">Svalbard</option>
                <option value="Tailandia" id="TH">Tailandia</option>
                <option value="Taiwán" id="TW">Taiwán</option>
                <option value="Tanzania" id="TZ">Tanzania</option>
                <option value="Tayikistán" id="TJ">Tayikistán</option>
                <option value="Territorios británicos del océano Indico" id="IO">Territorios británicos del océano Indico</option>
                <option value="Territorios franceses del sur" id="TF">Territorios franceses del sur</option>
                <option value="Timor Oriental" id="TP">Timor Oriental</option>
                <option value="Togo" id="TG">Togo</option>
                <option value="Tonga" id="TO">Tonga</option>
                <option value="Trinidad y Tobago" id="TT">Trinidad y Tobago</option>
                <option value="Túnez" id="TN">Túnez</option>
                <option value="Turkmenistán" id="TM">Turkmenistán</option>
                <option value="Turquía" id="TR">Turquía</option>
                <option value="Tuvalu" id="TV">Tuvalu</option>
                <option value="Ucrania" id="UA">Ucrania</option>
                <option value="Uganda" id="UG">Uganda</option>
                <option value="Uruguay" id="UY">Uruguay</option>
                <option value="Uzbekistán" id="UZ">Uzbekistán</option>
                <option value="Vanuatu" id="VU">Vanuatu</option>
                <option value="Venezuela" id="VE">Venezuela</option>
                <option value="Vietnam" id="VN">Vietnam</option>
                <option value="Wallis y Futuna" id="WF">Wallis y Futuna</option>
                <option value="Yemen" id="YE">Yemen</option>
                <option value="Zambia" id="ZM">Zambia</option>
                <option value="Zimbabue" id="ZW">Zimbabue</option>
              </select>
              <br />
              <br />
              <label className="nombres">Estado Civil: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Casado</option>
                <option>Soltero</option>
                <option>Separado</option>
                <option>Union Libre</option>
                <option>Viudo</option>
                <option>Divorciado</option>
              </select>
              <br />
              <br />
              <label className="nombres">Direccion de Residencia: </label>
              <br />
              <input name="direccion_residencia" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Ciudad: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
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
              <br />
              <br />
              <label className="nombres">Estrato: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <br />
              <br />
              <label className="nombres">Telefono Movil: </label>
              <br />
              <input name="telefono_movil" onChange={this._handleChange} type="text" placeholder="Cedula de Ciudadania" className="campos" />
              <br />
              <br />
              <label className="nombres">Actividad Economica: </label>
              <br />
              <select className="campos">
                <option>Seleccione...</option>
                <option>Independiente</option>
                <option>Empleado</option>
                <option>Pensionado</option>
                <option>Otro</option>
              </select>
              
            </div>
            <br />
            <div className="btn-guardado">
              
                <button type="button" className="btn-guardar" onClick={() => this.guardarCliente()}>
                  Crear Cliente
                </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default DatosBasicosClienteNuevo;
