import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Bienvenido Administrador</h1>
            <p>Resumen ultimo año</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Clientes Asignados</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-folder-open fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Procesos Abiertos</p>
              <span className="font-bold text-title">0</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-folder fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Procesos Cerrados</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-plus-square fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Procesos Totales</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Reporte de Usuarios</h1>
                <p>Abril 2020 - Abril 2021</p>
              </div>
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Usuarios Temporales</h1>
                <p>0</p>
              </div>

              <div className="card2">
                <h1>Usuarios Permanentes</h1>
                <p>1</p>
              </div>

              <div className="card3">
                <h1>Conectados</h1>
                <p>1</p>
              </div>

              <div className="card4">
                <h1>Inhabilitados</h1>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
