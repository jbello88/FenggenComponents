import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";
import {Container, Row, Col } from "react-bootstrap";

const Docs = () => {

  const [route, setRoute] = useState();

  useEffect(() =>{
    window.addEventListener("hashchange", () => {
      setRoute(window.location.hash.substr(1));
    });
  },[])

  const component = route
  ? componentData.filter(component => component.name === route)[0]
  : componentData[0];


    return (
      <Container>
        <Row>
          <Col>
            <h1 className="pageTitle">Fenggen React-Components</h1>
          </Col>
        </Row>
        <Row>
          <Col className="navi" >
             <Navigation components={componentData.map(component => component.name)} />
          </Col>
          <Col xs={10} className="bb">
            <ComponentPage component={component}  />
          </Col>
       
        </Row>
      </Container>
    );

}

export default Docs;
