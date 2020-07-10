import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";

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
      <div className="container">
        <div className="row">
          <h1 className="col pageTitle">Fenggen React-Components</h1>
          </div>
        <div className="row" >
          <div className="col-2 navi" >
             <Navigation components={componentData.map(component => component.name)} />
          </div>
          <div className="col-10 bb">
            <ComponentPage component={component}  />
          </div>
       
        </div>
      </div>
    );

}

export default Docs;
