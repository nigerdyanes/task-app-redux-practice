import React from "react";

const Counter = ({ status, count }) => {
  return (
    <>
      <div className="col">
        <div className="card text-dark bg-light mb-3">
          <div className="card-header text-center">
            <h1>{status}</h1>
          </div>
          <div className="card-body text-center">
            <h1 className="display-1">{count}</h1>
          </div>
        </div>
      </div>
    </>
  );
};


export default Counter;
