import React, {useState} from 'react';
import { Data } from './Data';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import SeguimientoDeclarativos from "../formularios/seguimiento-declarativos/SeguimientoDeclarativos"
import "./Accordion.css"
import {Link} from 'react-router-dom'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  width: 100%;
  margin-top: 2%;
`;

const Container1 = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width:100%;
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1{
    padding: 1rem;
    font-size: 1rem;
  }
  
  span{
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  padding: 0;
`;


const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if(clicked === index){
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <div className="main__container">
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Seguimiento del Proceso</h1>
              <p>Por favor suministre los siguientes datos</p>
            </div>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </div>
          <IconContext.Provider value={{
            color: '#00FFB9',
            size: '25px'
          }}>
            <AccordionSection>
              <Container1>
                {Data.map((item, index) => {
                  return (
                    <>
                      <Wrap onClick={() => toggle(index)} key={index} >
                        <h1>{item.question}</h1>
                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                      </Wrap>
                      {clicked === index ? (
                        <Dropdown>
                          <SeguimientoDeclarativos />
                        </Dropdown>
                      ) : null}
                    </>
                  );
                })}
              </Container1>
            </AccordionSection>
          </IconContext.Provider>
          < br/>
          < br/>
          < br/>
          <div className="btn-guardado">
            <Link to="./ProcesoFinal">
              <button type="button" className="btn-guardar" >
                Finalizar Proceso
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Accordion;