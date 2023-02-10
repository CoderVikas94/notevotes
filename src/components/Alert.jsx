import React from "react";

const Alert = ({alert}) => {
  return (
    <>
    {alert &&<div className={`alert alert-${alert.type}`} role="alert">
     <div className="d-flex justify-content-center align-items-center">
      {alert?.type!=="danger" ?alert?.type?.toUpperCase() :"ERROR "}

   {":"}
    {alert?.msg}</div> 

    </div>}
    </>
  );
};

export default Alert;
