import React from "react";
import Input from "./Input";
import Output from "./Output";

const Home = ({showAlert}) => {


  return (
    <div className="App">
      <Input showAlert={showAlert}
      />
      <Output showAlert={showAlert}/>
    </div>
  );
};

export default Home;
